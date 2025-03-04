"use client";

import { useState } from "react";
import { useAuthStore } from "../store/authStore";

const RegisterPage = () => {
    const { register, isLoading, error } = useAuthStore();
    const [formData, setFormData] = useState({ email: "", password: "", name: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await register(formData.email, formData.password, formData.name);
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form className="p-6 bg-white shadow-lg rounded-lg w-96" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-4">Registro</h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    className="w-full p-2 border rounded mb-2"
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    className="w-full p-2 border rounded mb-2"
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    className="w-full p-2 border rounded mb-2"
                    onChange={handleChange}
                    required
                />

                {error && <p className="text-red-500">{error}</p>}

                <button
                    type="submit"
                    className="w-full p-2 bg-blue-500 text-white rounded"
                    disabled={isLoading}
                >
                    {isLoading ? "Registrando..." : "Registrarse"}
                </button>
            </form>
        </div>
    );
};

export default RegisterPage;
