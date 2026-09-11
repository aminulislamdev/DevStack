import type ITechnologies from "../types/Technologies";

interface IStackCardProps {
  selectedTechnologies: ITechnologies[];
}

const StackCard = ({ selectedTechnologies }: IStackCardProps) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-8 shadow-sm">
      <h2 className="text-[16px] font-bold">Your Stack</h2>

      {selectedTechnologies.length === 0 && (
        <>
          <p className="text-[12px] text-[#94A3B8] my-2">
            No technologies selected yet.
          </p>
          <p className="rounded-2xl border border-dashed border-gray-200 bg-white p-6 text-center text-[#94A3B8] text-[12px]">
            Your stack is empty.
          </p>
        </>
      )}
    </div>
  );
};

export default StackCard;