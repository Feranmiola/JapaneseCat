
const Footer = () => (
    <>
        <div className=" bg-tokenomicsBg h-[447px] w-full max-lg:hidden">
            <div className="flex items-center justify-center  h-full ">
                <div className="bg-roadmapBG w-[1166px] h-[241px]">
                    <div className="flex flex-col items-center justify-between">
                        <div className="border-b-[1px] border-tokenomicsBg w-full items-center justify-center flex flex-col py-10">
                            <p className="text-[#BB1605] text-[24px] font-semibold">FOLLOW THE LUCKY CAT</p>
                            <p className="text-[16px] tracking-[0.2rem]">STAY CONNECTED WITH ENDLESS FORTUNE AND OPPORTUNITES</p>
                        </div>
                        <div className="flex flex-row h-full">
                            <a href="https://t.me/redjapanesecat" target="blank" className="w-[582.5px] flex items-center py-8 border-r-[1px] border-tokenomicsBg flex-row space-x-5 justify-center">
                                <img
                                    src="./assets/telegramIcon.svg" />
                                <p className="text-[20px] tracking-[0.2rem]">TELEGRAM</p>
                            </a>
                            <a href="https://x.com/RedJapaneseCat" target="blank" className="w-[582.5px] flex items-center py-7 flex-row space-x-5 justify-center">
                                <img
                                    src="./assets/xicon.svg" />
                                <p className="text-[20px] tracking-[0.2rem]">X (TWITTER)</p>

                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </div>

        <div className=" bg-tokenomicsBg w-screen lg:hidden flex items-center justify-center">
            <div className="flex flex-col space-y-[1px] p-10" >
                <div className="bg-[#FFF6DC]">
                    <div className="py-10 px-5 flex flex-col space-y-2 items-center justify-center">
                        <p className="text-[#BB1605] text-[95%] leading-none font-medium tracking-[0.2rem]">FOLLOW THE LUCKY CAT</p>
                        <p className="text-[60%] w-[80%] text-center tracking-[0.2rem]">STAY CONNECTED WITH ENDLESS FORTUNE AND OPPORTUNITES</p>
                    </div>
                </div>

                <a href="https://t.me/redjapanesecat" target="blank" className="bg-[#FFF6DC]">
                    <div className="py-10 px-5 flex flex-row items-center space-x-2 justify-center">
                        <img
                            src="./assets/telegramIcon.svg" />
                        <p className="text-[20px] tracking-[0.2rem]">TELEGRAM</p>
                    </div>
                </a>

                <a href="https://x.com/RedJapaneseCat" target="blank" className="bg-[#FFF6DC]">
                    <div className="py-10 px-5 flex flex-row items-center space-x-2 justify-center">
                        <img
                            src="./assets/xicon.svg" />
                        <p className="text-[20px] tracking-[0.2rem]">X (TWITTER)</p>
                    </div>
                </a>


            </div>

        </div>
    </>
)

export default Footer