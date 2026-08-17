import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "919849911805";
const DEFAULT_MESSAGE = "Hi Kompasion Consultancy";

export default function Whatsapp() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE,
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Kompasion Consultancy on WhatsApp"
      title="Chat with Kompasion Consultancy on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
    >
      <FaWhatsapp size={34} aria-hidden="true" />
    </a>
  );
}
