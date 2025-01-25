import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { Lucia } from "lucia";
import { prisma } from "@/libs/db";
import type { User } from "@prisma/client";
import { generateId } from "lucia";
import { alphabet, generateRandomString } from "oslo/crypto";
import { Argon2id } from "oslo/password";

const adapter = new PrismaAdapter(prisma.session, prisma.user);

const luciaAuth = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			secure: process.env.NODE_ENV === "production",
		},
	},
	getUserAttributes: (attributes) => {
		return {
			name: attributes.name,
			email: attributes.email,
			address: attributes.address,
			hashedPassword: attributes.hashedPassword,
		};
	},
});

declare module "lucia" {
	interface Register {
		Lucia: typeof luciaAuth;
		DatabaseUserAttributes: DatabaseUserAttributes;
	}
}

interface DatabaseUserAttributes {
	name: User["name"];
	email: User["email"];
	address: User["address"];
	hashedPassword: User["hashedPassword"];
}

const argon2id = new Argon2id();

export {
	generateId,
	alphabet,
	generateRandomString,
	argon2id,
	luciaAuth
};