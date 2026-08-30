import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToHash from "../components/ScrollToHash";
import { Toaster } from "react-hot-toast";

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
          <ScrollToHash />
        <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
       <Toaster />
    </div>
  );
}

export default MainLayout;
