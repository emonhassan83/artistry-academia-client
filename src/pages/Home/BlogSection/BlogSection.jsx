import { Fade} from "react-awesome-reveal";
import img1 from '../../../assets/blog/blog-img1.jpg'
import img2 from '../../../assets/blog/blog-img2.jpg'
import img3 from '../../../assets/blog/blog-img3.jpg'
import img4 from '../../../assets/blog/blog-img4.jpg'
const BlogSection = () => {
    return (
        <div className='my-32'>
            <h2 className="primary-font text-5xl uppercase text-center">Blog</h2>
            <p className='mt-3 italic text-base sm:text-lg text-center'>Explore our blog section and discovering the World through Art Blog</p>
            <div className='mt-10'>
            <Fade duration={2000}>
            <div className='lg:flex lg:mt-0 items-center gap-8'>
                <div className='w-full lg:w-1/2'>
                    <img className='w-full rounded-sm' src={img1} alt="" />
                </div>
                <div className='w-full lg:w-1/3 mx-auto text-center mt-6 lg:mt-0'>
                    <h2 className="primary-font text-3xl uppercase mb-4">ACRYLIC</h2>
                    <p><strong>Acrylic painting,</strong> technique in which pigments are mixed with hot, liquid wax. After all of the colours have been applied to the painting surface, a heating element is passed over them until the individual brush or spatula marks fuse into a uniform film.</p>
                    <div className='text-center mt-4'>
                        <button className='btn uppercase btn-outline hover:bg-[#a01e50] hover:border-none'>view gallery</button>
                    </div>
                </div>
            </div>
            </Fade>
            <Fade duration={2000}>
            <div className='lg:flex mt-8 lg:mt-0 flex-row-reverse items-center gap-8'>
                <div className='w-full lg:w-1/2'>
                    <img className='w-full rounded-sm' src={img2} alt="" />
                </div>
                <div className='w-full lg:w-1/3 mx-auto text-center mt-6 lg:mt-0'>
                    <h2 className="primary-font text-3xl uppercase mb-4">ENCAUSTIC</h2>
                    <p><strong>Encaustic painting,</strong> technique in which pigments are mixed with hot, liquid wax. After all of the colours have been applied to the painting surface, a heating element is passed over them until the individual brush or spatula marks fuse into a uniform film.</p>
                    <div className='text-center mt-4'>
                    <button className='btn uppercase btn-outline hover:bg-[#a01e50] hover:border-none'>view gallery</button>
                    </div>
                </div>
            </div>
            </Fade>
            <Fade duration={2000}>
            <div className='lg:flex mt-8 lg:mt-0 items-center gap-8'>
                <div className='w-full lg:w-1/2'>
                    <img className='w-full rounded-sm' src={img3} alt="" />
                </div>
                <div className='w-full lg:w-1/3 mx-auto text-center mt-6 lg:mt-0'>
                    <h2 className="primary-font text-3xl uppercase mb-4">OIL PAINTING</h2>
                    <p><strong>Oil Painting,,</strong> technique in which pigments are mixed with hot, liquid wax. After all of the colours have been applied to the painting surface, a heating element is passed over them until the individual brush or spatula marks fuse into a uniform film.</p>
                    <div className='text-center mt-4'>
                        <button className='btn uppercase btn-outline hover:bg-[#a01e50] hover:border-none'>view gallery</button>
                    </div>
                </div>
            </div>
            </Fade>
            <Fade duration={2000}>
            <div className='lg:flex mt-8 lg:mt-0 flex-row-reverse items-center gap-8'>
                <div className='w-full lg:w-1/2'>
                    <img className='w-full rounded-sm' src={img4} alt="" />
                </div>
                <div className='w-full lg:w-1/3 mx-auto text-center mt-6 lg:mt-0'>
                    <h2 className="primary-font text-3xl uppercase mb-4">IMPASTO</h2>
                    <p><strong>Impasto,</strong> technique in which pigments are mixed with hot, liquid wax. After all of the colours have been applied to the painting surface, a heating element is passed over them until the individual brush or spatula marks fuse into a uniform film.</p>
                    <div className='text-center mt-4'>
                        <button className='btn uppercase btn-outline hover:bg-[#a01e50] hover:border-none'>view gallery</button>
                    </div>
                </div>
            </div>
            </Fade>
            </div>
        </div>
    );
};

export default BlogSection;