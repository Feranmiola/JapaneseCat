import { useEffect, useState } from 'react'
import Footer from './Components/Footer.tsx'
import Home from './Components/Home.tsx'
import Roadmap from './Components/Roadmap.tsx'
import './globals.css'
import { HashLoader } from 'react-spinners'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [loading, setLoading] = useState(true);
  const [playError, setPlayError] = useState(false);
  const imageUrls = ['./assets/catLeft.svg', './assets/catRight.svg', './assets/chineseHouseBG.svg', './assets/homeBottom.svg'];
  const imageUrlsMobile = ['./assets/catRight.svg', './assets/homeBGMobile.svg', './assets/homeBottomMobile.svg'];

  useEffect(() => {
    let loadedImages = 0;
    const imagesToLoad = window.innerWidth >= 768 ? imageUrls : imageUrlsMobile;

    imagesToLoad.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedImages++;
        if (loadedImages === imagesToLoad.length) {
          setLoading(false);
        }
      };
    });
  }, []);

  const playAudio = () => {
    const audio = new Audio('./assets/WelcomeSound.wav');
    audio.play().catch(error => {
      setPlayError(true);
      console.error('Error playing audio:', error);
    });
  };

  useEffect(() => {
    if (!loading || playError) {
      setPlayError(false);
      playAudio();
    }
  }, [loading, playError]);


  if (loading) {
    return (
      <div className='w-screen h-screen bg-white flex items-center justify-center minw-[100vh]'>
        <HashLoader color="#EB0000" />
      </div>
    );
  }

  const title = "Japanese Cat"
  const description = "Meet Maneki Neko, the iconic Japanese lucky cat! Known for its beckoning paw, Maneki Neko is believed to bring good fortune and prosperity. This charming feline is set to become the face of a revolutionary new token, capturing the essence of luck and success."
  const type = "Landing Page"

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>

      <div className='flex flex-col items-center justify-center'>
        <AnimatePresence>
          {!loading && (
            <motion.div
              initial={{ width: 0, opacity: 0, y: -100 }}
              animate={{ width: "100%", opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                bounce: 0.55,
                type: "spring"
              }}
              className="flex w-full max-w-[684px] 3xl:scale-150 3xl:top-16 max-sm:max-w-[310px] max-sm:max-h-[64px] h-[80px] bg-white items-center shadow-custom-normal rounded-[24px] justify-center fixed top-5 z-50 mx-2 md:mx-auto xl:max-w-[800px] xl:h-[100px] 2xl:max-w-[900px] 2xl:h-[120px]"
            >
              {/* Topbar content */}
              <div className="flex flex-row relative w-full h-full p-5 items-center justify-between">
                <img alt='Japanese Cat Logo' src="./assets/catSmall.svg" className="w-8 h-8 md:w-auto md:h-auto xl:w-12 xl:h-12 2xl:w-16 2xl:h-16" />
                <div className="inline-flex max-sm:hidden h-[48px] w-[132px] text-center animate-shimmer absolute left-1/2 transform -translate-x-1/2 items-center justify-center rounded-[8px] bg-[linear-gradient(85.82deg,#DF0000_30.31%,#FF4444_64.95%,#DF0000_104.43%)] bg-[length:200%_100%] cursor-pointer font-bold text-white text-[16px] transition-colors shadow-[inset_0_0_11.5px_0px_#FFFFFFDB]">
                  PLAY NOW!
                </div>
                <div className="flex flex-row items-center h-full space-x-2">
                  <div className="flex flex-row items-center h-full space-x-2">
                    <a href="https://x.com/RedJapaneseCat" target='blank'>
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="xl:w-[56px] shadow-sm xl:h-[56px] 2xl:w-[64px] 2xl:h-[64px] rounded-full">
                        <rect x="-0.00439453" y="-0.00219727" width="48.0044" height="48.0044" rx="24.0022" fill="white" />
                        <path d="M26.0491 21.9951L35.7954 10.909H33.4854L25.0251 20.5346L18.2645 10.909H10.4683L20.69 25.4661L10.4683 37.0908H12.7783L21.7141 26.9248L28.8539 37.0908H36.6501L26.0491 21.9951ZM22.8864 25.5933L21.8507 24.1439L13.6098 12.6108H17.1576L23.8065 21.9185L24.8422 23.3678L33.4873 35.4675H29.9396L22.8864 25.5933Z" fill="#EB0000" />
                      </svg>

                    </a>
                    <div className="border-r-[#7E0000] border-r-[1px] h-full"></div>
                    <a href="https://t.me/redjapanesecat" target='blank'>
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="xl:w-[56px] shadow-sm xl:h-[56px] 2xl:w-[64px] 2xl:h-[64px] rounded-full">
                        <g clip-path="url(#clip0_2360_7226)">
                          <path d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="white" />
                          <path d="M34.6608 14.4C33.7464 14.4168 32.3424 14.8968 25.5912 17.6688C20.8524 19.6471 16.1267 21.6568 11.4144 23.6976C10.2624 24.1512 9.6624 24.5928 9.6072 25.0248C9.5016 25.8552 10.7112 26.112 12.2328 26.6016C13.4736 27 15.144 27.4656 16.0128 27.4848C16.8 27.5016 17.6784 27.18 18.648 26.5248C25.272 22.1088 28.6872 19.8792 28.9032 19.8312C29.0544 19.7976 29.2632 19.7544 29.4072 19.8792C29.5488 20.004 29.5344 20.2392 29.5176 20.304C29.3976 20.8104 23.1792 26.3952 22.8216 26.7624L22.6488 26.9352C21.3288 28.2384 19.9968 29.0904 22.296 30.5856C24.3744 31.9368 25.584 32.7984 27.72 34.1856C29.088 35.0688 30.1608 36.1176 31.572 35.9904C32.2224 35.9304 32.892 35.328 33.2352 33.528C34.0392 29.28 35.6232 20.0688 35.988 16.272C36.0101 15.9571 35.9964 15.6407 35.9472 15.3288C35.9176 15.077 35.7942 14.8457 35.6016 14.6808C35.3112 14.4456 34.86 14.3976 34.6608 14.4Z" fill="#EB0000" />
                        </g>
                        <defs>
                          <clipPath id="clip0_2360_7226">
                            <rect width="48" height="48" rx="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>

          <motion.div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 0.5 }}
            className='flex flex-col w-full'
          >
            <div id='Home' className='w-full'>
              <Home />
            </div>
            <div className='w-full ' id='Roadmap'>
              <Roadmap />
            </div>
            <div className='w-full'>
              <Footer />
            </div>
          </motion.div>

        </AnimatePresence>
      </div>
    </>
  )
}

export default App