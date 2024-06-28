
const About = () => {
  return (
    <div className="w-full z-40">

        <div className="">
            <div className="flex flex-col space-y-[15rem] max-sm:space-y-10 items-center justify-center">
                <div className="flex flex-col items-center justify-center space-y-2">
                    <p className="font-electroharmonix max-lg:text-[32px] max-sm:w-[230px] max-sm:text-center text-[48px] text-goldText">About Japanese Cat</p>
                    <p className="text-[16px] max-lg:text-[14px] text-white w-[753px] max-sm:w-[285px] max-sm:tracking-[0.2rem] text-center font-thin tracking-[10%]">MEET MANEKI NEKO, THE ICONIC JAPANESE LUCKY CAT! KNOWN FOR ITS BECKONING PAW, MANEKI NEKO IS BELIEVED TO BRING GOOD FORTUNE AND PROSPERITY. THIS CHARMING FELINE IS SET TO BECOME THE FACE OF A REVOLUTIONARY NEW TOKEN, CAPTURING THE ESSENCE OF LUCK AND SUCCESS.</p>
                </div>

                <img
                src="./assets/catAbout.svg"
                />
            </div>

        </div>
        
    </div>
  )
}

export default About