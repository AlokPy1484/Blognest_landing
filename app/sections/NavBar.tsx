


function NavBar(){


    return(
        <div className="fixed top-0 flex flex-row justify-between items-center w-screen py-3 px-4 md:px-12 border-b border-zinc-700 bg-transparent backdrop-blur-md z-100">
            <div className="text-[22px] text-white">
                Blognest
            </div>
            <div className="flex flex-row justify-center items-center gap-10 text-[16px] text-white">
                <div>
                    Home
                </div>
                <div className="p-2 rounded-md bg-zinc-800">
                    Try Now!
                </div>
            </div>

        </div>
    )
}

export default NavBar