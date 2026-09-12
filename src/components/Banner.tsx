import BannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="container mx-auto px-4 py-10 md:py-16 flex flex-col md:flex-row justify-between items-center gap-10">

      {/* Left Content */}
      <div className="flex items-center md:items-start flex-col text-center md:text-left">

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Build Your Ideal <br />

          <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h2>

        <p className="font-normal text-base sm:text-[18px] max-w-lg text-[#475569] leading-7">
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that fits
          your next project.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-3 my-6 w-full justify-center md:justify-start">

          <button className="flex-1 sm:flex-none bg-linear-to-r from-[#F97316] to-[#EC4899] text-white font-semibold px-4 sm:px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all">
            Explore Technologies
          </button>

          <button className="flex-1 sm:flex-none px-4 sm:px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:border-[#DB2777] hover:text-[#DB2777] transition-colors">
            Learn More
          </button>

        </div>
      </div>

      {/* Banner Image */}
      <img
        src={BannerImage}
        alt="Banner"
        className="w-full max-w-lg "
      />

    </div>
  );
};

export default Banner;