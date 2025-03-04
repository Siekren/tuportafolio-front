import { create } from "zustand";

interface AuthState {
    user: any;
    isLoading: boolean;
    error: string | null;
    register: (email: string, password: string, name: string) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isLoading: false,
    error: null,

    register: async (email, password, name) => {
        set({ isLoading: true, error: null });

        // Validaciones antes de enviar la petición
        if (!email || !password || !name) {
            set({ error: "Todos los campos son obligatorios", isLoading: false });
            return;
        }

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password, name }),
            });

            // Verificar si la respuesta tiene un mensaje de error
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Error en el registro");
            }

            const data = await res.json();
            set({ user: data, isLoading: false });

        } catch (error: any) {
            set({ error: error.message || "Error desconocido", isLoading: false });
        }
    },
}));
