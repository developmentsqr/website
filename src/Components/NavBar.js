function NavBar() {

    return(
        <>
            <div className = "bg-[#f4f4f4] w-full h-[10vh] flex flex-row justify-around">
                <div className= "h-full flex items-center justify-center">
                    <div className="text-purple-800 font-sura text-4xl font-semibold">
                        DS
                    </div>
                </div>

                <div className = 'h-full flex items-center justify-center'>
                    <div className = 'flex  border justify-between items-between'>
                        <div className = "text-primary text-purple-800 font-josefin-sans text-base font-semibold ml-20">
                            Services
                        </div>
                        <div className = "text-primary text-purple-800 font-josefin-sans text-base font-semibold ml-20">
                            Services
                        </div>
                        <div className = "text-primary text-purple-800 font-josefin-sans text-base font-semibold ml-20">
                            Services
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;