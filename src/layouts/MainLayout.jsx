import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <section className="min-h-[calc(100vh-292px)]"><Outlet /></section>
            <Footer />
        </div>
    );
};

export default MainLayout;