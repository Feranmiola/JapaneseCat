import { motion } from 'framer-motion';
import { useEffect, useRef, useCallback } from 'react'

const Home = () => {
    const audioContextRef = useRef<AudioContext | null>(null);
    const isClickSoundPlayingRef = useRef<boolean>(false);
    const clickSoundBufferRef = useRef<AudioBuffer | null>(null);

    useEffect(() => {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();

        const clickSoundUrl = 'https://cdn.pixabay.com/download/audio/2022/09/29/audio_a4b3f2fe44.mp3?filename=select-sound-121244.mp3';
        fetch(clickSoundUrl)
            .then(response => response.arrayBuffer())
            .then(arrayBuffer => audioContextRef.current!.decodeAudioData(arrayBuffer))
            .then(audioBuffer => {
                clickSoundBufferRef.current = audioBuffer;
            })
            .catch(error => console.error('Error loading click sound:', error));


        return () => {
            if (audioContextRef.current) {
                audioContextRef.current.close();
            }
        };
    }, []);

    const playClickSound = useCallback(() => {
        if (isClickSoundPlayingRef.current || !audioContextRef.current || !clickSoundBufferRef.current) return;
        isClickSoundPlayingRef.current = true;

        const source = audioContextRef.current.createBufferSource();
        source.buffer = clickSoundBufferRef.current;
        source.connect(audioContextRef.current.destination);
        source.start(0);
        source.onended = () => {
            isClickSoundPlayingRef.current = false;
        };
    }, []);

    const handlePlayNowClick = useCallback((event: React.MouseEvent | React.TouchEvent) => {
        event.preventDefault();
        playClickSound();
        window.open("https://t.me/fortunetap_bot", "_blank");
    }, [playClickSound]);


    return (
        <div className="w-screen max-sm:h-[1000px] bg-white h-[1152px] md:h-[820px] lg:h-[1100px] 2xl:h-[1800px] xl:h-[1300px] 4xl:h-[2400px]">
            <div className="flex items-center w-full flex-col justify-center pt-[12rem] xl:pt-[20rem] 5xl:pt-[40rem]">
                <motion.img
                    alt="Japanese Background"
                    src="./assets/jcBG.svg"
                    className="absolute pt-[8rem]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />

                <motion.p
                    className="text-[#444444] font-inter max-sm:text-center max-sm:w-[207px] text-[32px] max-sm:text-[18px] max-lg:text-[24px] xl:text-[36px] 2xl:text-[64px] 5xl:text-[72px]"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                >
                    GROW YOUR WEALTH WITH FORTUNE TAP
                </motion.p>

                <motion.p
                    className="font-electroharmonix max-sm:w-[358px] max-sm:text-center text-[150px] text-headerText max-lg:text-[64px] xl:text-[170px] 2xl:text-[250px] 5xl:text-[320px] text-center leading-none"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.7 }}
                >
                    Japanese Cat
                </motion.p>
            </div>

            <motion.div
                className="flex flex-col space-y-5 items-center justify-center py-5"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.9 }}
            >
                <p className="text-black font-inter font-normal w-[628px] max-sm:w-[310px] max-lg:w-[628px] xl:w-[768px] 2xl:w-[1424px] 5xl:w-[1524px] text-center tracking-widest text-[16px] max-sm:text-[13px] xl:text-[20px] 2xl:text-[36px] 5xl:text-[40px]">
                    INSPIRED BY ROUGE, VANESSA'S FATE CHANGING CAT FROM THE BLACK CLOVER ANIME & MANGA SERIES. BUILD YOUR FORTUNE WITH EVERY TAP FOR ALL PLAYERS WITH FORTUNE TAP!!
                </p>
            </motion.div>
            <div className='w-full flex items-center justify-center'>

                <motion.div
                    onClick={handlePlayNowClick}
                    className="inline-flex md:hidden h-[60px] w-[268px] text-center animate-shimmer items-center justify-center rounded-[8px] bg-[linear-gradient(85.82deg,#DF0000_30.31%,#FF4444_64.95%,#DF0000_104.43%)] bg-[length:200%_100%] cursor-pointer font-bold text-white text-[16px] transition-colors shadow-[inset_0_0_11.5px_0px_#FFFFFFDB]"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 2.1 }}
                >
                    PLAY NOW!
                </motion.div>
            </div>


            <div className="relative w-full pt-10 max-sm:pt-[20rem] max-lg:pt-[8rem]">
                <div className="md:absolute w-full flex md:justify-between ">
                    <motion.img
                        alt="Cat Left"
                        src="./assets/catLeft.svg"
                        className="relative max-lg:h-[304px] max-lg:w-[199.84px] 3xl:w-[687px] 3xl:h-[804px] 3xl:bottom-[5rem] max-md:hidden max-lg:bottom-[2rem] bottom-56 md:bottom-[6rem] lg:bottom-48 xl:bottom-[7rem] 2xl:bottom-[2rem] 5xl:bottom-[1rem]"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 2.5 }}
                    />
                    <motion.img
                        alt="Cat Right"
                        src="./assets/catRight.svg"
                        className="md:relative max-sm:absolute max-sm:left-[10rem] max-sm:w-[199.84px] max-sm:h-[304px] max-md:left-[12rem] max-md:top-[2rem] max-md:bottom-[12rem] max-lg:h-[304px] max-lg:w-[199.84px] 4xl:bottom-[8rem] 3xl:w-[720px] 3xl:bottom-[13rem] 3xl:h-[786px] max-lg:bottom-[10rem] max-sm:top-[5rem] bottom-56 md:bottom-[8rem] lg:bottom-60 xl:bottom-[13rem] 2xl:bottom-[5rem] 5xl:bottom-[3rem]"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 2.5 }}
                    />
                </div>
                {/* <motion.img
                    alt="Japanese House"
                    src="./assets/chineseHouseBG.svg"
                    className="w-full absolute max-md:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2.3 }}
                />
                <motion.img
                    alt="Japanese House"
                    src="./assets/homeBGMobile.svg"
                    className="w-full absolute top-[12.5rem] md:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2.3 }}
                /> */}
                <img alt="Japanese House" src="./assets/chineseHouseBG.svg" className="w-full absolute max-md:hidden" />
                <img alt="Japanese House" src="./assets/homeBGMobile.svg" className="w-full absolute top-[12.5rem] md:hidden" />

                {/* <motion.img
                    alt="Wave Design"
                    src="./assets/homeBottom.svg"
                    className="relative max-lg:top-[12rem] 4xl:top-[60rem] 3xl:top-[58rem] max-md:hidden xl:top-[30rem] 2xl:top-[37rem] top-[24rem] w-full 5xl:top-[66rem]"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 2.7 }}
                />
                <motion.img
                    alt="Wave Design"
                    src="./assets/homeBottomMobile.svg"
                    className="relative md:hidden top-[7rem] w-full"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 2.7 }}
                /> */}

                <img alt="Wave Design" src="./assets/homeBottom.svg" className="relative max-lg:top-[12rem] 4xl:top-[60rem] 3xl:top-[58rem] max-md:hidden xl:top-[30rem] 2xl:top-[37rem] top-[24rem] w-full 5xl:top-[66rem]" />
                <img alt="Wave Design" src="./assets/homeBottomMobile.svg" className="relative md:hidden top-[6rem] w-full" />
            </div>
        </div>
    );
};

