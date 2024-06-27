
const Footer = () => {
  return (
    <div className=" bg-tokenomicsBg h-[447px] w-full">
        <div className="flex items-center justify-center mt-28">
            <div className="bg-roadmapBG w-[1166px] h-[241px]">
                <div className="flex flex-col items-center justify-between">
                    <div className="border-b-[1px] border-tokenomicsBg w-full items-center justify-center flex flex-col py-10">
                        <p className="text-[#BB1605] text-[24px] font-semibold">FOLLOW THE LUCKY CAT</p>
                        <p className="text-[16px] tracking-[0.2rem]">STAY CONNECTED WITH ENDLESS FORTUNE AND OPPIRTUNITES</p>
                    </div>
                    <div className="flex flex-row h-full">
                        <div className="w-[582.5px] flex items-center py-8 border-r-[1px] border-tokenomicsBg flex-row space-x-5 justify-center">
                            <img
                            src="./assets/telegramIcon.svg"
                            />
                            <p className="text-[20px] tracking-[0.2rem]">TELEGRAM</p>

                        </div>
                        <div className="w-[582.5px] flex items-center py-7 flex-row space-x-5 justify-center">
                            <img
                            src="./assets/xicon.svg"
                            />
                            <p className="text-[20px] tracking-[0.2rem]">X (TWITTER)</p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
        
    </div>
  )
}

export default Footer