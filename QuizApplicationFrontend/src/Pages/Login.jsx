import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
    const { login } = useContext(AuthContext);
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await axios.post("http://localhost:8080/loginUser", { userId, password });

            if (!response.data) {
                setError("Invalid User ID or Password");
            } else {
                login(response.data);  // ✅ Store user data in context
                alert("Login Successful!");
                navigate("/quiz");
            }
        } catch (error) {
            setError("Something went wrong. Please try again!");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100"
            style={{ background: "linear-gradient(to right, #2193b0, #6dd5ed)", minHeight: "100vh" }}>
            <div className="card p-4 shadow-lg rounded-4" style={{ width: "25rem", background: "#fff" }}>
                <h2 className="text-center mb-3">Login</h2>
                {error && <div className="alert alert-danger">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">User ID:</label>
                        <input type="email" className="form-control" placeholder="Enter your user ID"
                            value={userId} onChange={(e) => setUserId(e.target.value)} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password:</label>
                        <input type="password" className="form-control" placeholder="Enter your password"
                            value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                        <a href="/register" className="text-primary">Don't have an account?</a>
                        <button type="submit" className="btn btn-primary" disabled={loading || !userId || !password}>
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
