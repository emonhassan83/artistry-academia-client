// import { Fade} from "react-awesome-reveal";
import { BlogData } from "./BlogData";

const BlogSection = () => {
  return (
    <div className="my-16 sm:my-32">
      <h2 className="primary-font text-3xl sm:text-5xl uppercase text-center">
        Blog
      </h2>
      <p className="mt-3 italic text-base sm:text-lg text-center">
        Explore our blog section and discovering the World through Art Blog
      </p>
      <div className="mt-10">
        {/* <Fade duration={2000}> */}
        <div className="lg:flex lg:mt-0 items-center gap-8">
          <div className="w-full lg:w-1/2">
            <img
              className="w-full rounded-sm"
              src={BlogData[0].img}
              alt="Blog Image"
            />
          </div>
          <div className="w-full lg:w-1/3 mx-auto text-center mt-6 lg:mt-0">
            <h2 className="primary-font text-xl sm:text-3xl uppercase mb-4">
              {BlogData[0].title}
            </h2>
            <p>
              <strong>Acrylic painting,</strong>
              {BlogData[0].description}
            </p>
            <div className="text-center mt-4">
              <button className="btn uppercase btn-outline hover:bg-[#3da5d9] hover:border-none">
                view gallery
              </button>
            </div>
          </div>
        </div>
        {/* </Fade> */}
        {/* <Fade duration={2000}> */}
        <div className="lg:flex mt-8 lg:mt-0 flex-row-reverse items-center gap-8">
          <div className="w-full lg:w-1/2">
            <img
              className="w-full rounded-sm"
              src={BlogData[1].img}
              alt="Blog Image"
            />
          </div>
          <div className="w-full lg:w-1/3 mx-auto text-center mt-6 lg:mt-0">
            <h2 className="primary-font text-xl sm:text-3xl uppercase mb-4">
              {BlogData[1].title}
            </h2>
            <p>
              <strong>Encaustic painting,</strong>
              {BlogData[1].description}
            </p>
            <div className="text-center mt-4">
              <button className="btn uppercase btn-outline hover:bg-[#3da5d9] hover:border-none">
                view gallery
              </button>
            </div>
          </div>
        </div>
        {/* </Fade> */}
        {/* <Fade duration={2000}> */}
        <div className="lg:flex mt-8 lg:mt-0 items-center gap-8">
          <div className="w-full lg:w-1/2">
            <img
              className="w-full rounded-sm"
              src={BlogData[2].img}
              alt="Blog Image"
            />
          </div>
          <div className="w-full lg:w-1/3 mx-auto text-center mt-6 lg:mt-0">
            <h2 className="primary-font text-xl sm:text-3xl uppercase mb-4">
              {BlogData[2].title}
            </h2>
            <p>
              <strong>Oil Painting,</strong>
              {BlogData[2].description}
            </p>
            <div className="text-center mt-4">
              <button className="btn uppercase btn-outline hover:bg-[#3da5d9] hover:border-none">
                view gallery
              </button>
            </div>
          </div>
        </div>
        {/* </Fade> */}
        {/* <Fade duration={2000}> */}
        <div className="lg:flex mt-8 lg:mt-0 flex-row-reverse items-center gap-8">
          <div className="w-full lg:w-1/2">
            <img
              className="w-full rounded-sm"
              src={BlogData[3].img}
              alt="Blog Image"
            />
          </div>
          <div className="w-full lg:w-1/3 mx-auto text-center mt-6 lg:mt-0">
            <h2 className="primary-font text-xl sm:text-3xl uppercase mb-4">
              {BlogData[2].title}
            </h2>
            <p>
              <strong>Impasto,</strong>
              {BlogData[3].description}
            </p>
            <div className="text-center mt-4">
              <button className="btn uppercase btn-outline hover:bg-[#3da5d9] hover:border-none">
                view gallery
              </button>
            </div>
          </div>
        </div>
        {/* </Fade> */}
      </div>
    </div>
  );
};

export default BlogSection;
