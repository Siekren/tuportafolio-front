"use client";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/navigation";
import LoginForm from "../components/LoginForm";
import Link from "next/link";

export default function LoginPage() {
    const { user } = useAuth();
    const router = useRouter();

    if (user) {
        router.push("/dashboard");
        return null;
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h2>
                <LoginForm />
                <br></br>
                <p>
                    <Link href="/forgot-password" className="text-blue-500 hover:underline">
                        ¿Olvidaste tu contraseña?
                    </Link>
                </p>
            </div>
        </div>
    );
}
