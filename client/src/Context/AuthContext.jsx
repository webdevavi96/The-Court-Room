import React from "react";
import axios from "axios";

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        const storedUser = localStorage.getItem("user");

        if (accessToken && storedUser) {
            setIsAuthenticated(true);
            setUser(JSON.parse(storedUser));
            axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        }
        setLoading(false);
    }, []);

    const login = (userData, accessToken) => {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("user", JSON.stringify(userData));
        axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        setUser(userData);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        delete axios.defaults.headers.common["Authorization"];
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                user,
                login,
                logout,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}