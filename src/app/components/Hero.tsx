const Hero = () => {
    return (
        <section className="bg-blue-600 text-white py-20 text-center">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold">Bienvenido a Mi Portafolio</h1>
                <p className="mt-4 text-lg">Explora mis proyectos y descubre lo que puedo hacer.</p>
                <a href="/login" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">Empezar</a>
            </div>
        </section>
    );
};

export default Hero;
