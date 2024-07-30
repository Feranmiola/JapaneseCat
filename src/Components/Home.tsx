const Home = () => {
    return (
        <div className="w-screen bg-white h-[1152px] 2xl:h-screen xl:h-[1300px]">
            <div className="flex items-center flex-col justify-center pt-[12rem] xl:pt-[20rem]">
                <p className="text-[#444444] font-inter text-[32px] xl:text-[36px] 2xl:text-[64px]">GROW YOUR WEALTH WITH FORTUNE TAP</p>
                <p className="font-electroharmonix text-[150px] text-headerText max-lg:text-[64px] xl:text-[170px] 2xl:text-[250px] text-center leading-none">Japanese Cat</p>
                <img src="./assets/jcBG.svg" className="absolute pt-[8rem]" />
            </div>

            <div className="flex flex-col space-y-5 items-center justify-center py-5">
                <p className="text-black font-inter font-normal w-[628px] max-lg:w-[628px] xl:w-[768px] 2xl:w-[1424px] text-center tracking-widest text-[16px] xl:text-[20px] 2xl:text-[36px]">INSPIRED BY ROUGE, VANESSA'S FATE CHANGING CAT FROM THE BLACK CLOVER ANIME & MANGA SERIES. BUILD YOUR FORTUNE WITH EVERY TAP FOR ALL PLAYERS WITH FORTUNE TAP!!</p>
            </div>
            <div className="PlayNowButtonMAX hidden max-sm:block absolute left-1/2 transform -translate-x-1/2 rounded-[8px] cursor-pointer">
                <p className="text-white font-bold font-inter">PLAY NOW!</p>
            </div>

            <div className="relative w-full pt-10">
                <div className="absolute w-full flex justify-between">
                    <img src="./assets/catLeft.svg" className="relative bottom-56 md:bottom-40 lg:bottom-48 xl:bottom-[7rem] 2xl:bottom-[2rem]" />
                    <img src="./assets/catRight.svg" className="relative bottom-56 md:bottom-40 lg:bottom-60 xl:bottom-[13rem] 2xl:bottom-[5rem]" />
                </div>
                <img src="./assets/chineseHouseBG.svg" className="w-full absolute" />
                <img src="./assets/homeBottom.svg" className="relative xl:top-[30rem] 2xl:top-[37rem] top-[25rem] w-full" />
            </div>
        </div>
    );
};

export default Home;
