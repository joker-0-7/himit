"use client";
import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const UserContext = createContext();

const UseProvider = ({ children }) => {
  const [state, setState] = useState({ user: {}, token: "" });
  const router = useRouter();
  useEffect(() => {
    setState(JSON.parse(window.localStorage.getItem("auth")));
  }, []);

  return (
    <UserContext.Provider value={[state, setState]}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UseProvider };
