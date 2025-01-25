import { generateId } from "lucia";

const CreateMachine = async ({ body, set, db, log }) => {
	try {
		const { title, time, cpu, ram, size, userId } = body;
		const user = await db.user.findUnique({
			where: { id: userId },
		});

		if (!user) {
			set.staus = 401;
			return { message: "User not found" };
		}

		if (user.role !== "PROVIDER") {
			set.staus = 403;
			return { message: "Forbidden" };
		}

		const machineId = generateId(16);

		const machine = await db.machine.create({
			data: {
				id: machineId,
				title,
				time,
				cpu,
				ram,
				size,
				user: {
					connect: {
						id: userId,
					},
				},
			},
		});

		set.status = 201;
		return machine;
	} catch (err) {
		log.error(err);
		set.status = 500;
		return { message: "Internal Server Error" };
	}
};

const GetMachinesByUserId = async ({ params: { userId }, set, db, log }) => {
	try {
		const machines = await db.machine.findMany({
			where: { userId },
			include: {
				user: true
			}
		});

		set.status = 200;
		return machines;
	} catch (err) {
		log.error(err);
		set.status = 500;
		return { message: "Internal Server Error" };
	}
};

const GetAllMachines = async ({ set, db, log }) => {
	try {
		const allMachines = await db.machine.findMany({
			include: {
				user: true
			}
		})

		set.status = 200;
		return allMachines;
	} catch (err) {
		log.error(err);
		set.status = 500;
		return { message: "Internal Server Error" };
	}
};

export default {
	CreateMachine,
	GetAllMachines,
	GetMachinesByUserId
};
