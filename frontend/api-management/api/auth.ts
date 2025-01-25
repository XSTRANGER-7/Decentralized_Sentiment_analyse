import { Login, Register } from "../models/user";

export async function signUp(data: Register) {
    const res = await fetch("https://tappin-api.onrender.com/auth/sign-up", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: data.email,
            password: data.password,
            name: data.name,
            address: data.address,
        }),
    });
    console.log(res);
}

export async function login(data: Login) {
    const res = await fetch("https://tappin-api.onrender.com/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: data.email,
            password: data.password,
        }),
    });
    console.log(res);
}
