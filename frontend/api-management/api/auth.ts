import axios from "axios";
import { Login, Register } from "../models/user";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

interface AuthResponse {
  message: string;
  user: {
    id: string;
    email: string;
    name: string;
    address?: string;
  };
  token?: string;
}
export async function signUp(data: Register): Promise<AuthResponse> {
  try {
    const res = await axios.post("http://localhost:4000/auth/sign-up", {
      email: data.email,
      password: data.password,
      name: data.name,
    });

    if (res.data.token) {
      localStorage.setItem('token', res.data.token);
    }

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Network error occurred');
    }
    throw error;
  }
}

export async function login(data: Login): Promise<AuthResponse> {
  try {
    const res = await axios.post("http://localhost:4000/auth/login", {
      email: data.email,
      password: data.password,
    });

    if (res.data.token) {
      localStorage.setItem('token', res.data.token);
    }

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
        console.log(error.response?.data)
    }
    throw error;
  }
}

export function logout(): void {
  localStorage.removeItem('token');
}
