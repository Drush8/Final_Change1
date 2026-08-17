import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Whatsapp from "./Whatsapp";
import ScrollToTop from "./ScrollToTop";

export default function AppLayout() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <main className="min-h-screen pt-24">
        <Outlet />
      </main>

      <Footer />

      <Whatsapp />
    </>
  );
}