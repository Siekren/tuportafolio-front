import Link from "next/link";
const Navbar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <h1 className="text-2xl font-bold text-blue-600">Mi Portafolio</h1>
                    <ul className="hidden md:flex space-x-6">
                        <li><a href="#" className="hover:text-blue-500">Inicio</a></li>
                        <li><a href="#" className="hover:text-blue-500">Características</a></li>
                        <li><a href="#" className="hover:text-blue-500">Contacto</a></li>
                    </ul>
                    <div>
                        <Link href="/login" className="mr-4">Iniciar Sesión</Link>
                        <Link href="/register" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">Registrarse</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
