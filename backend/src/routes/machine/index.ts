import { Elysia, t } from "elysia";
import machineController from "@/routes/machine/machine.controller";

const machineRoutes = new Elysia();

machineRoutes
	.post("/create", machineController.CreateMachine, {
		body: t.Object(
			{
				userId: t.String(),
				title: t.String(),
				cpu: t.Integer(),
				ram: t.Integer(),
				size: t.Integer(),
				time: t.Integer()
			},
			{
				description: "Expected userId, title, time, cpu, ram, and size",
			},
		),
		detail: {
			summary: "Create Machine",
			tags: ["machine"],
		},
	})
	.get("/all", machineController.GetAllMachines, {
		detail: {
			summary: "Get all machines",
			tags: ["machine"],
		},
	})
	.get("/:userId", machineController.GetMachinesByUserId, {
		params: t.Object({
			userId: t.String()
		}),
		detail: {
			summary: "Get all machines bu user id",
			tags: ["machine"],
		},
	})

export default machineRoutes;
