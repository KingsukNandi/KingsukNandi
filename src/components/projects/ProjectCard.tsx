import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Preview = ({
  imageDesktop,
  title,
}: {
  imageDesktop?: string;
  title: string;
}) =>
  imageDesktop ? (
    <Image
      src={imageDesktop}
      width={1600}
      height={900}
      alt={title}
      className="w-full h-auto rounded-md border border-white/10"
    />
  ) : (
    <div className="w-full aspect-video rounded-md border border-white/10 bg-gradient-to-br from-blue-600/20 via-green-500/20 to-indigo-400/20 flex items-center justify-center">
      <span className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
        {title}
      </span>
    </div>
  );

type Repo = { label: string; url: string };

const CardBody = ({
  imageDesktop,
  title,
  stack,
  description,
  link,
  github,
  repos,
  className = "p-4",
}: {
  imageDesktop?: string;
  imagePhone?: string;
  title: string;
  stack: string[];
  description: string;
  link?: string;
  github?: string;
  repos?: Repo[];
  className?: string;
}) => {
  const hasRepos = repos && repos.length > 0;
  const showButtons = link || github || hasRepos;

  return (
    <div className={cn("text-start", className)}>
      <Preview imageDesktop={imageDesktop} title={title} />
      <h3 className="text-xl md:text-3xl font-bold my-2 pt-8 md:my-4 text-gray-100 transition-all text-accent duration-700">
        {title}
      </h3>
      <div className="my-2 inline-block bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
        <div className="flex gap-2 flex-wrap">
          {stack.length > 0 &&
            stack.map((item: string, index: number) => (
              <span
                key={index}
                className="border border-white/20 rounded-full px-4 py-1 text-sm text-nowrap"
              >
                {item}
              </span>
            ))}
        </div>
      </div>
      <p className="mt-2 md:mt-4 md:text-lg text-gray-700 dark:text-gray-300 text-justify">
        {description}
      </p>
      {showButtons && (
        <div className="flex flex-wrap gap-4 pt-8 md:pt-10 text-center justify-center">
          {link && (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black py-3 px-6 rounded-full min-w-[150px] hover:scale-105 transition-all duration-300 cursor-crosshair"
            >
              Live
            </Link>
          )}
          {hasRepos
            ? repos!.map((repo, i) => (
                <Link
                  key={i}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-6 text-white/60 rounded-full border bg-black min-w-[150px] hover:scale-105 transition-all duration-300 cursor-crosshair"
                >
                  {repo.label}
                </Link>
              ))
            : github && (
                <Link
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-6 text-white/60 rounded-full border bg-black min-w-[150px] hover:scale-105 transition-all duration-300 cursor-crosshair"
                >
                  GitHub
                </Link>
              )}
        </div>
      )}
    </div>
  );
};

export const ProjectCard = ({
  imageDesktop,
  imagePhone,
  title,
  stack,
  description,
  link,
  github,
  repos,
}: {
  imageDesktop?: string;
  imagePhone?: string;
  title: string;
  stack: string[];
  description: string;
  link?: string;
  github?: string;
  repos?: Repo[];
}) => {
  const Ellipses = () => {
    const sharedClasses =
      "rounded-full outline outline-8 dark:outline-gray-950 sm:my-6 md:my-8 size-1 my-4 outline-gray-50 bg-green-400";
    return (
      <div className="absolute z-0 grid h-full w-full items-center gap-8 lg:grid-cols-2">
        <section className="absolute z-0 grid h-full w-full grid-cols-2 place-content-between">
          <div className={`${sharedClasses} -mx-[2.5px]`}></div>
          <div className={`${sharedClasses} -mx-[2px] place-self-end`}></div>
          <div className={`${sharedClasses} -mx-[2.5px]`}></div>
          <div className={`${sharedClasses} -mx-[2px] place-self-end`}></div>
        </section>
      </div>
    );
  };

  const Container = ({ children }: { children: React.ReactNode }) => (
    <div className="h-full relative mx-auto w-full rounded-lg border border-dashed border-zinc-300 px-4 dark:border-zinc-800 sm:px-6 md:px-8">
      <div className="absolute left-0 top-4 -z-0 h-px w-full bg-zinc-400 dark:bg-zinc-700 sm:top-6 md:top-8"></div>
      <div className="absolute bottom-4 left-0 z-0 h-px w-full bg-zinc-400 dark:bg-zinc-700 sm:bottom-6 md:bottom-8"></div>
      <div className="relative h-full w-full border-x border-zinc-400 dark:border-zinc-700">
        <Ellipses />
        <div className="relative h-full z-20 mx-auto py-8">{children}</div>
      </div>
    </div>
  );

  const content = (
    <div className="h-full">
      <Container>
        <div className="p-3 w-full center h-full">
          <div className="size-full bg-[url(/svg/grid.svg)] bg-repeat bg-[length:60px_60px] md:bg-[length:70px_70px]">
            <div className="size-full bg-gradient-to-tr from-black via-black/80 to-black">
              <CardBody
                imageDesktop={imageDesktop}
                imagePhone={imagePhone}
                title={title}
                stack={stack}
                description={description}
                link={link}
                github={github}
                repos={repos}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );

  return content;
};
