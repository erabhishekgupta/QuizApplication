import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    console.log("Current User:", user);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        alert("Logged out successfully!");
        navigate("/login");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 shadow-lg rounded">
            <div className="container-fluid">
                <h1 className="navbar-brand text-light fw-bold">Quiz App</h1>
                <div>
                    <Link to="/" className="btn btn-outline-light mx-2">🏠 Home</Link>
                    {user ? (
                        <>
                            <span className="text-light mx-2">👤 {user.userId}</span>
                            <button className="btn btn-danger mx-2" onClick={handleLogout}>🚪 Logout</button>
                        </>
                    ) : (
                        <Link to="/login" className="btn btn-primary fw-bold">🔑 Login</Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
