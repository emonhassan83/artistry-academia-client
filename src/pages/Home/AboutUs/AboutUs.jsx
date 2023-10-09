import { Fade } from "react-awesome-reveal";
import img1 from "../../../assets/about/about.png";
import Container from "../../../components/Container/Container";

const AboutUs = () => {
  return (
    <Container className="mb-16 lg:mb-32">
      <h1 className="primary-font text-3xl sm:text-5xl uppercase text-center">
        ABOUT US
      </h1>
      <p className="mt-3 italic text-base sm:text-lg text-center">
        Explore our About Us section and connect to us
      </p>
      <Fade duration={2000}>
        <div className="lg:flex items-center gap-8 mt-10">
          <div className="w-full lg:w-1/2">
            <img src={img1} alt="" />
          </div>
          <div className="w-full lg:w-1/2 text-center sm:text-left mt-6 lg:mt-0">
            <h3 className="primary-font text-xl sm:text-3xl uppercase">
              A LITTLE INTRO
            </h3>
            <p>
              Summar Camp Art School is a creative haven where artistic souls
              can flourish, explore, and express their unique vision through a
              diverse range of mediums.
            </p>
            <h3 className="primary-font text-xl sm:text-3xl uppercase mt-8">
              MY EXHIBITIONS
            </h3>
            <p>
              Our exhibitions at Summar Camp Art School are vibrant showcases of
              creativity, featuring stunning artworks that captivate and inspire
              audiences, celebrating the talent and dedication of our students.
            </p>
            <h3 className="primary-font text-xl sm:text-3xl uppercase mt-8">
              NEWSLETTER
            </h3>
            <p>
              Stay in the loop with our art-filled newsletter, packed with
              inspiration, updates, and exclusive content from Summar Camp Art
              School.
            </p>

            <div className="flex items-center mt-6">
              <input
              type="text"
                placeholder="Email"
                className="input input-bordered"
              />
              <button className="btn btn-md border-s-0 uppercase -mt-2 -ml-20 btn-color">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </Fade>
    </Container>
  );
};

export default AboutUs;
