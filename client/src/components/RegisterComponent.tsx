import React, { useState } from "react";
import axios from "axios";

function RegisterComponent() {
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:5028/api/account/register", {
                fullName,
                email,
                password
            });

            console.log("Registration successful", response.data);
            // Redirect user or show success message here

        } catch (error) {
            setErrorMessage("Registration failed.");
            console.log(error);
        }
    }

    return (
        <div className="flex flex-col place-items-center mt-8">
            <h2 className="flex justify-between pb-8 pr-44 font-bold text-4xl ">Register</h2>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            <form onSubmit={handleSubmit} className="w-3/6 ">
                <div className="flex flex-col w-4/6">
                    <label>FullName:</label>
                    <input
                        type="fullname"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required className="border rounded-md my-3"
                    />
                </div>
                <div className="flex flex-col w-4/6">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required className="border rounded-md my-3"
                    />
                </div>
                <div className="flex flex-col w-4/6">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required className="border rounded-md my-3"
                    />
                </div>
                <div className="flex flex-col w-4/6">
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required className="border rounded-md my-3"
                    />
                </div>
                <button type="submit" className="border rounded-md bg-sky-600 border-sky-600 w-4/6 text-lg text-white my-3">Register</button>
            </form>
        </div>
    );
}

export default RegisterComponent;
