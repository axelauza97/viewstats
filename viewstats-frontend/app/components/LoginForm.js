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

      localStorage.setItem("user_id", JSON.stringify(userData.data.pk));
      localStorage.setItem("access", JSON.stringify(userData.data.access));
      localStorage.setItem("refresh", JSON.stringify(userData.data.refresh));

      router.push("/dashboard");
    } catch (error) {
      setBanner({ message: error.message, status: "error", show: true });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <section className="relative grid gap-4 rounded-xl bg-gray-50 p-6 ">
        {isLoading && <Loading />}

        <h1 className="pb-8 text-center text-2xl font-bold">ViewStats todo</h1>
        <form className="flex flex-col gap-2 " onSubmit={handleSubmit}>
          <label className="font-bold" htmlFor="userName">
            User Name:
          </label>
          <input
            className="rounded px-2 py-1 font-semibold shadow"
            id="userName"
            type="text"
            required
            name="email"
          />
          <label className="font-bold" htmlFor="password">
            Password:
          </label>
          <input
            className="rounded px-2 py-1 font-semibold shadow"
            id="password"
            type="password"
            required
            name="password"
          />
          <button
            className="bg-red mt-2 rounded-md py-2 font-extrabold text-white hover:scale-105 active:scale-95"
            type="submit"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <button
          className="mx-auto w-full rounded-md p-2 font-bold hover:scale-105 hover:bg-gray-100 active:scale-95"
          onClick={() => setIsLogin((prev) => !prev)}
        >
          {isLogin ? "Sign Up!" : "Login"}
        </button>
      </section>
    </>
  );
};
