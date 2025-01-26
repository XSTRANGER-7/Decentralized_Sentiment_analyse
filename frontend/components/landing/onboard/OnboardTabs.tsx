"use client";
import { login, signUp } from "@/api-management/api/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function OnboardTabs() {
  const { account } = useWallet(); // Get Aptos Wallet Account
  const [activeTab, setActiveTab] = useState("Login");




  return (
    <div className='md:w-[60%]'>
            <div className='py-4 flex gap-4'>
                <Button className={twMerge(activeTab === "Login" ? "bg-green-400" : "bg-gray-300", " text-black hover:text-white generalBorder")} onClick={() => {
                    setActiveTab("Login")
                }}>Login</Button>
                <Button className={twMerge(activeTab === "Register" ? "bg-orange-400" : "bg-gray-300", " text-black hover:text-white generalBorder")} onClick={() => {
                    setActiveTab("Register")
                }}>Register</Button>
            </div>
            <div>
                {activeTab === "Login" ?
                    <div>
                        <h2 className='font-bold text-3xl'>Login to your account.</h2>
                        <span>use your registered email and password to login</span>
                        <form action={(e: FormData) => {
                            const email = e.get("email")?.toString() ?? "";
                            const password = e.get("password")?.toString() ?? "";

                            login({ email: email, password: password })
                            localStorage.setItem("user", email);
                            redirect("/rent")

                        }} className='py-6 flex flex-col gap-3 lg:w-[50%]'>
                            <div>
                                <span className='text-xs'>Enter your email</span>
                                <Input name='email' type='email' placeholder='alandoe@email.com' className=' generalBorder ' />
                            </div>
                            <div>
                                <span className='text-xs'>Enter your password</span>
                                <Input name='password' type='password' placeholder='' className=' generalBorder' />
                            </div>
                            <span className='text-xs'>
                                by logging in you agree to our <u>terms and conditions</u>
                            </span>
                            <Button type='submit' className='bg-green-400 text-black hover:text-white generalBorder'>Login</Button>
                        </form>
                    </div>
                    : <div>
                        <h2 className='font-bold text-3xl'>Register Account</h2>
                        <span>create a new account, enter the details below</span>
                        <form action={(e: FormData) => {
                            const email = e.get("email")?.toString() ?? "";
                            const password = e.get("password")?.toString() ?? "";
                            const name = e.get("name")?.toString() ?? "";


                            signUp({ email: email, password: password, address: publicKey?.toString() ?? "", name: name })
                            localStorage.setItem("user", email);


                        }} className='py-6 flex flex-col gap-3 lg:w-[50%]'>
                            <div>
                                <span className='text-xs'>Enter your email</span>
                                <Input name='email' type='email' placeholder='alandoe@email.com' className=' generalBorder ' />
                            </div>
                            <div>
                                <span className='text-xs'>Enter a username</span>
                                <Input name='name' type='text' placeholder='alandoe123' className=' generalBorder ' />
                            </div>
                            <div>
                                <span className='text-xs'>Create your password</span>
                                <Input name='password' type='password' placeholder='' className=' generalBorder' />
                            </div>
                            <div>
                                <span className='text-xs'>Re type your password</span>
                                <Input type='password' placeholder='' className=' generalBorder' />
                            </div>
                            <span className='text-xs'>
                                by creating a new account  you agree to our <u>terms and conditions</u>
                            </span>
                            <Button type='submit' className='bg-orange-400 text-black hover:text-white offsetstyle generalBorder'>Register</Button>
                        </form>
                    </div>}
            </div>
        </div>
  );
}
