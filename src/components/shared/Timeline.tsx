interface TimelineProps {
  year: string;
  duration: string;
  company: string;
  designation: string;
  description: string;
  isLast?: boolean;
}

export default function Timeline({
  year,
  duration,
  company,
  designation,
  description,
  isLast = false,
}: TimelineProps) {
  return (
    <div className="relative flex gap-8">

      {/* Timeline */}

      <div className="flex flex-col items-center">

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#081D3A] text-lg font-bold text-white shadow-lg">

          {year}

        </div>

        {!isLast && (
          <div className="mt-3 h-full w-[2px] bg-[#D4A63A]" />
        )}

      </div>

      {/* Content */}

      <div className="pb-14">

        <p className="text-sm font-semibold uppercase tracking-[3px] text-[#D4A63A]">

          {duration}

        </p>

        <h3 className="mt-2 text-3xl font-bold text-[#081D3A]">

          {company}

        </h3>

        <h4 className="mt-2 text-lg font-semibold text-[#103A67]">

          {designation}

        </h4>

        <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">

          {description}

        </p>

      </div>

    </div>
  );
}