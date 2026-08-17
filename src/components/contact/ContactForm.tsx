import { useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../shared/Button";
import SuccessModal from "../shared/SuccessModal";


export default function ContactForm() {

  const [formData, setFormData] = useState({
  fullName: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  requirement: "",
});

const [showSuccess, setShowSuccess] = useState(false);
const [errorMessage, setErrorMessage] = useState("");
const [isSubmitting, setIsSubmitting] = useState(false);

const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setIsSubmitting(true);

  try {

    const currentDateTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });


    const response = await fetch(
      "https://sheetdb.io/api/v1/3bg3872pyzmae",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              "Full Name": formData.fullName,
              "Email Address": formData.email,
              "Phone Number": formData.phone,
              "Company / Organisation": formData.company,
              "Service": formData.service,
              "Requirement": formData.requirement,
              "Date & Time": currentDateTime,
            },
          ],
        }),
      }
    );

    if (response.ok) {



      try {
      await emailjs.send(
      "service_o0lmzgi",
      "template_edrcuwa",
      {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.service,
        requirement: formData.requirement,
      },
      "SKuNiUpr-yRGB1vks"
    );

    console.log("Email sent successfully");
  }
  catch (err) {
  console.error("EmailJS Error:", err);
}

    setShowSuccess(true);

     setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        requirement: "",
      });

    } else {
      setErrorMessage("Failed to send your inquiry. Please try again.");
    }
  } catch (error) {
    console.error(error);
    setErrorMessage("Something went wrong. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <>
    <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-8 shadow-sm">

      <h3 className="mb-6 font-serif text-2xl font-bold text-[#081D3A]">
        Send an Inquiry
      </h3>

      {errorMessage && (
        <div className="mb-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {errorMessage}
        </div>
      )}

      <div className="grid gap-5">

        <input
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className="rounded-xl border border-slate-200 p-4 outline-none focus:border-[#D4A63A]"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="rounded-xl border border-slate-200 p-4 outline-none focus:border-[#D4A63A]"
        />

        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="rounded-xl border border-slate-200 p-4 outline-none focus:border-[#D4A63A]"
        />

        <input
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company / Organisation"
          className="rounded-xl border border-slate-200 p-4 outline-none focus:border-[#D4A63A]"
        />

        <select  name="service" value={formData.service} onChange={handleChange} className="rounded-xl border border-slate-200 p-4 outline-none focus:border-[#D4A63A]">
          <option value="">Select a Service</option>
          <option value="Executive Leadership Development">
            Executive Leadership Development
          </option>
          <option value="Project Management Excellence">
            Project Management Excellence
          </option>
          <option value="Operational Excellence">
            Operational Excellence
          </option>
          <option value="AI-Enabled Leadership">
            AI-Enabled Leadership
          </option>
          <option value="Corporate Workshops">
            Corporate Workshops
          </option>
        </select>

        <textarea
          rows={6}
          name="requirement"
          value={formData.requirement}
          onChange={handleChange}
          placeholder="Tell us about your requirement..."
          className="rounded-xl border border-slate-200 p-4 outline-none focus:border-[#D4A63A]"
        />

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </Button>

      </div>

    </form>

    <SuccessModal
      open={showSuccess}
      onClose={() => setShowSuccess(false)}
      title="Thank You!"
      message="Thank you for your inquiry. We have received your request and will get back to you as soon as possible."
    />
    </>
  );


}