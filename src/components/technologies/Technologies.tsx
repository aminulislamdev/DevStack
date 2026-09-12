import { toast } from "react-toastify";
import { use, useState } from "react";

import type ITechnologies from "../types/Technologies";
import TechnologiesCard from "./TechnologiesCard";
import StackCard from "./StackCard";

interface ITechnologiesProps {
  technologiesFetch: Promise<ITechnologies[]>;
}

const Technologies = ({ technologiesFetch }: ITechnologiesProps) => {
  const technologies = use(technologiesFetch);

  const [selectedTechnologies, setSelectedTechnologies] = useState<
    ITechnologies[]
  >([]);

  // Add technology
  const handleAddToStack = (technology: ITechnologies) => {
    const alreadySelected = selectedTechnologies.some(
      (item) => item.id === technology.id
    );

    if (alreadySelected) {
      toast.warning(`${ technology.name } is already in your stack`);
      return;
    }

    setSelectedTechnologies((prev) => [...prev, technology]);

    toast.success(`${ technology.name } added to stack`);
  };

  // Remove single technology
  const handleRemoveFromStack = (id: string) => {
    const removed = selectedTechnologies.find(
      (technology) => technology.id === id
    );

    if (!removed) return;

    setSelectedTechnologies((prev) =>
      prev.filter((technology) => technology.id !== id)
    );

    toast.info(`${ removed.name } removed from stack`);
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) return;

    setSelectedTechnologies([]);

    toast.info("All technologies removed from your stack");
  };

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
        {/* Technologies */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {technologies.map((technology) => (
            <TechnologiesCard
              key={technology.id}
              technology={technology}
              isAdded={selectedTechnologies.some(
                (item) => item.id === technology.id
              )}
              onAddToStack={handleAddToStack}
            />
          ))}
        </div>

        {/* Stack */}
        <div className="lg:col-span-1">
          <StackCard
            selectedTechnologies={selectedTechnologies}
            onRemoveFromStack={handleRemoveFromStack}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;