import { FaStar } from "react-icons/fa";
import type ITechnologies from "../types/Technologies";

interface ITechnologiesCardProps {
  technology: ITechnologies;
  isAdded: boolean;
  onAddToStack: (technology: ITechnologies) => void;
}

const badgeColors: Record<string, string> = {
  Popular: "bg-blue-50 text-blue-500",
  Progressive: "bg-green-50 text-green-500",
  Enterprise: "bg-purple-50 text-purple-500",
  Essential: "bg-orange-50 text-orange-500",
  "Batteries Included": "bg-pink-50 text-pink-500",
  Flexible: "bg-yellow-50 text-yellow-600",
  Fast: "bg-red-50 text-red-500",
  Compiler: "bg-teal-50 text-teal-600",
  Containers: "bg-indigo-50 text-indigo-500",
  Orchestration: "bg-lime-50 text-lime-600",
  "Top SQL": "bg-cyan-50 text-cyan-600",
};

const defaultBadgeColor = "bg-gray-100 text-gray-600";

const TechnologiesCard = ({
  technology,
  isAdded,
  onAddToStack,
}: ITechnologiesCardProps) => {
  const badgeColorClass =
    badgeColors[technology.badge] ?? defaultBadgeColor;

  return (
    <div>
      <div
        className={`w-full min-h-75 rounded-2xl border p-5 shadow-sm transition-colors ${isAdded
            ? "border-green-500 bg-green-50"
            : "border-gray-200 bg-white"
          }`}
      >
        <div className="mb-4 flex items-start justify-between gap-2">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
            <img
              src={technology.icon}
              alt=""
              className="h-5 w-5 text-cyan-500"
            />
          </div>

          <span
            className={`rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap ${badgeColorClass}`}
          >
            {technology.badge}
          </span>
        </div>

        <h3 className="mb-1 text-lg font-semibold text-gray-900">
          {technology.name}
        </h3>

        <p className="mb-3 text-sm leading-relaxed text-gray-500">
          {technology.description}
        </p>

        <div className="mb-4 flex flex-wrap items-center gap-2 text-sm">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
            {technology.category}
          </span>

          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
            {technology.difficulty}
          </span>

          <span className="ml-auto flex items-center gap-1 text-xs font-medium text-gray-700">
            <FaStar className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            {technology.rating}
          </span>
        </div>

        <button
          onClick={() => onAddToStack(technology)}
          className={`w-full rounded-xl py-3 text-sm font-medium text-white transition-colors ${isAdded
              ? "bg-green-600 cursor-not-allowed"
              : "bg-gray-900 hover:bg-gray-800 cursor-pointer"
            }`}
        >
          {isAdded ? "Added ✓" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologiesCard;