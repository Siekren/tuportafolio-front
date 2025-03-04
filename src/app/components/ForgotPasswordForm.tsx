"use client";
import { useState } from "react";

export default function ForgotPasswordForm() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleRequestReset = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/forgot-password`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) throw new Error("No se pudo enviar el correo");

            setMessage("Si el correo está registrado, recibirás un enlace de recuperación.");
        } catch (err) {
            setMessage("Hubo un problema al enviar el correo.");
        }
    };

    return (
        <form onSubmit={handleRequestReset} className="space-y-4">
            {message && <p className="text-sm text-center text-gray-600">{message}</p>}
            <div>
                <label className="block text-gray-700">Correo Electrónico</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                Enviar Enlace de Recuperación
            </button>
        </form>
    );
}
