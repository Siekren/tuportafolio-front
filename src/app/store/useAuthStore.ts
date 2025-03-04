import { create } from "zustand";

interface AuthState {
    user: string | null;
    setUser: (user: string | null) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    logout: () => {
        set({ user: null });
        localStorage.removeItem("token"); // Borrar JWT al cerrar sesión
    },
}));
