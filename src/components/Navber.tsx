import navLogo from '../assets/logo-text.png'

const Navber = () => {

  return (
    <div className='container mx-auto flex justify-between items-center py-4 sticky top-0 z-50 bg-white'>
      <img src={navLogo} alt="Navber-Logo" />
      <div >
        <ul className='flex justify-between items-center gap-10' >
          <li className='text-[#DB2777]'> <a href="">Home</a></li>
          <li> <a href="">Technologies</a></li>
          <li> <a href="">Projects</a></li>
          <li> <a href="">About</a></li>
          <li> <a href="">Contact</a></li>
        </ul>
      </div>
      <div className='flex justify-between items-center gap-5'>
        <button className='cursor-pointer'>Sign In</button>
        <button className="btn btn-secondary">Sign Up</button>
      </div>
    </div>
  );
};

export default Navber;