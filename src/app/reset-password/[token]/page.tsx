"use client";
import ResetPasswordForm from "@/app/components/ResetPasswordForm";

interface PageProps {
    params: { token?: string }; // Hacemos que `token` sea opcional
}

export default function ResetPasswordPage({ params }: PageProps) {
    if (!params.token) {
        return <div className="text-center text-red-500">Error: Token no válido.</div>;
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Restablecer Contraseña</h2>
                <ResetPasswordForm token={params.token} />
            </div>
        </div>
    );
}
