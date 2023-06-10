import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import BlogSection from "../BlogSection/BlogSection";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Artistry Academia | Home</title>
      </Helmet>
      <Banner />
      <PopularClass />
      <PopularInstructors />
      <BlogSection />
    </div>
  );
};

export default Home;
