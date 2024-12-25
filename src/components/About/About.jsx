import React from 'react'
import BgPolygon from '../../assets/images/polygon.png'
import { FaUser } from 'react-icons/fa';
import Vector from '../../assets/images/vector-wave.png';

const BgStyle = {
    backgroundImage : `url(${BgPolygon})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width:"100%",
    height:"100%",
    position:"relative",
};

const About = ({HandlePopup}) => {
  return (
    <>
    <div style={BgStyle} className='py-14'>
    <div className='container min-h-[500px] relative
    z-10'>
        <h1 data-aos="fade"
        className='pt-20 tracking-wider text-4xl
        font-semibold text-white
        text-center'>About Us</h1>

        {/* card section */}
        <div data-aos="fade"
                data-aos-delay="300"  className='bg-white/80 p-10 my-10 text-center'>
        Welcome to our restaurant, where culinary artistry meets warm hospitality.
         We have been dedicated to creating a haven for food enthusiasts. Our diverse menu blends traditional techniques with modern flair,
          offering both classic favorites and innovative creations that are as visually stunning as they are delectable. We are committed to providing
          exceptional service in a cozy, inviting atmosphere, ensuring that each visit creates lasting memories.
         Proudly supporting our local community, we partner with local farmers, artisans, and organizations to enrich the area.
          Thank you for choosing us; we look forward to sharing our passion for great food and hospitality with you.
        <div className='pt-10 flex justify-center'>
        <button
        onClick={HandlePopup}
         className='flex 
              justify-center items-center gap-2
              bg-primary text-xl h-[40px]
              text-white px-5 py-2 hover:scale-105 
              duration-300'>
                  <FaUser/>My Account
              </button>
        </div>

        </div>
    </div>
{/* wave vector */}
<div className='absolute
    top-0 right-0 w-full'>
    <img src={Vector} alt='' className='mx-auto'/>
</div>

    </div>
    </>
  )
}

export default About