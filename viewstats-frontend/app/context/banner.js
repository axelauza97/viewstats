"use client";
import { createContext, useState } from "react";

export const BannerContext = createContext();
export function BannerProvider({ children }) {
  const [banner, setBanner] = useState({});

  return (
    <BannerContext.Provider value={{ banner, setBanner }}>
      {children}
    </BannerContext.Provider>
  );
}
