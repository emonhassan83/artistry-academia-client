import "./Footer.css";
import logo from "../../../assets/logo/logo.png";
import { AiOutlineGoogle, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { useTheme } from "../../../providers/ThemeProvider";

const Footer = () => {
  const { theme } = useTheme(); // for using light and dark themes

  return (
    <div className={`first-letter:min-h-[70vh] max-w-[2520px]  xl:px-28 md:px-10 sm:px-2 px-4 text-center sm:text-start ${theme.mode=== 'dark'? 'text-gray-100' : 'text-gray-800'}`}>
      <footer className="footer grid grid-cols-1 lg:grid-cols-4 pt-16 sm:pt-20">
        <div className={`lg:w-[30vw] ${theme.mode=== 'dark'? 'text-gray-100' : 'text-gray-600'}`}>
          <img className="w-40 mx-auto sm:mx-0" src={logo} alt="" />
          <p className="mt-4 text-sm lg:text-base">
            Artistry Academia is a premier educational website dedicated to
            nurturing creative minds and fostering artistic excellence. art
            forms.
          </p>
          <p className="mt-4 text-sm lg:text-base">
            Our platform offers a diverse range of courses, resources, and
            inspiration, empowering individuals to explore and master various
          </p>
        </div>
        <div className="lg:ml-40 mx-auto sm:mx-0 text-center sm:text-left">
          <p className="footer-title">ABOUT US</p>
          <a className="link link-hover">Our Story</a>
          <a className="link link-hover">News & Events</a>
          <a className="link link-hover">Our Activities</a>
          <a className="link link-hover">Gallery</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Classes</a>
          <a className="link link-hover">Contacts</a>
        </div>
        <div>
          <p className="footer-title mx-auto sm:mx-0">BOOK A TOUR</p>
          <div className={`${theme.mode=== 'dark'? 'text-gray-100' : 'text-gray-600'}`}>
            <div className="mt-2 space-y-1">
            <p className="text-color font-semibold">12 DEC, 16</p>
            <h5 className="text-lg font-semibold">Supporting the Child Personality</h5>
            <p className="font-semibold">by Cindy Jefferson | 0 Comments</p>
            </div>
            <div className="mt-4 space-y-1">
           <p className="text-color font-semibold"> 1 DEC, 16</p>
            <h5 className="text-lg font-semibold">Inviting Grandparents to Our Nursery School</h5>
            <p className="font-semibold">by Cindy Jefferson | 0 Comments</p>
            </div>
          </div>
        </div>
        <div className="mx-auto sm:mx-0 text-center sm:text-left">
          <p className="footer-title">CONTACT US</p>
          <input
            type="text"
            placeholder="Your Email"
            className="input input-bordered w-full max-w-xs"
          />
          <textarea
            className="textarea textarea-bordered h-20 w-full max-w-xs"
            placeholder="Enter Message"
          ></textarea>
          <div className="flex items-center gap-1">
              <button className="btn btn-circle">
                  <AiOutlineGoogle size={24}/>
              </button>
              <button className="btn btn-circle">
                  <AiOutlineTwitter size={24}/>
              </button>
              <button className="btn btn-circle">
                  <AiOutlineInstagram size={24}/>
              </button>
              <button className="btn btn-circle">
                  <FaFacebookF size={24}/>
              </button>
          </div>
        </div>
      </footer>
      <div>
        <p className="text-center text-lg lg:pt-20">
          Copyright © Artistry Academia. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
