"use client";
import { useState, useEffect, createContext } from "react";
import axios from "axios";

const ContentContext = createContext();

const ContentProvider = ({ children }) => {
    const [value, setValue] = useState([]);
    const getContent = async () => {
        try {
            const data = await axios.get(
                `${process.env.NEXT_PUBLIC_API}/users/goal-application`
            );
            console.log(data);
            setValue(data.data[0]);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getContent();
    }, []);

    return (
        <ContentContext.Provider value={[value, setValue]}>
            {children}
        </ContentContext.Provider>
    );
};
export { ContentContext, ContentProvider };
