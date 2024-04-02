"use client";
import { useContext, useEffect } from "react";
import { BannerContext } from "../../context/banner";

export const Banner = () => {
  const { banner, setBanner } = useContext(BannerContext);
  useEffect(() => {
    const timer = setTimeout(() => {
      setBanner({ ...banner, show: false });
    }, 5000);
    return () => clearTimeout(timer);
  }, [banner]); // Empty dependency array ensures that this effect runs only once

  return (
    <>
      <aside
        className={`fixed z-50 ${
          banner.show ? "top-0" : "-top-20"
        } left-0 right-0 text-center transition-all`}
      >
        <p
          className={` ${
            banner.status == 200 || banner.status == 201
              ? "bg-green-400"
              : "bg-red-400"
          } w-screen py-4 text-xl font-bold`}
        >
          {banner.message}
        </p>
      </aside>
    </>
  );
};
