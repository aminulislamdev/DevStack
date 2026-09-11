import { FaX } from "react-icons/fa6";
import type ITechnologies from "../types/Technologies";

interface IStackCardProps {
  selectedTechnologies: ITechnologies[];
  onRemoveFromStack: (id: string) => void;
}

const StackCard = ({
  selectedTechnologies,
  onRemoveFromStack,
}: IStackCardProps) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-8 shadow-sm">
      <h2 className="text-[16px] font-bold">Your Stack</h2>

      {selectedTechnologies.length === 0 ? (
        <>
          <p className="text-[12px] text-[#94A3B8] my-2">
            No technologies selected yet.
          </p>
          <p className="rounded-2xl border border-dashed border-gray-200 bg-white p-6 text-center text-[#94A3B8] text-[12px]">
            Your stack is empty.
          </p>
        </>
      ) : (
        <>
          <p className="text-[12px] text-[#94A3B8] my-2">
            {selectedTechnologies.length} Technology Selected
          </p>

          <div className="flex flex-col gap-3">
            {selectedTechnologies.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center justify-between rounded-xl border border-gray-200 p-3"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={technology.icon}
                    alt=""
                    className="h-6 w-6 shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {technology.name}
                    </p>
                    <p className="text-xs text-[#94A3B8] truncate">
                      {technology.category}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveFromStack(technology.id)}
                  className="shrink-0 cursor-pointer"
                >
                  <FaX className="h-3.5 w-3.5 text-gray-400" />
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default StackCard;