import googlePlyBtn from 'src/assets/Images/googleStoreBtn.png'
import appStoreBtn from 'src/assets/Images/appstoreBtn.png'
import sideImg1 from 'src/assets/Images/sideImg-1.png'
import sideImg2 from 'src/assets/Images/sideImg-2.png'
import sideImg3 from 'src/assets/Images/sideImg-3.png'
import heroBG from 'src/assets/Images/heroBG.jpg'
import KeyPng from 'src/assets/Images/KEY.png'
import vdo from 'src/assets/Images/vdo.mp4'
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from 'src/components/Footer'



export default function Landing() {
  const videoElement = document.getElementById('vid') as HTMLVideoElement | null;

  // video
  useEffect(() => {
    if (videoElement) {
      videoElement.play().catch((error) => {
        console.error('Error playing video:', error);
      });
    }
  }, [])


  return (
    <>

      <div className="bg-black h-full relative overflow-hidden">
        <div className='flex phone:h-hero-area-phone md:h-hero-area xl:h-full relative'>
          <img className="phone:h-4/5 md:h-full w-full" src={heroBG} />
        </div>
        <div className="phone:hidden md:flex flex-col items-center absolute top-0 right-4 py-4 mt-4 z-10">
          <div className="flex items-center rounded-full overflow-hidden font-semibold">
            <Link to="/login" className="bg-white text-black py-2 px-4 ">Log in</Link>
            <Link to="/signup" className="bg-main-pink text-white py-2 px-4">Sign up</Link>
            {/*
            <span className="text-white mx-4">or</span>
            <LuUserCircle size={32} color="white" /> */}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-white w-full absolute top-2/4">
          <h1 className="2xl:text-9xl xl:text-8xl md:text-7xl sm:text-6xl phone:text-5xl font-extralight">SNEAKY</h1>
          <h6 className="tracking-widest text-3xl font-extralight py-2">PARADISE</h6>
          <span className="h-1 bg-main-pink w-52 rounded-full "></span>
          <p className="md:text-2xl md:text2-xl phone:text-1xl font-light my-4 tracking-wider font-sans">Break free, Taste the forbidden!</p>
          <button className="flex items-center bg-main-pink text-whites md:px-12 phone:px-6 md:py-4 phone:py-2 rounded md:text-3xl sm:text-2xl phone:text-1xl mt-4 font-medium">
            Find Your Secret Lover
          </button>
        </div>
        <div className="flex items-center absolute sm:bottom-8 phone:bottom-4">
          <button className="text-white rounded sm:mx-2 phone:mx-1 p-2">
            <img src={googlePlyBtn} alt="" className="sm:w-32 phone:w-16" />
          </button>
          <button className="text-white sm:mx-2 phone:mx-1 p-2">
            <img src={appStoreBtn} alt="" className="sm:w-32 phone:w-16" />
          </button>
        </div>
        {/* <select name="" id="" className="absolute sm-right-8 phone:right-4 sm:bottom-8 phone:bottom-4 p-2 rounded phone:text-xs sm:text-lg">
          <option value="">🇺🇸 USA</option>
        </select> */}
      </div>
      {/* mid area  */}
      <div className="flex flex-col items-center justify-center my-8">
        <h1 className="lg:text-h1 md:text-6xl sm:text-5xl phone:text-4xl  font-extralight">CHAT SECRETLY</h1>
        <img src={KeyPng} alt="" className='lg:w-64 phone:w-56 xl:w-80 my-8' />
        <span className="text-gray-600 text-2xl italic">With</span>
        <button className="text-2xl shadow-lg border-2 border-main-pink rounded-xl text-main-pink py-2 px-4 font-bold my-4">
          SECRET BUTTON
        </button>
      </div>

      {/* ******  */}

      <div className="bg-cream_white sm:py-16 phone:p-4">
        <div className="grid lg:grid-cols-2 m-auto gap-5 max-w-maxWidth-1400">
          <div className="flex justify-center items-baseline">
            <video src={vdo} className="h-auto lg:w-11/12 phone:w-full h-72" id="vid" controls autoPlay>
            </video>
            {/* <img className="h-auto lg:w-11/12 phone:w-full h-72"
              src="https://cdn.pixabay.com/video/2020/08/06/46568-447959747_tiny.mp4"
              alt="" /> */}
          </div>
          <div className="md:px-0 xl:my-4">
            <h2 className="xl:text-6xl lg:text-5xl phone:text-5xl font-semibold text-slate-800">
              <span>Enjoy the Life {window.innerWidth > 768 && <br />} with</span> <span className="text-main-pink font-light">Sneaky Paradise</span>
            </h2>
            <p className="xl:text-3xl my-4 text-slate-700 phone:text-2xl  font-light paraLineHight">
              Every day, people just like you join the sneaky paradise Network to find discreet relationships of all kinds. Married, Attached, looking to explore, or just curious to discover.
            </p>
          </div>
        </div>
      </div>

      {/* **** */}
      <div className="grid lg:grid-cols-2 m-auto md:p-8 phone:p-4 max-w-maxWidth-1400">
        <div className="flex flex-col mt-16">
          <h1 className="font-medium xl:text-h1 md:text-7xl sm:text-6xl phone:text-6xl text-slate-800">Fullfill your desires</h1>
          <p className="py-4 text-slate-700 tracking-wide font-light xl:text-3xl md:text-2xl phone:text-2xl paraLineHight">
            Every day, people just like you join the sneaky paradise Network to find discreet relationships of all kinds. Married, Attached, looking to explore, or just curious to discover, Whats out there sneaky paradise is the leading discreet, Like-minded dating community in the world.
          </p>
        </div>
        <div className="flex justify-end">
          <img className="lg:w-sideImgWidth md:w-full"
            src={sideImg1} alt="" />
        </div>
      </div>
      {/* **** */}
      <div className="grid lg:grid-cols-2 m-auto md:p-8 phone:p-4 max-w-maxWidth-1400">
        <div className="flex justify-left">
          <img className="lg:w-sideImgWidth md:w-full"
            src={sideImg2} alt="" />
        </div>
        <div className="flex flex-col mt-16">
          <h1 className="font-medium xl:text-h1 md:text-7xl sm:text-6xl phone:text-6xl text-slate-800">Emergency Closing Option</h1>
          <span className="text-3xl text-gray-700 my-2 font-medium">Delete all your details, Logins, <br />History and Cashe data in One Click</span>
          <p className="py-4 text-slate-700 tracking-wide font-light xl:text-3xl md:text-2xl phone:text-2xl paraLineHight">
            Every day, people just like you join the sneaky paradise Network to find discreet relationships of all kinds. Married, Attached, looking to explore, or just curious to discover, Whats out there sneaky paradise is the leading discreet, Like-minded dating community in the world.
          </p>
        </div>
      </div>
      {/* **** */}
      <div className="grid lg:grid-cols-2 m-auto md:p-8 phone:p-4 max-w-maxWidth-1400">
        <div className="flex flex-col mt-16">
          <h1 className="font-medium xl:text-h1 md:text-7xl sm:text-6xl phone:text-6xl text-slate-800">What Makes you download & Create Account ?</h1>
          <span className="text-main-pink text-4xl my-4 font-light">@Sneaky Paradise</span>
          <p className="py-4 text-slate-700  tracking-wide font-light xl:text-3xl md:text-2xl  phone:text-2xl paraLineHight ">
            Every day, people just like you join the sneaky paradise Network to find discreet relationships of all kinds. Married, Attached, looking to explore, or just curious to discover, Whats out there sneaky paradise is the leading discreet, Like-minded dating community in the world.
          </p>
        </div>
        <div className="flex justify-end">
          <img className="lg:w-sideImgWidth md:w-full"
            src={sideImg3} alt="" />
        </div>
      </div>
      {/* **** */}
      <Footer />
    </>
  )
}