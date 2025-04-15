"use client";
import ResetPasswordForm from "@/app/components/ResetPasswordForm";

type ResetPasswordPageProps = {
    params: { token?: string }; // Marcamos `token` como opcional por seguridad
};

export default function ResetPasswordPage({ params }: ResetPasswordPageProps) {
    const token = params?.token;

    if (!token) {
        return <p>Error: Token no proporcionado</p>;
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Restablecer Contraseña</h2>
                <ResetPasswordForm token={token} />
            </div>
        </div>
    );
}
