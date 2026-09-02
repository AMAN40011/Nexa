import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Pricing from "../pages/Pricing";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

import MainLayout from "../layouts/MainLayout";
import ProfileLayout from "../layouts/ProfileLayout";
import ProtectedRoute from "../components/ProtectedRoute";
import Profile from "../pages/Profile";
import Security from "../pages/Security";
import Activity from "../pages/Activity";
import Message from "../pages/Messages";

const AppRoutes = () => {
  return (
    <Routes>

      {/* Main Website Layout */}
      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />

        {/* Profile Layout */}
        <Route element={<ProtectedRoute />}>
        
        <Route path="/profile" element={<ProfileLayout />}>

          <Route index element={<Profile />} />

          <Route
            path="security"
            element={<Security />}
          />

          <Route
            path="activity"
            element={<Activity />}
          />
           <Route
            path="message"
            element={<Message />}
          />

        </Route>
        
        </Route>
        

      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
};

export default AppRoutes;