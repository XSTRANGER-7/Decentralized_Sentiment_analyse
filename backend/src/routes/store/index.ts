import { Elysia, t } from "elysia";
import storeController from "@/routes/store/store.controller";

const storeRoutes = new Elysia();

storeRoutes
	.get("/presigned-url", storeController.GenPresignedUrl, {
		query: t.Object(
			{
				name: t.String()
			},
			{
				description: "Expected name of the object",
			},
		),
		detail: {
			summary: "Gen Presigned url",
			tags: ["store"],
		},
	});

export default storeRoutes;
