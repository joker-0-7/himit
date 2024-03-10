"use client";
import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Login from "../login/page";

const UserContext = createContext();

const UseProvider = ({ children }) => {
    const [state, setState] = useState({ user: {}, token: "" });
    const router = useRouter();
    useEffect(() => {
        setState(JSON.parse(window.localStorage.getItem("auth")));
    }, []);
    useEffect(() => {
        if (!state) {
            router.push("/login");
        }
    }, [state]);
    return (
        <UserContext.Provider value={[state, setState]}>
            {children}
        </UserContext.Provider>
    );
};
export { UserContext, UseProvider };
