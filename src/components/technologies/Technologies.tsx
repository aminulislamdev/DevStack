import { use } from "react";

import type ITechnologies from "../types/Technologies";

import TechnologiesCard from "./TechnologiesCard";

interface ITechnologiesProps {
  technologiesFetch: Promise<ITechnologies[]>;
}

const Technologies = ({ technologiesFetch }: ITechnologiesProps) => {
  const technologies = use(technologiesFetch);

  return (
    <div className="container mx-auto px-4">
      <div className="my-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
          Explore the{" "}
          <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-[#64748B] text-sm sm:text-[16px]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {technologies.map((technology) => (
            <TechnologiesCard key={technology.id} technology={technology} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;