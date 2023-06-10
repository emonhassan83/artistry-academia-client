import Banner from "../Banner/Banner";
import BlogSection from "../BlogSection/BlogSection";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
    return (
        <div>
            <Banner/>
            <PopularClass/>
            <PopularInstructors/>
            <BlogSection/>
        </div>
    );
};

export default Home;