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

        try {
            const res = await fetch("http://localhost:8080/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password, name }),
            });

            if (!res.ok) {
                throw new Error("Error en el registro");
            }

            const data = await res.json();
            set({ user: data, isLoading: false });
        } catch (error: any) {
            set({ error: error.message, isLoading: false });
        }
    },
}));
