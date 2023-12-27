import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const UserContext = createContext();

const UseProvider = ({ children }) => {
  const [user, setUser] = useState({ user: {}, token: "" });
  const router = useRouter();
  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("auth")));
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UseProvider };
