"use client";
import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Login from "../login/page";
import { UserContext } from "./userContext";

const currentContext = createContext();

const Current = ({ children }) => {
    const [state, setState] = useContext(UserContext);
    const router = useRouter();
    useEffect(() => {
        if (!state) {
            router.push("/login");
        }
    });

    return <currentContext.Provider>{children}</currentContext.Provider>;
};
export { currentContext, Current };
