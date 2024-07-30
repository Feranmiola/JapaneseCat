
const Roadmap = () => {
    return (
        <div className="pt-[10rem] 4xl:pt-[53rem] 3xl:pt-[37rem] 3xl:mb-[25rem] max-sm:pt-[12rem] xl:pt-[20rem] 2xl:pt-[15rem] mb-[13rem] 2xl:mb-[17rem] 5xl:pt-[60rem]">

            <div className=" relative">
                <div className="flex  flex-col space-y-20 items-center justify-center">
                    <p className="font-electroharmonix text-[48px] text-headerText max-sm:text-[32px] 3xl:text-[200px] max-lg:test-[32px]">ROADMAP</p>
                    <div className="flex flex-col  items-center justify-center space-y-5">

                        <div className="w-[859px] max-lg:w-[340px] max-lg:h-[176px] h-[184px] border-[1px] border-[#BB1605]">
                            <div className="flex flex-row max-sm:flex-col max-sm:space-y-5 lg:space-x-20 py-10 max-sm:py-5 lg:items-center h-full max-sm:justify-center max-sm:pl-[3rem]  lg:pl-10">
                                <p className="text-[#BB1605] max-sm:font-medium max-sm:text-[20px] font-bold text-[28px]">PHASE 1</p>

                                <ul>
                                    <li className="text-[#BB1605] max-sm:text-[14px] text-[20px]">PRESALE MARKETING</li>
                                    <li className="text-[#BB1605] max-sm:text-[14px] text-[20px]">PRESALE ON PURPLESALE</li>
                                    <li className="text-[#BB1605] max-sm:text-[14px] text-[20px]">LAUNCH</li>
                                </ul>

                            </div>
                        </div>

                        <div className="w-[859px] max-lg:w-[340px] max-lg:h-[176px] h-[184px] border-[1px] border-[#BB1605]">
                            <div className="flex flex-row max-sm:flex-col max-sm:space-y-5 lg:space-x-20 py-10 max-sm:py-5 lg:items-center h-full max-sm:justify-center max-sm:pl-[3rem]  lg:pl-10">
                                <p className="text-[#BB1605] max-sm:font-medium max-sm:text-[20px] font-bold text-[28px]">PHASE 2</p>

                                <ul>
                                    <li className="text-[#BB1605] max-sm:text-[14px] text-[20px]">POST LAUNCH MARKETING</li>
                                    <li className="text-[#BB1605] max-sm:text-[14px] text-[20px]">AVEDEX, DEXTOOLS, DEXSCREENER TRENDING</li>
                                    <li className="text-[#BB1605] max-sm:text-[14px] text-[20px]">CMC, CG LISTINGS</li>
                                </ul>

                            </div>
                        </div>

                        <div className="w-[859px] max-lg:w-[340px] max-lg:h-[176px] h-[184px] border-[1px] border-[#BB1605]">
                            <div className="flex flex-row max-sm:flex-col max-sm:space-y-5 lg:space-x-20 py-10 max-sm:py-5 lg:items-center h-full max-sm:justify-center max-sm:pl-[3rem]  lg:pl-10">
                                <p className="text-[#BB1605] max-sm:font-medium max-sm:text-[20px] font-bold text-[28px]">PHASE 3</p>

                                <ul>
                                    <li className="text-[#BB1605] max-sm:text-[14px] text-[20px]">10,000 holders</li>
                                    <li className="text-[#BB1605] max-sm:text-[14px] text-[20px]">MULTICHAIN BRIDGINF</li>
                                    <li className="text-[#BB1605] max-sm:text-[14px] text-[20px]">TOPTIER PARTNERSHIPS</li>
                                </ul>

                            </div>
                        </div>

                    </div>

                </div>
                <div className="absolute max-md:hidden 3xl:top-[65rem] top-[50rem] xl:top-[48rem] 2xl:top-[49rem] w-full">
                    <img
                        src="./assets/roadmapBottom.svg"
                        className="  w-full"
                    />
                </div>
                <div className="absolute md:hidden top-[50rem] w-full">
                    <img
                        src="./assets/roadmapBottomMobile.svg"
                        className="  w-full"
                    />
                </div>
            </div>

        </div>
    )
}

export default Roadmap