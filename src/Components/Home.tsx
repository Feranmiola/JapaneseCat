
const Home = () => {
    return (
        <div className="w-screen h-screen bg-white ">
            <div className="flex items-center flex-col justify-center pt-[12rem]">
                <p className=" text-[#444444] font-inter text-[32px]">GROW YOUR WEALTH WITH FORTUNE TAP</p>
                <p className=" font-electroharmonix text-[150px] text-headerText  max-lg:text-[64px] text-center leading-none ">Japanese Cat</p>
                {/* <img
            src="./assets/jcBG.svg"
            className="absolute pt-[8rem]"
            /> */}
            </div>

            <div className="flex flex-col space-y-5 items-center justify-center py-5">
                <p className="text-black font-inter font-normal w-[628px] text-center max-lg:w-[628px] tracking-widest text-[16px]">INSPIRED BY ROUGE, VANESSA'S FATE CHANGING CAT FROM THE BLACK CLOVER ANIME & MANGA SERIES. BUILD YOUR FORTUNE WITH EVERY TAP FOR ALL PLAYERS WITH FORTUNE TAP!!</p>
            </div>
            <div className='PlayNowButtonMAX hidden max-sm:block absolute left-1/2 transform -translate-x-1/2 rounded-[8px] cursor-pointer'>
                <p className='text-white font-bold font-inter'>PLAY NOW!</p>
            </div>


            <div className="relative w-full pt-10">
                <div className="absolute w-full flex justify-between">
                    <img
                        src="./assets/catLeft.svg"
                        className="relative bottom-56 md:bottom-40 lg:bottom-48"
                    />
                    <img
                        src="./assets/catRight.svg"
                        className="relative bottom-56 md:bottom-40 lg:bottom-60"
                    />
                </div>
                <img
                    src="./assets/chineseHouseBG.svg"
                    className="w-full absolute"
                />
                <img
                    src="./assets/homeBottom.svg"
                    className="relative top-[25rem]  w-full"
                />
            </div>

        </div>
    )
}

export default Home