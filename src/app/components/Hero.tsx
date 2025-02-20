"use client"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"

export default function Hero() {
    
    const box = {
        width: 100,
        height: 100,
        backgroundColor: "#9911ff",
        borderRadius: 5,
    }
    
    return (
        <section className="flex flex-col items-center">
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
                        <nav className="hidden md:flex items-center justify-between bg-white bg-transparent sticky">
                        <ul id="navigator" className="flex space-x-10 text-sm font-extralight text-gray-500">
                            <li><Link href="#" className="hover:text-blue-500">This</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">Is</Link></li>
                            <li><Link href="#home" className="hover:text-blue-500">Home</Link></li>
                        </ul>
                        </nav>
                    </motion.div>
                </AnimatePresence>
            </header>
            
            <div className="py-40 flex justify-between space-x-10" id="home">
                <motion.div
                    initial={{opacity:0, scale:0}}
                    animate={{opacity:1, scale:1}}
                    transition={{
                        duration:0.5,
                        type:"spring",
                        visualDuration:0.4,
                        bounce:0.5
                    }}
                    whileHover={{
                        scale:1.2,
                        backgroundColor:"#ff8904"
                    }}
                    whileTap={{scale:0.8}}
                    style={box}
                >

                </motion.div>
                <motion.ul>
                    <motion.li 
                    animate={{x:0, opacity:1}}
                    initial={{x:-50, opacity:0.5}}
                    transition={{
                        duration:0.5,
                        type:"spring",
                        bounce:0.5
                    }}
                    whileHover={{
                        scale:1.2
                    }}
                    
                    >
                        <Link href="#home" className="text-2xl">Home</Link>
                    </motion.li>
                    <motion.li 
                    animate={{x:0, opacity:1}}
                    initial={{x:-50, opacity:0.5}}
                    transition={{
                        duration:1,
                        type:"spring",
                        bounce:0.5
                    }}
                    whileHover={{
                        scale:1.2
                    }}
                    
                    >
                        <Link href="#about" className="text-2xl">About</Link>
                    </motion.li>
                    <motion.li 
                    animate={{x:0, opacity:1}}
                    initial={{x:-50, opacity:0.5}}
                    transition={{
                        duration:1.5,
                        type:"spring",
                        bounce:0.5
                    }}
                    whileHover={{
                        scale:1.2
                    }}
                    
                    >
                        <Link href="#contact" className="text-2xl">Contact</Link>
                    </motion.li>
                </motion.ul>
            </div>
        </section>
    )
}