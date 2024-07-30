
// import About from './Components/About'
import { useEffect, useState } from 'react'
// import About from './Components/About'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Roadmap from './Components/Roadmap'
// import Socials from './Components/Socials'
// import Tokenomics from './Components/Tokenomics'
import './globals.css'
import { HashLoader } from 'react-spinners'

function App() {

  const [loading, setLoading] = useState(true);
  const imageUrls = ['./assets/catLeft.svg', './assets/catRight.svg', './assets/chineseHouseBG.svg', './assets/homeBottom.svg'];
  const imageUrlsMobile = ['./assets/catRight.svg', './assets/homeBGMobile.svg', './assets/homeBottomMobile.svg'];
  useEffect(() => {
    let loadedImages = 0;
    if (window.innerWidth >= 768) {
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
    } else {
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



  if (loading) {
    return (
      <div className='w-screen h-screen bg-white flex items-center justify-center minw-[100vh]'>
        <HashLoader color="#EB0000" />
      </div>
    );
  }


  return (
    <div className='flex flex-col items-center justify-center'>
      <div className="flex w-full max-w-[684px] max-sm:max-w-[310px] max-sm:max-h-[64px] h-[80px] bg-white items-center shadow-custom-normal rounded-[24px] justify-center fixed top-5 z-50 mx-2 md:mx-auto xl:max-w-[800px] xl:h-[100px] 2xl:max-w-[900px] 2xl:h-[120px]">
        <div className="flex flex-row relative w-full h-full p-5 items-center justify-between">
          <img src="./assets/catSmall.svg" className="w-8 h-8 md:w-auto md:h-auto xl:w-12 xl:h-12 2xl:w-16 2xl:h-16" />
          <div className="PlayNowButtonMAX hidden md:block absolute left-1/2 transform -translate-x-1/2 rounded-[8px] cursor-pointer">
            <p className="text-white font-bold font-inter xl:text-[20px] 2xl:text-[24px]">PLAY NOW!</p>
          </div>
          <div className="flex flex-row items-center h-full space-x-2">
            <div>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="xl:w-[56px] xl:h-[56px] 2xl:w-[64px] 2xl:h-[64px]">
                <rect x="-0.00439453" y="-0.00216675" width="48.0044" height="48.0044" rx="24.0022" fill="white" />
                <path d="M26.0491 21.9951L35.7954 10.909H33.4854L25.0251 20.5346L18.2645 10.909H10.4683L20.69 25.4661L10.4683 37.0908H12.7783L21.7141 26.9248L28.8539 37.0908H36.6501L26.0491 21.9951ZM22.8864 25.5933L21.8507 24.1439L13.6098 12.6108H17.1576L23.8065 21.9185L24.8422 23.3678L33.4873 35.4675H29.9396L22.8864 25.5933Z" fill="#EB0000" />
              </svg>
            </div>
            <div className="border-r-[#7E0000] border-r-[1px] h-full"></div>
            <div>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="xl:w-[56px] xl:h-[56px] 2xl:w-[64px] 2xl:h-[64px]">
                <g clipPath="url(#clip0_2401_48)">
                  <rect width="48" height="48" rx="24" fill="#EB0000" />
                  <path d="M24 0.00012207C37.2552 0.00012207 48 10.7449 48 24.0001C48 37.2553 37.2552 48.0001 24 48.0001C10.7448 48.0001 0 37.2553 0 24.0001C0 10.7449 10.7448 0.00012207 24 0.00012207ZM34.6608 14.4001C33.7464 14.4169 32.3424 14.8969 25.5912 17.6689C20.8524 19.6473 16.1267 21.6569 11.4144 23.6977C10.2624 24.1513 9.6624 24.5929 9.6072 25.0249C9.5016 25.8553 10.7112 26.1121 12.2328 26.6017C13.4736 27.0001 15.144 27.4657 16.0128 27.4849C16.8 27.5017 17.6784 27.1801 18.648 26.5249C25.272 22.1089 28.6872 19.8793 28.9032 19.8313C29.0544 19.7977 29.2632 19.7545 29.4072 19.8793C29.5488 20.0041 29.5344 20.2393 29.5176 20.3041C29.3976 20.8105 23.1792 26.3953 22.8216 26.7625L22.6488 26.9353C21.3288 28.2385 19.9968 29.0905 22.296 30.5857C24.3744 31.9369 25.584 32.7985 27.72 34.1857C29.088 35.0689 30.1608 36.1177 31.572 35.9905C32.2224 35.9305 32.892 35.3281 33.2352 33.5281C34.0392 29.2801 35.6232 20.0689 35.988 16.2721C36.0101 15.9572 35.9964 15.6408 35.9472 15.3289C35.9176 15.0771 35.7942 14.8458 35.6016 14.6809C35.3112 14.4457 34.86 14.3977 34.6608 14.4001Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_2401_48">
                    <rect width="48" height="48" rx="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='w-full fixed z-50 lg:hidden top-0 bg-[#F8F8F8]'>
        <div className='w-full  flex flex-row justify-between items-center  p-5'>
          <img
            src='./assets/catSmall.svg'
            className='w-[29px] h-[42px]'
          />
          <div onClick={handleMobileDropdown}>
            {isMobileMenuOpen ? (
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="22" width="31" height="4" transform="rotate(-45 0 22)" fill="#BB1605" />
                <rect x="3" width="31" height="4" transform="rotate(45 3 0)" fill="#BB1605" />
              </svg>
            ) : (
              <svg width="31" height="14" viewBox="0 0 31 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="31" height="4" fill="#BB1605" />
                <rect y="10" width="31" height="4" fill="#BB1605" />
              </svg>
            )}
          </div>

        </div>
      </div>
      <div className={`dropdown-menu ${isMobileMenuOpen ? 'slide-in' : 'slide-out'}`}>
        <div className='flex flex-col space-y-10 w-full items-center pt-20 h-full justify-center'>
          <div className='flex flex-col space-y-10 items-center'>
            <a onClick={handleMobileDropdown} href='#HomeM' className='font-inter text-[20px] text-white tracking-[0.2rem] cursor-pointer hover:text-[#EB0000] transition ease-in-out'>HOME</a>
            <a onClick={handleMobileDropdown} href='#AboutM' className='font-inter text-[20px] text-white tracking-[0.2rem] cursor-pointer hover:text-[#EB0000] transition ease-in-out'>ABOUT</a>
            <a onClick={handleMobileDropdown} href='#TokenomicsM' className='font-inter text-[20px] text-white tracking-[0.2rem] cursor-pointer hover:text-[#EB0000] transition ease-in-out'>TOKENOMICS</a>
            <a onClick={handleMobileDropdown} href='#RoadmapM' className='font-inter text-[20px] text-white tracking-[0.2rem] cursor-pointer hover:text-[#EB0000] transition ease-in-out'>ROADMAP</a>
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
      </div> */}


      <div className=' flex flex-col w-full'>
        <div id='Home' className=' w-full '>
          <Home />
        </div>
        {/* <div className='relative'> */}
        {/* <div className='absolute mt-[65rem] pt-[35rem] w-full' id='About'>
            <About />
          </div>
          <div className='absolute w-full mt-[120rem] pt-[20rem]' id='Tokenomics'>
            <Tokenomics />
          </div> */}
        <div className='w-full h-full ' id='Roadmap'>
          <Roadmap />
        </div>
        {/* <div className='absolute w-full mt-[179rem] pt-[20rem]' id='community'>
            <Socials />
          </div> */}
        {/* </div> */}
      </div>

      {/* <div className='md:hidden fullBGSmall flex flex-col mt-[1rem] w-full  h-[4840px]'>
        <div id='HomeM' className='absolute w-full top-0'>
          <Home />
        </div>
        <div className='relative'>
          <div className='absolute mt-[76rem] pt-[15rem] w-full' id='AboutM'>
            <About />
          </div>
          <div className='absolute w-full mt-[125rem] pt-[10rem]' id='TokenomicsM'>
            <Tokenomics />
          </div>
          <div className='absolute w-full mt-[179rem] pt-[20rem]' id='CommunityM'>
            <Socials />
          </div>
          <div className='w-full h-full absolute mt-[237rem] pt-[10rem]' id='RoadmapM'>
            <Roadmap />
          </div>
        </div>
      </div> */}
      <div className='w-full'>
        <Footer />
      </div>
    </div>
  )
}

export default App