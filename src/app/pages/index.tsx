import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div className="bg-gray-50 text-gray-900">
            <Navbar />
            <Hero />
            <Features />
            <CTA />
            <Footer />
        </div>
    );
}
