import db from "@/libs/db";

const Users = [
	{
		id: "cjld2cjxh0000qzrmn831i7rn",
		email: "admin@gmail.com",
		name: "Admin Das",
        address: "0xa608344e24A71a77c6f22579D4095B390A423D07",
		hashedPassword: "admin@123",
		passwordSalt: "salted",
	},
	{
		id: "aiow3dkyz1230dzrmn43fi6xc",
		email: "user1@gmail.com",
		name: "User Roy",
        address: "0xb618344e24A71a77c6f22579D4095B390A4236D2",
		hashedPassword: "user1@123",
		passwordSalt: "salted123",
	},
];

const seed = async () => {
	console.log("Seeding db...");

	for (let i = 0; i < Users.length; i++) {
		const user = Users[i];

		const res = await db.user.create({
			data: user,
			// data: {
			// 	id: "cjld2cjxh0000qzrmn831i7rn",
			// 	email: "admin@gmail.com",
			// 	hashedPassword: "admin@123",
			// 	emailVerified: true,
			// 	name: "Admin Das",
			// 	oauthAccounts: {
			// 		create: [
			// 			{
			// 				provider: "string",
			// 				providerAccountId: "string",
			// 			},
			// 		],
			// 	},
			// 	sessions: {
			// 		create: [
			// 			{
			// 				expiresAt: new Date(),
			// 			},
			// 		],
			// 	},
			// },
		});

		console.log("Created:", res);
	}
};

seed()
	.then(async () => {
		await db.$disconnect();
		console.log("DB seeded successfully.");
	})
	.catch(async (err) => {
		console.error(err);
		await db.$disconnect();
		process.exit(1);
	});