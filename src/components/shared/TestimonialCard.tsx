interface Props {
  name: string;
  role: string;
  company: string;
  quote: string;
}

export default function TestimonialCard({
  name,
  role,
  company,
  quote,
}: Props) {
  return (
    <div className="rounded-[28px] border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="text-[#D4A63A] text-xl">★★★★★</div>

      <p className="mt-6 text-gray-600 leading-8 italic">
        "{quote}"
      </p>

      <div className="mt-8 border-t pt-6">
        <h4 className="font-serif text-xl font-bold text-[#0B1F3A]">
          {name}
        </h4>

        <p className="text-gray-500">
          {role}
        </p>

        <p className="text-[#D4A63A] font-medium">
          {company}
        </p>
      </div>
    </div>
  );
}