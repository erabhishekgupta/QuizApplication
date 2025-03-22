import React, { useState } from "react";
import axios from "axios";

function Register() {
    const [register, setRegister] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegister({ ...register, [name]: value });

        if (name === "password") {
            evaluatePasswordStrength(value);
        }
    };

    const evaluatePasswordStrength = (password) => {
        if (password.length < 6) {
            setPasswordStrength("Weak");
        } else if (password.length < 10) {
            setPasswordStrength("Moderate");
        } else {
            setPasswordStrength("Strong");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setLoading(true);

        try {
            const response = await axios.post("http://localhost:8080/addUser", register);
            setSuccess("User registered successfully!");
            setRegister({ name: "", email: "", password: "" });
        } catch (error) {
            setError("Registration failed. Please try again!");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div 
            className="d-flex justify-content-center align-items-center vh-100" 
            style={{
                background: "linear-gradient(to right, #6dd5ed, #2193b0)",
                minHeight: "100vh"
            }}
        >
            <div className="card p-4 shadow-lg rounded-4" style={{ width: "25rem", background: "#fff" }}>
                <h2 className="text-center mb-3">Register</h2>

                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="name" 
                            placeholder="Enter your name" 
                            value={register.name} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email:</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            name="email" 
                            placeholder="Enter your email" 
                            value={register.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password:</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            name="password" 
                            placeholder="Enter your password" 
                            value={register.password} 
                            onChange={handleChange} 
                            required 
                        />
                        {register.password && (
                            <small className={`text-${passwordStrength === "Strong" ? "success" : passwordStrength === "Moderate" ? "warning" : "danger"}`}>
                                {passwordStrength} Password
                            </small>
                        )}
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                        <a href="/login" className="text-primary">Already have an account?</a>
                        <button type="submit" className="btn btn-primary" disabled={loading || !register.name || !register.email || !register.password}>
                            {loading ? "Registering..." : "Register"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
