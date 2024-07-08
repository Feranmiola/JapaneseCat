
const About = () => {
  return (
    <div className="w-full z-40">

        <div className="">
            <div className="flex flex-col space-y-[15rem] max-sm:space-y-10 items-center justify-center">
                <div className="flex flex-col items-center justify-center space-y-2">
                    <p className="font-electroharmonix max-lg:text-[32px] max-sm:w-[230px] max-sm:text-center text-[48px] text-goldText">About Japanese Cat</p>
                    <p className="text-[16px] max-lg:text-[14px] text-white w-[753px] max-sm:w-[285px] max-sm:tracking-[0.2rem] text-center font-thin tracking-[10%]">MEET ROUGE, THE ICONIC CAT FROM THE JAPANESE ANIME AND MANGA SERIES, BLACK CLOVER KNOWN FOR ITS FATE CHANGING TOUCH WITH ITS PAWS. ROUGE HAS TURNED THE TIDES OF COUNTLESS BATTLES FOR HER OWNER VANESSA AND MEMBERS OF THE BLACK BULL SQUAD. NOW SHE’S BECOME THE FACE OF THIS NEW TOKEN CAPTURING THE ESSENCE OF LUCK, SUCCESS AND GOOD FATE.</p>
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