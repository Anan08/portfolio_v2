"use client"
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
export default function Navbar() {
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
                }}>      
                    <nav className="py-10 flex items-center justify-between bg-white bg-transparent sticky">
                    <Link href="/" className="font-bold text-xl hover:cursor-pointer">Os<span className="text-orange-400">see&apos;s</span></Link>
                    <ul id="navigator" className="flex space-x-10 text-sm font-extralight">
                        <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
                        <li><Link href="/pages/gallery" className="hover:text-blue-500">Gallery</Link></li>
                        <li><Link href="/pages/projects" className="hover:text-blue-500">Projects</Link></li>
                    </ul>
                    </nav>
                </motion.div>
            </AnimatePresence>
        </header>
    )
}