import { create } from "zustand";

interface User {
    id: string;
    email: string;
    name: string;
}

interface AuthState {
    user: User | null;
    isLoading: boolean;
    error: string | null;
    setUser: (user: User) => void;
    register: (email: string, password: string, name: string) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isLoading: false,
    error: null,
    setUser: (user) => set({ user }),

    register: async (email, password, name) => {
        set({ isLoading: true, error: null });

        // Validación antes de enviar la petición
        if (!email || !password || !name) {
            set({ error: "Todos los campos son obligatorios", isLoading: false });
            return;
        }

        // Verificar si API_URL está definido
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        if (!API_URL) {
            console.error("⚠️ ERROR: La variable NEXT_PUBLIC_API_URL no está definida.");
            set({ error: "Error interno. Intenta más tarde.", isLoading: false });
            return;
        }

        try {
            const res = await fetch(`${API_URL}/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password, name }),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Error en el registro");
            }

            const data = await res.json();
            set({ user: data.user, isLoading: false });

            // Guardar token solo en el cliente
            if (typeof window !== "undefined") {
                localStorage.setItem("token", data.token);
            }

        } catch (error) {
            if (error instanceof Error) {
                set({ error: error.message, isLoading: false });
            } else {
                set({ error: "Error desconocido", isLoading: false });
            }
        }
    },
}));
