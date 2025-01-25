import { Elysia } from "elysia";
import authRoutes from "@/routes/auth";
import machineRoutes from "@/routes/machine";
import storeRoutes from "@/routes/store";

const routes = new Elysia();

routes
	.get("/", () => "Hello from Elysia!")
	.group("/auth", (routes) => routes.use(authRoutes))
	.group("/machine", (routes) => routes.use(machineRoutes))
	.group("/store", (routes) => routes.use(storeRoutes));

export default routes;
