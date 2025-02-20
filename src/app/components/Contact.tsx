"use client"
import { motion } from "framer-motion"
export default function Contact() {
    return(
        <section id="contact" className="py-60">
            <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1}}
            className="text-xl items-center justify-center flex flex-col">
                <h1>CONTACT</h1>
                <motion.div
                initial={{
                    opacity:0,
                    scale:0
                }}
                whileInView={{
                    opacity:1,
                    scale:1
                }}
                transition={{
                    duration:1,
                }}

                >
                    <form method="post" className="py-10 flex flex-col items-center space-y-5 text-sm">
                        <input type="text" name="email" placeholder="Email" className="p-5 shadow-lg rounded-md"/>
                        <textarea name="request" placeholder="Request" className="p-5 h-32 shadow-lg rounded-md"/>
                        <motion.button
                        type="submit"
                        className="text-white bg-gray-600 p-3 rounded-xl"
                        initial={{
                            opacity:0,
                        }}
                        whileInView={{
                            scale:1,
                            opacity:1
                        }}
                        transition={{
                            duration:0.5
                        }}
                        whileHover={{
                            backgroundColor:"#ff8904",
                            scale:1.2
                        }}
                        whileTap={{
                            scale:0.8
                        }}>
                                Send
                        </motion.button>
                    </form>
                </motion.div>
            </motion.div>
        </section>
    )

}