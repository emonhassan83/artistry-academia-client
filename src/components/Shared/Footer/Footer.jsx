import "./Footer.css";
import logo from "../../../assets/logo/logo2.png";

const Footer = () => {
  return (
    <div className="footer-bg min-h-[70vh]">
      <footer className="footer grid grid-cols-1 lg:grid-cols-4">
        <div className="lg:w-[30vw]">
          <img className="w-60" src={logo} alt="" />
          <p>
            Artistry Academia is a premier educational website dedicated to
            nurturing creative minds and fostering artistic excellence. Our
            platform offers a diverse range of courses, resources, and
            inspiration, empowering individuals to explore and master various
            art forms.
          </p>
        </div>
        <div>
          <p className="footer-title">ABOUT US</p>
          <a className="link link-hover">Our Story</a>
          <a className="link link-hover">News & Events</a>
          <a className="link link-hover">Our Activities</a>
          <a className="link link-hover">Gallery</a>
        </div>
        <div>
          <p className="footer-title">BOOK A TOUR</p>
          <div>
            <p>12 DEC, 16</p>
            <h5>Supporting the Child Personality</h5>
            <p>by Cindy Jefferson, 0 Comments</p>
          </div>
        </div>
        <div>
          <p className="footer-title">CONTACT US</p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <textarea
            className="textarea textarea-bordered"
            placeholder="Bio"
          ></textarea>
        </div>
      </footer>
      <div>
        <p className="text-center">
          Copyright © Artistry Academia. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
