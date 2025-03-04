const features = [
    { title: "Diseño Moderno", description: "Interfaz atractiva y fácil de usar." },
    { title: "Código Optimizado", description: "Desarrollado con tecnologías modernas." },
    { title: "Rendimiento Rápido", description: "Carga veloz y experiencia fluida." },
];

const Features = () => {
    return (
        <section className="py-20">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-blue-600">¿Por qué elegirnos?</h2>
                <div className="mt-8 grid md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">{feature.title}</h3>
                            <p className="mt-2">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
