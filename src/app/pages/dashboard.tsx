import { useAuth } from '../hooks/useAuth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Dashboard = () => {
    const { user, logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) router.push('/login');
    }, [user, router]);

    return (
        <div>
            <h1>Bienvenido, {user}</h1>
            <button onClick={logout} className="bg-red-500 text-white px-4 py-2">Cerrar Sesión</button>
        </div>
    );
};

export default Dashboard;
