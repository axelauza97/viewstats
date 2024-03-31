"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user";
import {
  loginWithGoogle,
  loginWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "../services/authService";

import { Loading } from "./UI/Loading";

import { BannerContext } from "../context/banner";

export const LoginForm = () => {
  const { setUser } = useContext(UserContext);
  const { setBanner } = useContext(BannerContext);
  const [isLogin, setIsLogin] = useState(true);

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData(event.target);
      let userData;
      if (isLogin) {
        userData = await loginWithEmailAndPassword(formData);
      } else {
        userData = await createUserWithEmailAndPassword(formData);
      }
      setBanner({
        message: userData.message,
        status: userData.status,
        show: true,
      });
      setUser(userData.data);
      document.cookie = `access=logged; Path=/; `;
      sessionStorage.setItem("access", userData.data.access);
      sessionStorage.setItem("refresh", userData.data.refresh);
      router.push("/dashboard");
    } catch (error) {
      setBanner({ message: error.message, status: "error", show: true });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <section className="relative grid gap-4 rounded-xl bg-slate-100 p-6 ">
        {isLoading && <Loading />}

        <h1 className="pb-8 text-center text-2xl font-bold">ViewStats todo</h1>
        <form className="flex flex-col gap-2 " onSubmit={handleSubmit}>
          <label className="font-bold" htmlFor="userName">
            User Name:
          </label>
          <input
            className="px-2 py-1 font-semibold"
            id="userName"
            type="text"
            required
            name="email"
          />
          <label className="font-bold" htmlFor="password">
            Password:
          </label>
          <input
            className="px-2 py-1 font-semibold"
            id="password"
            type="password"
            required
            name="password"
          />
          <button
            className="mt-2 rounded-md bg-slate-400 py-2 font-bold hover:scale-105 active:scale-95"
            type="submit"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <button
          className="rounded-md p-2 font-bold hover:scale-105 active:scale-95 w-fit mx-auto"
          onClick={() => setIsLogin((prev) => !prev)}
        >
          {isLogin ? "Sign Up!" : "Login"}
        </button>
      </section>
    </>
  );
};
