import footerLogo from '../assets/logo-text.png'

const Footer = () => {
  return (
    <div className="container mx-auto px-4 mt-20">
      {/* Top section */}
      <div className="flex flex-col sm:flex-row justify-between gap-10 pb-10">

        
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <img src={footerLogo} alt="Dev Stack logo" className="h-7" />
          <p className="text-sm text-[#64748B] my-4 max-w-xs">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="flex items-center gap-4 text-[#475569] font-semibold text-sm">
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>

        
        <div className="hidden sm:flex gap-16">
          <div>
            <h6 className="font-bold text-sm mb-3">PRODUCT</h6>
            <ul className="flex flex-col gap-2 text-sm text-[#64748B]">
              <li><a href="#">Home</a></li>
              <li><a href="#">Technologies</a></li>
              <li><a href="#">Projects</a></li>
            </ul>
          </div>

          <div>
            <h6 className="font-bold text-sm mb-3">COMPANY</h6>
            <ul className="flex flex-col gap-2 text-sm text-[#64748B]">
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          <div>
            <h6 className="font-bold text-sm mb-3">LEGAL</h6>
            <ul className="flex flex-col gap-2 text-sm text-[#94A3B8]">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2 text-sm text-[#94A3B8]">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </div>
  )
}

export default Footer