"use client";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();
export function UserProvider({ children }) {
  const [user, setUser] = useState({});
  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
