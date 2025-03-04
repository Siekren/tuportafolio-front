import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";

export const useAuth = () => {
    const { user, setUser } = useAuthStore();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`, {
                headers: { Authorization: `Bearer ${token}` },
            })
                .then((res) => res.json())
                .then((data) => setUser(data.user))
                .catch(() => setUser(null));
        }
    }, [setUser]);

    return { user };
};
