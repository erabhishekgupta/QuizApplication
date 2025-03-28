import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        return JSON.parse(localStorage.getItem("user")) || null;
    });

    const login = (userData) => {
        console.log("User Logged In:", userData);
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData)); // Store user info
    };

    const logout = () => {
        console.log("User Logged Out");
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
