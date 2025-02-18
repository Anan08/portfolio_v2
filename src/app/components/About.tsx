"use client"
import Link from "next/link"
import { motion } from "framer-motion"
export default function About() {
    const getAge = () => {
        const date = new Date();
        const birthDate = new Date('2003-06-08');
        return date.getFullYear() - birthDate.getFullYear();

    }
    return (
        <section id="about" className="py-60">
            <motion.div 
            className="text-xl w-auto"
            initial={{ opacity: 0 }}
            transition={{
                duration:1
            }}
            whileInView={{
                opacity: 1,
            }}>
                <h1 className="
                text-wrap">
                    HELLO, <br />
                    MY NAME IS ANANDA PUTRA ANDIKA, AS FOR MY PEN NAME IS OSSEE. <br />
                    IM A {getAge()} YEARS OLD PROGRAMMER, AND ALSO ACTING AS AN INDIE ILLUSTRATOR. <br />
                    YOU CAN CHECK MY WORK AT THE <span>
                        <motion.button
                        initial={{scale:1}}
                        whileHover={{
                            scale:1.2, 
                        }}>
                            <Link href="/pages/gallery" className="text-blue-500 hover:text-orange-400">GALLERY.</Link>
                        </motion.button>
                        </span> <br />
                    AND ALSO MY CODE PROJECT AT THE <span>
                    <motion.button
                        initial={{scale:1}}
                        whileHover={{
                            scale:1.2, 
                        }}>
                            <Link href="/pages/projects" className="text-blue-500 hover:text-orange-400">PROJECTS.</Link>
                        </motion.button>
                        </span> <br />
                </h1>
            </motion.div>
        </section>
    )
}