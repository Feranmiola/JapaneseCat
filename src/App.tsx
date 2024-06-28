
// import About from './Components/About'
import { useEffect, useState } from 'react'
import About from './Components/About'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Roadmap from './Components/Roadmap'
import Socials from './Components/Socials'
import Tokenomics from './Components/Tokenomics'
import './globals.css'
import { HashLoader } from 'react-spinners'

function App() {

  const [loading, setLoading] = useState(true);
  const imageUrls = ['./assets/fullBackground.svg'];
    useEffect(() => {
        let loadedImages = 0;

        imageUrls.forEach((url) => {
            const img = new Image();
            img.src = url;
            img.onload = () => {
                loadedImages++;
                if (loadedImages === imageUrls.length) {
                    setLoading(false);
                }
            };
        });
    }, [imageUrls]);



if(loading){
    return (
        <div className='w-screen h-screen bg-white flex items-center justify-center minw-[100vh]'>
          <HashLoader color="#ac0707" />
        </div>
      );
}
  

  return (
   <div className='flex flex-col items-center justify-center'>
    <div className='flex max-lg:hidden w-full h-[98px] bg-[#F8F8F8] items-center justify-center fixed top-0 z-50'>
      <div className='flex flex-row px-20 w-full items-center justify-between'>
        <img
        src='./assets/catSmall.svg'
        />

        <div className='flex flex-row items-center ml-20 justify-center space-x-14'>
          <a href='#Home' className='font-inter  text-[14px] text-black tracking-[0.2rem] cursor-pointer hover:text-[#EB0000] transition ease-in-out'>HOME</a>
          <a href='#About' className='font-inter  text-[14px] text-black tracking-[0.2rem] cursor-pointer hover:text-[#EB0000] transition ease-in-out'>ABOUT</a>
          <a href='#Tokenomics' className='font-inter  text-[14px] text-black tracking-[0.2rem] cursor-pointer hover:text-[#EB0000] transition ease-in-out'>TOKENOMICS</a>
          <a href='#Roadmap' className='font-inter  text-[14px] text-black tracking-[0.2rem] cursor-pointer hover:text-[#EB0000] transition ease-in-out'>ROADMAP</a>
        </div>

        <a href='#community' className=' bg-headerText'>
          <div className='px-5 py-2 tracking-widest text-white text-[14px]'>
            COMMUNITY
          </div>
        </a>
      </div>

    </div>

    <div className='w-full fixed top-0 bg-[#F8F8F8]'>
      <div className='w-full  flex flex-row justify-between items-center  p-5'>
        <img
          src='./assets/catSmall.svg'
          className='w-[29px] h-[42px]'
          />
          <div>
            <svg width="31" height="14" viewBox="0 0 31 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="31" height="4" fill="#BB1605"/>
              <rect y="10" width="31" height="4" fill="#BB1605"/>
            </svg>
          </div>

      </div>

    </div>

    <div className='lg:fullBG flex flex-col mt-[1rem] w-full h-[4848px]'>
      <div id='Home' className='absolute w-full top-0'>
        <Home/>
      </div>
      <div className='relative'>
        <div className='absolute mt-[65rem] pt-[35rem] w-full' id='About'>
          <About/>
        </div>
        <div className='absolute w-full mt-[120rem] pt-[20rem]' id='Tokenomics'>
          <Tokenomics/>
        </div>
        <div className='w-full h-full absolute mt-[236rem] py-[20rem]' id='Roadmap'>
          <Roadmap/>
        </div>
        <div className='absolute w-full mt-[179rem] pt-[20rem]' id='community'>
          <Socials/>
        </div>
      </div>
    </div>
    <Footer/>
   </div>
  )
}

export default App