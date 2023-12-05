import bannerImg1 from './../assets/cover/Picture1.png'
import bannerImg2 from './../assets/cover/cover.jpg'
import bannerImg3 from './../assets/cover/cover2.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const CarouselContainer = () => {
    return (
        <div className='text-center'>
            <Carousel>
                <div className='absolute '>
                    <img className='' src={bannerImg1} />
                    <div className='absolute h-10 top-1 md:top-20  lg:max-w-2xl text-start p-5 space-y-4 '>
                        <h1 className=' text-xl font-semibold lg:text-6xl text-gray-800 font-normal'> Unleashing Swiftness <br /> in Every Shipment!</h1>
                        <p className='hidden md:block  lg:text-lg'>Embark on a seamless shopping journey with ZipCart, <br /> where our commitment to speed ensures swift, <br /> reliable deliveries for every order</p>
                        <button className='btn ' > Explore more </button>
                    </div>
                </div>

                <div className=' absolute bg-gradient-to-r from-purple-500 to-teal-100 h-full opacity-90'>
                    <img src={bannerImg3} />
                    <div className='hidden md:block absolute z-20  right-2   top-20  lg:max-w-2xl text-end p-5 space-y-6 opacity-100 '>
                        <h1 className='text-xl lg:text-6xl text-amber-700 font-bold'>Where Speed Meets Style in Every  <br />  Package!</h1>
                        <p className='hidden md:block text-lg text-gray-700 font-semibold'>Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Officia, quo.</p>
                        <button className='btn bg-amber-400 text-white' > Explore more </button>
                    </div>
                </div>
                <div className=''>
                    <img src={bannerImg2} />


                </div>
            </Carousel>
        </div>
    );
};

export default CarouselContainer;

{/* <p className="legend">Legend 2</p>
<h1>Elevate Your Shopping Experience, One Swift Delivery at a Time</h1>
<h1>Where Speed Meets Style in Every Package</h1> */}