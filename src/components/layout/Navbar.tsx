import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import logo from "../../assets/images/logo.png";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Meet The Team", path: "/co-facilitators" },
  { name: "Programs", path: "/programs" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Kompasion Consultancy"
              className="h-14 w-auto object-contain"
            />

            <div className="leading-tight">
              <h2 className="text-xl font-bold text-[#081D3A]">
                Kompasion
              </h2>
              <p className="text-xs uppercase tracking-[4px] text-slate-500">
                Consultancy
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 xl:gap-9 lg:flex">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `group relative whitespace-nowrap py-2 text-sm transition-colors duration-300 ${
                    isActive
                      ? "font-semibold text-[#D4A63A]"
                      : "text-slate-700 hover:text-[#D4A63A]"
                  }`
                }
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-[#D4A63A] transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-xl bg-[#D4A63A] px-6 py-3 font-semibold text-[#081D3A] transition hover:scale-105 lg:flex"
          >
            Book Consultation
            <ArrowRight size={18} />
          </Link>

          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="text-slate-700 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-28"
          >
            <div className="flex flex-col items-center gap-8">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `text-xl font-medium ${
                      isActive ? "text-[#D4A63A]" : "text-slate-700"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl bg-[#D4A63A] px-6 py-3 font-semibold text-[#081D3A]"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
