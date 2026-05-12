"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

// Single card body
const CardBody = ({
  link,
  title,
  role,
  time,
  description,
  className = "p-4",
}: {
  link?: string;
  title: string;
  role: string;
  time: string;
  description: string;
  className?: string;
}) => (
  <div className={cn("text-start", className)}>

    <h3 className={`text-xl md:text-3xl font-bold mb-1 md:mb-4 text-gray-900 dark:text-gray-100 ${link ? "text-accent transition-all" : ""}`}>
      {title}
    </h3>
    <p className="text-sm md:text-lg text-blue-600 dark:text-blue-400 font-medium">
      {role}
    </p>
    <p className="text-xs md:text-base text-blue-600 dark:text-blue-400 font-medium">
      {time}
    </p>
    <p className="mt-2 md:mt-4 md:text-xl text-gray-700 dark:text-gray-300 text-justify">{description}</p>
  </div>
);

// Card container with gradient borders
const Container = ({ children }: { children: React.ReactNode }) => {
  const Line = ({ className = "" }) => (
    <div
      className={cn(
        "h-px w-full via-zinc-400 from-[1%] from-zinc-200 to-zinc-600 absolute -z-0 dark:via-zinc-700 dark:from-zinc-900 dark:to-zinc-500",
        className
      )}
    />
  );

  return (
    <div className="relative md:max-w-3xl px-5 md:px-7">
      <Line className="bg-gradient-to-l left-0 top-4 md:top-6" />
      <Line className="bg-gradient-to-r bottom-4 md:bottom-6 left-0" />
      <Line className="w-px bg-gradient-to-t right-4 md:right-6 h-full inset-y-0" />
      <Line className="w-px bg-gradient-to-t left-4 md:left-6 h-full inset-y-0" />

      <div className="relative z-20 mx-auto py-5 md:py-7">{children}</div>
    </div>
  );
};

// Card component
export const Card = ({
  link,
  title,
  role,
  time,
  description,
}: {
  link?: string;
  title: string;
  role: string;
  time: string;
  description: string;
}) => {
  const content = (
    <Container>
      <div className="size-full bg-[url(/svg/lines.svg)] bg-repeat bg-[length:30px_30px]">
        <div className="p-4 size-full bg-gradient-to-tr from-black via-zinc-950/80 to-zinc-900/10">
          <CardBody
            link={link}
            title={title}
            role={role}
            time={time}
            description={description}
          />
        </div>
      </div>
    </Container>
  );

  return link ? (
    <Link
      href={link}
      className="block rounded-full transition-all duration-200 cursor-crosshair"
    >
      {content}
    </Link>
  ) : (
    content
  );
};


// CardList component
export const CardList = ({
  items,
}: {
  items: { title: string; role: string; time: string; description: string }[];
}) => {
  return (
    <div className="grid grid-cols-1">
      {items.map((item, idx) => (
        <Card
          key={idx}
          title={item.title}
          role={item.role}
          time={item.time}
          description={item.description}
        />
      ))}
    </div>
  );
};
