"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/app/store/useAuthStore"; // Verifica que la ruta sea correcta

export default function RegisterForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { setUser } = useAuthStore();

    // Verificar si la variable de entorno existe
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    if (!API_URL) {
        console.error("⚠️ ERROR: La variable NEXT_PUBLIC_API_URL no está definida.");
    }

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden");
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(`${API_URL}/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Error en el registro");
            }

            const data = await response.json();
            setUser(data.user);

            // Guardar el token en el almacenamiento solo en el cliente
            if (typeof window !== "undefined") {
                localStorage.setItem("token", data.token);
            }

            setLoading(false);
            router.push("/dashboard");
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("Error desconocido");
            }
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleRegister} className="space-y-4">
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div>
                <label className="block text-gray-700">Usuario</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>
            <div>
                <label className="block text-gray-700">Correo</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>
            <div>
                <label className="block text-gray-700">Contraseña</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>
            <div>
                <label className="block text-gray-700">Confirmar Contraseña</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                disabled={loading}
            >
                {loading ? "Registrando..." : "Registrarse"}
            </button>
        </form>
    );
}
