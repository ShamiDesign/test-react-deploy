// AOS Animation
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// ===================================
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
// ========= Switch lang

// =====================
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import {Toaster} from 'react-hot-toast'


const Layout = () => {
  return (
    <>
    <Toaster />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const App = () => {
useEffect(() => {
    AOS.init({
      duration: 1000, // مدة الأنيميشن (ms)
      easing: "ease-in-out", // نوع الحركة
      once: true, // الحركة تظهر مرة واحدة فقط
    });
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Route>
      </Route>
    )
  );

 
  return (
    <>
      <RouterProvider router={router} />
     
    </>
  );
};

export default App;
