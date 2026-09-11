import { FaStar } from "react-icons/fa";
import type ITechnologies from "../types/Technologies";

interface ITechnologiesCardProps {
  technology: ITechnologies;
}

const TechnologiesCard = ({ technology }: ITechnologiesCardProps) => {
  return (
    <div>
      <div className="w-full min-h-75 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        {/* Top row: icon + badge */}
        <div className="mb-4 flex items-start justify-between gap-2">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
            <img src={technology.icon} alt="" className="h-5 w-5 text-cyan-500" />
          </div>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-500 whitespace-nowrap">
            {technology.badge}
          </span>
        </div>

        {/* Title + description */}
        <h3 className="mb-1 text-lg font-semibold text-gray-900">{technology.name}</h3>
        <p className="mb-3 text-sm leading-relaxed text-gray-500">
          {technology.description}
        </p>

        {/* Tags + rating */}
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
      </div>
    </div>
  );
};

export default TechnologiesCard;