export default Home;

{/* <div >
    <div className="flex items-center w-full flex-col justify-center pt-[12rem] xl:pt-[20rem] 5xl:pt-[40rem]">
        <p className="text-[#444444] font-inter max-sm:text-center max-sm:w-[207px] text-[32px] max-sm:text-[18px] max-lg:text-[24px] xl:text-[36px] 2xl:text-[64px] 5xl:text-[72px]">GROW YOUR WEALTH WITH FORTUNE TAP</p>
        <p className="font-electroharmonix max-sm:w-[358px] max-sm:text-center text-[150px] text-headerText max-lg:text-[64px] xl:text-[170px] 2xl:text-[250px] 5xl:text-[320px] text-center leading-none">Japanese Cat</p>
        <img alt="Japanese Background" src="./assets/jcBG.svg" className="absolute pt-[8rem]" />
    </div>

    <div className="flex flex-col space-y-5 items-center justify-center py-5">
        <p className="text-black font-inter font-normal w-[628px] max-sm:w-[310px] max-lg:w-[628px] xl:w-[768px] 2xl:w-[1424px] 5xl:w-[1524px] text-center tracking-widest text-[16px] max-sm:text-[13px] xl:text-[20px] 2xl:text-[36px] 5xl:text-[40px]">INSPIRED BY ROUGE, VANESSA'S FATE CHANGING CAT FROM THE BLACK CLOVER ANIME & MANGA SERIES. BUILD YOUR FORTUNE WITH EVERY TAP FOR ALL PLAYERS WITH FORTUNE TAP!!</p>
    </div>
    <div className="inline-flex md:hidden h-[60px] w-[268px] text-center animate-shimmer absolute left-1/2 transform -translate-x-1/2 items-center justify-center rounded-[8px] bg-[linear-gradient(85.82deg,#DF0000_30.31%,#FF4444_64.95%,#DF0000_104.43%)] bg-[length:200%_100%] cursor-pointer font-bold text-white text-[16px] transition-colors shadow-[inset_0_0_11.5px_0px_#FFFFFFDB]">
        PLAY NOW!
    </div>

    <div className="relative w-full pt-10 max-sm:pt-[20rem] max-lg:pt-[8rem]">
        <div className="md:absolute w-full flex md:justify-between ">
            <img alt="Cat Left" src="./assets/catLeft.svg" className="relative  max-lg:h-[304px] max-lg:w-[199.84px] 3xl:w-[687px] 3xl:h-[804px] 3xl:bottom-[5rem] max-md:hidden max-lg:bottom-[2rem] bottom-56 md:bottom-40 lg:bottom-48 xl:bottom-[7rem] 2xl:bottom-[2rem] 5xl:bottom-[1rem]" />
            <img alt="Cat Right" src="./assets/catRight.svg" className="md:relative max-sm:absolute max-sm:left-[10rem] max-sm:w-[199.84px] max-sm:h-[304px] max-md:left-[12rem] max-md:top-[2rem] max-md:bottom-[12rem] max-lg:h-[304px] max-lg:w-[199.84px]  4xl:bottom-[8rem] 3xl:w-[720px] 3xl:bottom-[13rem] 3xl:h-[786px] max-lg:bottom-[10rem] max-sm:top-[5rem] bottom-56 md:bottom-40 lg:bottom-60 xl:bottom-[13rem] 2xl:bottom-[5rem] 5xl:bottom-[3rem]" />
        </div>
        <img alt="Japanese House" src="./assets/chineseHouseBG.svg" className="w-full absolute max-md:hidden" />
        <img alt="Japanese House" src="./assets/homeBGMobile.svg" className="w-full absolute top-[12.5rem] md:hidden" />

        <img alt="Wave Design" src="./assets/homeBottom.svg" className="relative max-lg:top-[12rem] 4xl:top-[60rem] 3xl:top-[58rem] max-md:hidden xl:top-[30rem] 2xl:top-[37rem] top-[24rem] w-full 5xl:top-[66rem]" />
        <img alt="Wave Design" src="./assets/homeBottomMobile.svg" className="relative md:hidden top-[7rem] w-full" />
    </div>
</div> */}