const Home = () => {
    return (
        <div className="w-screen max-sm:h-[900px] bg-white h-[1152px] 2xl:h-[1800px] xl:h-[1300px] 4xl:h-[2400px]">
            <div className="flex items-center w-full flex-col justify-center pt-[12rem] xl:pt-[20rem] 5xl:pt-[40rem]">
                <p className="text-[#444444] font-inter max-sm:text-center max-sm:w-[207px] text-[32px] max-sm:text-[18px] xl:text-[36px] 2xl:text-[64px] 5xl:text-[72px]">GROW YOUR WEALTH WITH FORTUNE TAP</p>
                <p className="font-electroharmonix max-sm:w-[358px] max-sm:text-center text-[150px] text-headerText max-lg:text-[64px] xl:text-[170px] 2xl:text-[250px] 5xl:text-[320px] text-center leading-none">Japanese Cat</p>
                <img src="./assets/jcBG.svg" className="absolute pt-[8rem]" />
            </div>

            <div className="flex flex-col space-y-5 items-center justify-center py-5">
                <p className="text-black font-inter font-normal w-[628px] max-sm:w-[310px] max-lg:w-[628px] xl:w-[768px] 2xl:w-[1424px] 5xl:w-[1524px] text-center tracking-widest text-[16px] max-sm:text-[13px] xl:text-[20px] 2xl:text-[36px] 5xl:text-[40px]">INSPIRED BY ROUGE, VANESSA'S FATE CHANGING CAT FROM THE BLACK CLOVER ANIME & MANGA SERIES. BUILD YOUR FORTUNE WITH EVERY TAP FOR ALL PLAYERS WITH FORTUNE TAP!!</p>
            </div>
            <div className="PlayNowButtonMAX hidden max-sm:block absolute left-1/2 transform -translate-x-1/2 rounded-[8px] cursor-pointer">
                <p className="text-white font-bold font-inter">PLAY NOW!</p>
            </div>

            <div className="relative w-full pt-10 max-sm:pt-[14rem]">
                <div className="absolute w-full flex justify-between">
                    <img src="./assets/catLeft.svg" className="relative 3xl:w-[687px] 3xl:h-[804px] 3xl:bottom-[5rem]  max-md:hidden bottom-56 md:bottom-40 lg:bottom-48 xl:bottom-[7rem] 2xl:bottom-[2rem] 5xl:bottom-[1rem]" />
                    <img src="./assets/catRight.svg" className="relative 4xl:bottom-[8rem] 3xl:w-[720px] 3xl:bottom-[13rem] 3xl:h-[786px] max-md:pl-[15rem] max-sm:bottom-[6.5rem] bottom-56 md:bottom-40 lg:bottom-60 xl:bottom-[13rem] 2xl:bottom-[5rem] 5xl:bottom-[3rem]" />
                </div>
                <img src="./assets/chineseHouseBG.svg" className="w-full absolute max-md:hidden" />
                <img src="./assets/homeBGMobile.svg" className="w-full absolute top-[9.5rem] md:hidden" />

                <img src="./assets/homeBottom.svg" className="relative 4xl:top-[60rem] 3xl:top-[49rem] max-md:hidden xl:top-[30rem] 2xl:top-[37rem] top-[25rem] w-full 5xl:top-[68rem]" />
                <img src="./assets/homeBottomMobile.svg" className="relative md:hidden top-[7rem] w-full" />
            </div>
        </div>
    );
};

export default Home;
