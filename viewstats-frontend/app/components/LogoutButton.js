"use client";
import { useRouter } from "next/navigation";
import { Logout } from "../svg/logout";
import { useContext } from "react";
import { BannerContext } from "../context/banner";

export const LogoutButton = () => {
  const router = useRouter();
  const { setBanner } = useContext(BannerContext);

  return (
    <button
      onClick={() => {
        localStorage.removeItem("user_id");
        router.push("/");
        setBanner({
          message: "Logout Successful!",
          status: 200,
          show: true,
        });
      }}
      className="bg-red fixed right-0 top-0 grid h-10 w-10 place-content-center p-4 text-center font-bold text-white shadow drop-shadow transition duration-75 ease-in-out hover:scale-105 focus:ring active:scale-90"
    >
      <Logout />
    </button>
  );
};
