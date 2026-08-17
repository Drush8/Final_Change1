import Badge from "./Badge";

interface Props {
  badge: string;
  title: string;
  description: string;
  light?: boolean;
}

export default function SectionTitle({
  badge,
  title,
  description,
  light = false,
}: Props) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center">
      <Badge>{badge}</Badge>

      <h2
        className={`mt-4 font-serif text-3xl font-bold leading-[1.15] lg:text-[42px] ${
          light ? "text-white" : "text-[#081D3A]"
        }`}
      >
        {title}
      </h2>

      <p
        className={`mx-auto mt-4 max-w-2xl text-base leading-7 ${
          light ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
}