"use client"
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
    const [menu, setMenu] = useState(false)
    return (
        <header>
            <AnimatePresence>
                <motion.div
                initial={{opacity:0, y:-50}}
                animate={{opacity:1, y:0}}
                exit={{opacity:1, y:50}}
                transition={{
                    duration:0.5,
                    bounce:0.5,
                    type:"spring",
                    visualDuration:0.5
                }}
                className="max-w-7xl mx-auto px-6">      
                    <nav className="py-10 flex items-center justify-between bg-white bg-transparent sticky">
                    <Link href="/" className="font-bold text-xl hover:cursor-pointer">Os<span className="text-orange-400">see&apos;s</span></Link>
                    <ul id="navigator" className="hidden md:flex space-x-10 text-sm font-extralight">
                        <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
                        <li><Link href="/pages/gallery" className="hover:text-blue-500">Gallery</Link></li>
                        <li><Link href="/pages/projects" className="hover:text-blue-500">Projects</Link></li>
                    </ul>
                    <button
                    onClick={() => setMenu(!menu)}
                    className="md:hidden block">
                        {menu? <Image src="/icons/x.png" width={28} height={28} alt="menu"/> : <Image src="/icons/menu.png" width={28} height={28} alt="menu"/> }
                    </button>
                    </nav>


                    <motion.div
                    initial={{opacity:0, y:-20}}
                    animate={{opacity:1, y:0}}
                    exit={{opacity:1, y:-20}}
                    transition={{
                        duration:0.5,
                        bounce:0.5,
                        type:"spring",
                        visualDuration:0.5
                    }}
                    
                    >    
                        <ul id="navigator" className={`md:hidden flex flex-col items-center space-y-5 pb-5 ${menu? "block": "hidden"}`}>
                            <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
                            <li><Link href="/pages/gallery" className="hover:text-blue-500">Gallery</Link></li>
                            <li><Link href="/pages/projects" className="hover:text-blue-500">Projects</Link></li>
                        </ul>
                    </motion.div>

                </motion.div>
            </AnimatePresence>
        </header>
    )
}