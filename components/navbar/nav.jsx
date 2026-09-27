import Link from "next/link";
import ButtonsList from "./buttons";
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import Image from "next/image";

export default function navbar() {

    return (
        <>
            <nav className="flex items-center justify-between flex-wrap bg-white p-4 sticky top-0 shadow-lg pb-2 z-10">
                {/* Left */}
                <div className="flex items-center flex-shrink-0 text-black">
                    <Link href='/'><a className="font-semibold text-xl tracking-tight">Matrix</a></Link>
                </div>
                {/* Center */}
                <ul className="hidden md:flex text-center ">

                    <ButtonsList src='/icons/launch.svg' link='cod4://45.32.113.186:28960' tooltip='Launch' />
                    <ButtonsList src='/icons/ss.svg' link='/screen/screenshots' tooltip='Screenshots' />
                    <ButtonsList src='/icons/ban.svg' link='/screen/banandkick' tooltip='Ban And Kick' />
                    <ButtonsList src='/icons/top.svg' link='/screen/topplayers' tooltip='Top Players' />
                    <ButtonsList src='/icons/admin.svg' link='/screen/adminpanel' tooltip='Admin' />
                    <ButtonsList src='/icons/discord.svg' link='https://discord.gg/mgfvPfEB' tooltip='Discord' />
                    <ButtonsList src='/icons/about.svg' link='/screen/about' tooltip='About' />
                </ul>
                {/* Dropdown */}
                <div className='text-left md:hidden inline-block relative m-0'>
                    <Menu menuButton={
                        <MenuButton><div className='text-center text-xl'> Menu </div></MenuButton>}>

                        <MenuItem><a href='cod4://45.32.113.186:28960'><Image src='/icons/launch.svg' alt="" width={12} height={12} className='pr-2' /> Launch</a></MenuItem>
                        <MenuItem><Link href='/screen/screenshots'><a><Image src='/icons/ss.svg' alt="" width={12} height={12} className='pr-2' /> Screenshots</a></Link></MenuItem>
                        <MenuItem><Link href='/screen/banandkick'><a><Image src='/icons/ban.svg' alt="" width={12} height={12} className='pr-2' /> Ban  and kick</a></Link></MenuItem>
                        <MenuItem><Link href='/screen/topplayers'><a><Image src='/icons/top.svg' alt="" width={12} height={12} className='pr-2' />  Top players</a></Link></MenuItem>
                        <MenuItem><Link href='/screen/adminpanel'><a><Image src='/icons/admin.svg' alt="" width={12} height={12} className='pr-2' /> Admin</a></Link></MenuItem>
                        <MenuItem><a href='https://discord.gg/mgfvPfEB'><Image src='/icons/discord.svg' alt="" width={12} height={12} className='pr-2' /> Discord</a></MenuItem>
                        <MenuItem><Link href='/screen/about'><a><Image src='/icons/about.svg' alt="" width={12} height={12} className='pr-2' /> About</a></Link></MenuItem>
                    </Menu>
                </div>
                {/* Right */}
                <div>
                    <Link href='/screen/auth' className='flex items-center m-auto '><a>Auth</a></Link>
                </div>
            </nav>
        </>
    )
};
