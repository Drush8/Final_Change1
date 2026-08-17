interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({
  value,
  label,
}: StatCardProps) {
  return (
    <div
      className="
      group
      rounded-[24px]
      bg-white
      border
      border-[#E6ECF3]
      p-8
      text-center
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-[#D4A63A]
      hover:shadow-xl
      "
    >
      <h3 className="text-4xl font-bold text-[#081D3A] sm:text-5xl">
        {value}
      </h3>

      <div className="mx-auto mt-4 h-[2px] w-14 rounded bg-[#D4A63A]" />

      <p className="mt-5 text-base leading-7 text-gray-600">
        {label}
      </p>
    </div>
  );
}