"use client"



function NavBar(){

    const ScrollToHero = () => {
        window.scrollTo({
            top: document.body.scrollTop,
            behavior: "smooth"
        })
    }


    return(
        <div className="fixed top-0 flex flex-row justify-between items-center w-screen py-3 px-4 md:px-12 border-b border-zinc-700 bg-transparent backdrop-blur-md z-100">
            <div onClick={ScrollToHero} className="text-[22px] text-white cursor-pointer">
                Blognest
            </div>
            <div className="flex flex-row justify-center items-center gap-10 text-[16px] text-white">
                <a href="https://github.com/AlokPy1484/BlogNestUI" target="_blank" className="flex flex-row gap-3">
                     GitHub
                </a>
                <a href="https://blog-nest-ui-98u2.vercel.app/" target="_blank" className="p-2 rounded-md bg-zinc-800">
                    Try Now!
                </a>
            </div>
        </div>
    )
}

export default NavBar