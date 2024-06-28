
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

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileDropdown = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  const [loading, setLoading] = useState(true);
  const imageUrls = ['./assets/fullBackground.svg'];
  const imageUrlsMobile = ['./assets/fullBackgroundSmall.svg'];
    useEffect(() => {
        let loadedImages = 0;
        if(window.innerWidth >= 768 ){
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
        }else{
          imageUrlsMobile.forEach((url) => {
            const img = new Image();
            img.src = url;
            img.onload = () => {
                loadedImages++;
                if (loadedImages === imageUrlsMobile.length) {
                    setLoading(false);
                }
            };
        });
        }
    }, [imageUrls, imageUrlsMobile]);



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

    <div className='w-full fixed z-50 lg:hidden top-0 bg-[#F8F8F8]'>
      <div className='w-full  flex flex-row justify-between items-center  p-5'>
        <img
          src='./assets/catSmall.svg'
          className='w-[29px] h-[42px]'
          />
          <div onClick={handleMobileDropdown}>
            {isMobileMenuOpen ? (
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="22" width="31" height="4" transform="rotate(-45 0 22)" fill="#BB1605"/>
                <rect x="3" width="31" height="4" transform="rotate(45 3 0)" fill="#BB1605"/>
              </svg>
            ): (
              <svg width="31" height="14" viewBox="0 0 31 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="31" height="4" fill="#BB1605"/>
                <rect y="10" width="31" height="4" fill="#BB1605"/>
              </svg>
            )}
          </div>

      </div>
    </div>
    <div className={`dropdown-menu ${isMobileMenuOpen ? 'slide-in' : 'slide-out'}`}>
        <div className='flex flex-col space-y-10 w-full items-center pt-20 h-full justify-center'>
          <div className='flex flex-col space-y-10 items-center'>
            <a onClick={handleMobileDropdown} href='#Home' className='font-inter text-[20px] text-white tracking-[0.2rem] cursor-pointer hover:text-[#EB0000] transition ease-in-out'>HOME</a>
            <a onClick={handleMobileDropdown} href='#About' className='font-inter text-[20px] text-white tracking-[0.2rem] cursor-pointer hover:text-[#EB0000] transition ease-in-out'>ABOUT</a>
            <a onClick={handleMobileDropdown} href='#Tokenomics' className='font-inter text-[20px] text-white tracking-[0.2rem] cursor-pointer hover:text-[#EB0000] transition ease-in-out'>TOKENOMICS</a>
            <a onClick={handleMobileDropdown} href='#Roadmap' className='font-inter text-[20px] text-white tracking-[0.2rem] cursor-pointer hover:text-[#EB0000] transition ease-in-out'>ROADMAP</a>
          </div>
          <div className='w-full'>
            <div className="w-screen flex items-center justify-center">
              <div className="flex flex-col w-[190%] space-y-[1px] p-10">
                <div className="bg-[#FFF6DC]">
                  <div className="py-5 px-5 flex flex-col space-y-2 items-center justify-center">
                    <p className="text-[#BB1605] text-[95%] leading-none font-medium tracking-[0.2rem]">FOLLOW THE LUCKY CAT</p>
                  </div>
                </div>
                <div className="bg-[#FFF6DC]">
                  <div onClick={handleMobileDropdown} className="py-5 px-5 flex flex-row items-center space-x-2 justify-center">
                    <img src="./assets/telegramIcon.svg" />
                    <p className="text-[20px] tracking-[0.2rem]">TELEGRAM</p>
                  </div>
                </div>
                <div className="bg-[#FFF6DC]">
                  <div onClick={handleMobileDropdown} className="py-5 px-5 flex flex-row items-center space-x-2 justify-center">
                    <img src="./assets/xicon.svg" />
                    <p className="text-[20px] tracking-[0.2rem]">X (TWITTER)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>


    <div className='fullBG max-md:hidden flex flex-col mt-[1rem] w-full h-[4848px]'>
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

    <div className='md:hidden fullBGSmall flex flex-col mt-[1rem] w-full  h-[4840px]'>
      <div id='Home' className='absolute w-full top-0'>
        <Home/>
      </div>
      <div className='relative'>
        <div className='absolute mt-[56rem] pt-[35rem] w-full' id='About'>
          <About/>
        </div>
        <div className='absolute w-full mt-[115rem] pt-[20rem]' id='Tokenomics'>
          <Tokenomics/>
        </div>
        <div className='absolute w-full mt-[179rem] pt-[20rem]' id='community'>
          <Socials/>
        </div>
        <div className='w-full h-full absolute mt-[227rem] pt-[20rem]' id='Roadmap'>
          <Roadmap/>
        </div>
      </div>
    </div>
    <div className='mt-[-25px] w-full'>
      <Footer/>
    </div>
   </div>
  )
}

export default App