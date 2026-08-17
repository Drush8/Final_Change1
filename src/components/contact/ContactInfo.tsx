import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { contactInfo } from "../../data/contact/info";

export default function ContactInfo() {
  return (
    <div className="rounded-3xl bg-[#081D3A] p-8 text-white">

      <h3 className="font-serif text-2xl font-bold">
        Contact Information
      </h3>

      <div className="mt-8 space-y-6">

        <div className="flex items-start gap-4">
          <Phone className="text-[#D4A63A]" />
          <span>{contactInfo.phone}</span>
        </div>

        <div className="flex items-start gap-4">
          <Mail className="text-[#D4A63A]" />
          <span>{contactInfo.email}</span>
        </div>

        <div className="flex items-start gap-4">
          <MapPin className="text-[#D4A63A]" />
          <span>{contactInfo.location}</span>
        </div>

        <div className="flex items-start gap-4">
          <MessageCircle className="text-[#D4A63A]" />
          <span>{contactInfo.whatsapp}</span>
        </div>

      </div>

    </div>
  );
}