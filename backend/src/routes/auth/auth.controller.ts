import {
	generateId,
	alphabet,
	generateRandomString,
	argon2id,
	luciaAuth,
} from "@/libs/auth";

const SignUp = async ({ body, set, db, log, cookie }) => {
	try {
		const { email, password, name, address, role } = body;

		const existingUser = await db.user.findUnique({
			where: { email },
		});

		if (existingUser) {
			set.staus = 409;
			return { message: "User already exists" };
		}

		const userId = generateId(15);
		const passwordSalt = generateRandomString(
			16,
			alphabet("a-z", "A-Z", "0-9"),
		);

		const hashedPassword = await argon2id.hash(passwordSalt + password);

		const newUser = await db.user.create({
			data: {
				id: userId,
				email,
				hashedPassword,
				passwordSalt,
				name,
				address,
				role
			},
		});

		const session = await luciaAuth.createSession(userId, {});
		const sessionCookie = luciaAuth.createSessionCookie(session.id);

		set.status = 201;
		cookie[sessionCookie.name]?.set({
			value: sessionCookie.value,
			...sessionCookie.attributes,
		});

		return newUser;
	} catch (err) {
		log.error(err);
		set.status = 500;
		return { message: "Internal Server Error" };
	}
};

const Login = async ({ body, set, db, log, cookie }) => {
	try {
		const { email, password } = body;

		const user = await db.user.findUnique({
			where: { email },
		});

		if (!user) {
			set.staus = 401;
			return { message: "User not found" };
		}

		const isVerified = await argon2id.verify(
			user.hashedPassword,
			user.passwordSalt + password,
		);

		if (!isVerified) {
			set.staus = 401;
			return { message: "Wrong password" };
		}

		const session = await luciaAuth.createSession(user.id, {});
		const sessionCookie = luciaAuth.createSessionCookie(session.id);

		set.status = 200;
		cookie[sessionCookie.name]?.set({
			value: sessionCookie.value,
			...sessionCookie.attributes,
		});

		return user;
	} catch (err) {
		log.error(err);
		set.status = 500;
		return { message: "Internal Server Error" };
	}
};

export default { SignUp, Login };
