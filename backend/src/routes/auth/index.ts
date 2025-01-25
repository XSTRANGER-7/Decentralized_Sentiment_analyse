import { Elysia, t } from "elysia";
import authController from "@/routes/auth/auth.controller";

const authRoutes = new Elysia();

authRoutes
	.post("/sign-up", authController.SignUp, {
		body: t.Object(
			{
				email: t.String(),
				password: t.String(),
				name: t.String(),
				address: t.String(),
				role: t.String()
			},
			{
				description: "Expected email, password, full name & wallet address",
			},
		),
		detail: {
			summary: "Sign Up",
			tags: ["auth"],
		},
	})
	.post("/login", authController.Login, {
		body: t.Object(
			{
				email: t.String(),
				password: t.String(),
			},
			{
				description: "Expected email and password",
			},
		),
		detail: {
			summary: "Login",
			tags: ["auth"],
		},
	});

export default authRoutes;
