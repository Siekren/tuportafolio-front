"use client";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h2>
                <LoginForm />
            </div>
        </div>
    );
}
