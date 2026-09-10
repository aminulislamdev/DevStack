import BannerImage from '../assets/banner-stack.png'
const Banner = () => {
  return (
    <div className='flex justify-between items-center  mx-auto container'>
      <div className='flex items-start flex-col'>
        <h2 className='text-6xl font-extrabold mb-6'> Build Your Ideal <br /> <span className='bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</span></h2>
        <p className='font-normal text-[18px] max-w-lg text-[#475569]'>Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that fits your
          next project.</p>
        <div className="flex items-center gap-4 my-10">
          <button className="bg-linear-to-r from-[#F97316] to-[#EC4899] text-white font-medium px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all">
            Explore Technologies
          </button>
          <button className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:border-[#DB2777] hover:text-[#DB2777] transition-colors">
            Learn More
          </button>
        </div>
      </div>
      <img
        src={BannerImage}
        alt="Banner"
        className="w-full max-w-lg h-auto"
      />
    </div>
  );
};

export default Banner;