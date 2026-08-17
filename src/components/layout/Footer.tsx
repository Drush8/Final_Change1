import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import logo from "../../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#081D3A] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Company */}
          <div>
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="Kompasion Consultancy"
                className="h-16 w-auto"
              />

              <div>
                <h2 className="text-2xl font-bold">
                  Kompasion
                </h2>

                <p className="uppercase tracking-[4px] text-slate-300">
                  Consultancy
                </p>
              </div>
            </div>

            <p className="mt-6 text-lg text-[#D4A63A]">
              Lead • Perform • Care
            </p>

            <p className="mt-4 leading-relaxed text-slate-300">
              Building leaders and transforming
              organisations through executive coaching,
              operational excellence, consulting, and
              AI-enabled transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <ul className="mt-16 space-y-3 text-slate-300">
              <li className="text-xl font-semibold text-white">Quick Links</li>

              <li>
                <Link
                  to="/"
                  className="transition hover:text-[#D4A63A]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="transition hover:text-[#D4A63A]"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/programs"
                  className="transition hover:text-[#D4A63A]"
                >
                  Programs
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="transition hover:text-[#D4A63A]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li className="text-xl font-semibold text-white">Programs</li>

              <li>
                <Link to="/programs" className="transition hover:text-[#D4A63A]">
                  Compass
                </Link>
              </li>
              <li>
                <Link to="/programs" className="transition hover:text-[#D4A63A]">
                  Cruise
                </Link>
              </li>
              <li>
                <Link to="/programs" className="transition hover:text-[#D4A63A]">
                  Anchor
                </Link>
              </li>
              <li>
                <Link to="/programs" className="transition hover:text-[#D4A63A]">
                  Forge
                </Link>
              </li>
              <li>
                <Link to="/programs" className="transition hover:text-[#D4A63A]">
                  Nexus
                </Link>
              </li>
              <li>
                <Link to="/programs" className="transition hover:text-[#D4A63A]">
                  Compassion Code
                </Link>
              </li>
              <li>
                <Link to="/programs" className="transition hover:text-[#D4A63A]">
                  Scientist Edge
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            {/*<h3 className="text-xl font-semibold">
              Contact Us
            </h3>*/}
              <div className="text-xl font-semibold text-white">
                Contact Us
              </div>
            <div className="mt-6 space-y-4 text-slate-300">
              <div className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="mt-1 flex-shrink-0 text-[#D4A63A]"
                />

                <span>Nageshwar@kompasion.com</span>
              </div>

              <div className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="mt-1 flex-shrink-0 text-[#D4A63A]"
                />

                <span>+91 98499 11805</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-1 flex-shrink-0 text-[#D4A63A]"
                />

                <span>Hyderabad, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-slate-700" />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">
          <p>
            © 2026 Kompasion Consultancy. All rights
            reserved.
          </p>

          <p>Designed with care.</p>
        </div>
      </div>
    </footer>
  );
}