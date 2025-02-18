"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
// import Image from "next/image"

const contents = [
    {
        name: "Instagram",
        icon : "/icons/instagram.png",
        link : "https://www.instagram.com/ossee_s/"
    },
    {
        name: "Github",
        icon : "/icons/github.png",
        link : "https://github.com/Anan08"
    },
    {
        name: "Facebook",
        icon : "/icons/facebook.png",
        link : "https://www.facebook.com/profile.php?id=100024187873976"
    },
    {
        name: "Gmail",
        icon : "/icons/gmail.png",
        link : "mailto:anandapgt@gmail.com"
    },

]
export default function Footer() {
    return (
        <footer>
            <nav className="fixed bottom-2 left-1/2 z-10 w-auto -translate-x-1/2">
                <AnimatePresence>
                    <ul className="flex items-center space-x-5 ">
                        {contents.map((item, index) => (
                            <motion.div
                            key={index}
                            initial={{opacity:0, y:-50}}
                            animate={{opacity:1, y:0}}
                            exit={{opacity:50, y:50}}
                            transition={{
                                duration:0.5,
                                bounce:0.5,
                                type:"spring",
                                visualDuration:0.5
                            }}>
                                <li key={index}>
                                    <Link href={item.link}  target="_blank">
                                        <Image src={item.icon} height={20} width={20} alt="links" />
                                    </Link>
                                </li>
                            </motion.div>
                        ))}
                    </ul>
                </AnimatePresence>
            </nav>
        </footer>
    )
}