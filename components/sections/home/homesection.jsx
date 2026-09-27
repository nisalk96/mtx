import HomeBtns from "./homeBtns";
export default function homesection() {
    return (
        <>
            <section className="bg-desktop bg-fixed overflow-hidden h-screen top-0 left-0">
                <div className='fixed top-20 md:top-1/4 lg:top-1/3 left-2 md:left-24 lg:left-36 md:w-auto w-full'>
                    <div className='mb-5 text-center'>
                        <h1 className=' text-4xl md:text-8xl drop-shadow-xl animate-pulse'><span className='text-white'>Matrix</span><span className='text-yellow-400'>TDM</span></h1>
                        <h1 className=' text-base md:text-2xl drop-shadow-xl animate-pulse'><span className='text-white'>Warriors of the</span><span className='text-yellow-400'> era.</span></h1>
                    </div>
                    <div>
                        <div className='grid gap-y-4 gap-x-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
                            <HomeBtns src='/svg/join_button.svg' link='cod4://45.32.113.186:28960' />
                            <HomeBtns src='/svg/ss_button.svg' link='/screen/screenshots' />
                            <HomeBtns src='/svg/ban_button.svg' link='/screen/banandkick' />
                            <HomeBtns src='/svg/top_button.svg' link='/screen/topplayers' />
                            <HomeBtns src='/svg/admin_button.svg' link='/screen/adminpanel' />
                            <HomeBtns src='/svg/discord_button.svg' link='https://discord.gg/mgfvPfEB' />
                            <HomeBtns src='/svg/about_button.svg' link='/screen/about' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
