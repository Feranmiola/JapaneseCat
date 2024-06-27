
const Home = () => {
  return (
    <div className="w-screen h-screen ">
        <div className="flex items-center relative justify-center pt-20">
            <p className=" font-electroharmonix text-[150px] text-headerText w-[830px] text-center leading-none pt-[8rem]">Japanese Cat</p>
            <img
            src="./assets/jcBG.svg"
            className="absolute pt-[8rem]"
            />
        </div>
        
        <div className="flex flex-col space-y-5 items-center justify-center py-5">
            <p className=" text-textDark font-inter text-[19px]">FORTUNE BECKONS</p>
            <p className="text=textDark font-inter w-[572px] text-center tracking-widest text-[12px]">UNLOCK ENDLESS PROSPERITY WITH THE JAPANESE CAT TOKEN! INSPIRED BY THE ICONIC JAPANESE MANEKI NEKO CAT, THIS TOKEN WILL BRING LUCK, WEALTH, AND HAPPINESS TO ITS HOLDERS.</p>
        </div>


        <div className="relative w-full pt-10">
            <div className="absolute w-full flex justify-between">
                <img
                src="./assets/catLeft.svg"
                />
                <img
                src="./assets/catRight.svg"
                className="relative bottom-[14rem]"
                />
            </div>
            <img
            src="./assets/chineseHouseBG.svg"
            className="w-full absolute"
            />

        <div className="absolute w-full z-30 pt-[20rem]">
            <img
            src="./assets/homeBottom.svg"
            className="w-full"
            />
        </div>
        </div>
    </div>
  )
}

export default Home