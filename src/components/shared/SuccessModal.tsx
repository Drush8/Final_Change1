import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import { useEffect } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  title?: string;
  message: string;
  autoCloseMs?: number;
}

export default function SuccessModal({
  open,
  onClose,
  title = "Thank You!",
  message,
  autoCloseMs = 4000,
}: Props) {
  // Auto-close after a short delay
  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(onClose, autoCloseMs);
    return () => clearTimeout(timer);
  }, [open, autoCloseMs, onClose]);

  // Lock background scroll while open
  useEffect(() => {
    if (!open) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Card */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-live="polite"
            className="relative w-full max-w-sm rounded-3xl bg-white p-8 text-center shadow-2xl sm:max-w-md sm:p-10"
            initial={{ opacity: 0, scale: 0.9, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 text-slate-400 transition hover:text-slate-700"
            >
              <X size={20} />
            </button>

            <motion.div
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#D4A63A]/15"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.05, ease: "easeOut" }}
            >
              <CheckCircle2 size={34} className="text-[#D4A63A]" />
            </motion.div>

            <h3 className="mt-6 font-serif text-2xl font-bold text-[#081D3A]">
              {title}
            </h3>

            <p className="mt-3 text-base leading-7 text-slate-600">
              {message}
            </p>

            <button
              onClick={onClose}
              className="mt-8 w-full rounded-xl bg-[#D4A63A] px-6 py-3 font-semibold text-[#081D3A] transition hover:scale-[1.02] hover:bg-[#E5B94B] sm:w-auto sm:px-10"
            >
              Got it
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
