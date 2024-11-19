import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheContext } from "./TheContext";


function LoginComponent() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const {setAuthor} = useTheContext();
    const navigate = useNavigate();

// jwt ile Userı bulduk (jwt email ve sifre postlayınca geldi)
    async function fetchUser() {
        const jwt = localStorage.getItem("jwt");
        const response = await fetch(`/api/User`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${jwt}`
            }
        });
        if (!response.ok){
            throw new Error("Failed to fetch User.");
        }
        const authorResponse = await response.json();
        const authorData = authorResponse.data;
        return authorData;
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/Auth/login", {
                method: "POST", // specify the method
                headers: {
                    "Content-Type": "application/json", // set content type to JSON
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            if (!response.ok) {
                // handle HTTP errors (non-2xx responses)
                throw new Error("Login failed.");
            }

            const responseData = await response.json(); // Parse the JSON from the response

            const data =responseData.data;
            console.log("responsdata:",data.jwtToken);

            localStorage.setItem("jwt", data.jwtToken);
            const authorData = await fetchUser();
            setAuthor(authorData);
            navigate("/");
        } catch (error) {
            setErrorMessage("Login failed.");
            console.log(error);
        }
    };
    //jwt kaydet
    return (
        <div className="flex flex-col place-items-center mt-8">
            <h2 className="flex justify-between pb-8 pr-44 font-bold text-4xl ">Login</h2>
            {errorMessage && <p className="text-red-800">{errorMessage}</p>}
            <form onSubmit={handleSubmit} className="w-3/6 ">
                <div className="flex flex-col w-4/6">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border rounded-md my-3"
                    />
                </div>
                <div className="flex flex-col w-4/6">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="border rounded-md my-3"
                    />
                </div>
                <button type="submit" className="border rounded-md bg-sky-600 border-sky-600 w-4/6 text-lg text-white my-3">Sign in</button>
                <div>
                    <p className="text-blue-700">Forgot password?</p>
                </div>
            </form>
        </div>
    );
}

export default LoginComponent;
