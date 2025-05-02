
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter, faYoutube,faInstagram} from '@fortawesome/free-brands-svg-icons';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-maib text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Logo Section */}
        <div className="col-span-2 md:col-span-1">
          <Link href="/" title="Leads2CRM">
            <img  src="/images/logo/Leads2crm.jpg"
 alt="Maiprosoft Logo" className="h-12 width-[210px] mb-4 mx-auto md:mx-0 white-logo" /> {/* Adjust height as needed */}
          </Link>
        </div>

        {/* About Maiprosoft Section */}
        <div>
  <h6 className="font-semibold mb-4">About Leads2CRM</h6>
  <ul className="space-y-2">
    <li><Link href="#" className="font-light ">Careers</Link></li>
    <li><Link href="#" className="font-light">Latest News</Link></li>
    <li><Link href="#" className="font-light">Corporate Vision</Link></li>
    <li><Link href="/contact-us" className="font-light">About Leads2CRM</Link></li>
  </ul>
</div>

{/* Discover Section */}
<div>
  <h6 className="font-semibold mb-4">Discover</h6>
  <ul className="space-y-2">
    <li><Link href="#" className="font-light">Our Products</Link></li>
    <li><Link href="#" className="font-light">Our Services</Link></li>
    <li><Link href="#" className="font-light">Our Partners</Link></li>
    <li><Link href="#" className="font-light">    Our Global Footprint
    </Link></li>

    <li><Link href="#" className="font-light">Case Studies</Link></li>
  </ul>
</div>

{/* Important Links Section */}
<div>
  <h6 className="font-semibold mb-4">Important Links</h6>
  <ul className="space-y-2">
    <li><Link href="#" className="font-light">Leads2CRM Club Blue</Link></li>
    <li><Link href="#" className="font-light">Press Kit</Link></li>
    <li><Link href="#" className="font-light">Support</Link></li>
    <li><Link href="#" className="font-light">Secure Usage Policy</Link></li>
    <li><Link href="#" className="font-light">Privacy Policy</Link></li>
    
  </ul>
</div>


        {/* Follow Us Section */}
        <div>
      <h6 className="font-semibold mb-4">Follow Us</h6>
      <div className="flex space-x-1">
        {/* Facebook */}
        <Link
          href="#"
          aria-label="Facebook"
          className="group text-md p-2 rounded-full bg-gray-800 flex items-center justify-center transition-colors"
        >
          <FaFacebookF
            className="text-white transition-colors group-hover:text-[#1877F2]"
          />
        </Link>

        {/* LinkedIn */}
        <Link
          href="#"
          aria-label="LinkedIn"
          className="group text-md p-2 rounded-full bg-gray-800 flex items-center justify-center transition-colors"
        >
          <FaLinkedinIn
            className="text-white transition-colors group-hover:text-[#0077B5]"
          />
        </Link>

        {/* X (formerly Twitter) */}
        {/* <Link
          href="https://x.com/maiprosoft"
          aria-label="X"
          className="group text-xl p-2 rounded-full bg-gray-800 flex items-center justify-center transition-colors"
        >
          <FaTwitter
            className="text-white transition-colors group-hover:text-[#1DA1F2]"
          />
        </Link> */}
                <Link
          href="#"
          aria-label="X"
          className="group text-md p-2 rounded-full bg-gray-800 flex items-center justify-center transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            className="text-white transition-colors group-hover:text-[#fff]"
            fill="currentColor"
          >
            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
          </svg>
        </Link>


        {/* Instagram */}
        <Link
          href="#"
          aria-label="Instagram"
          className="group text-md p-2 rounded-full bg-gray-800 flex items-center justify-center transition-colors"
        >
          <FaInstagram
            className="text-white transition-colors group-hover:text-[#E4405F]"
          />
        </Link>
      </div>
    </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-6 mt-8 border-t border-gray-600 pt-4 grid grid-cols-1 md:grid-cols-3">
        <p className="text-center md:text-left text-gray-400">© Leads2CRM 2024</p>
        <div className="text-center hidden md:block"></div>
        <div className="flex justify-center md:justify-end">
          <Link href="/employee-services"><i className="icon-sign_in_menu_icon text-xl"></i></Link>
        </div>
      </div>
    </footer>
  );
}
