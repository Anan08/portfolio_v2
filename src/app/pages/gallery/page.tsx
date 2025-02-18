// import { motion } from "framer-motion"
"use client"
import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const sketches = [
    "/sketches/1.png",
    "/sketches/zsdfasf.png",
    "/sketches/ffa.png",
    "/sketches/head.png",
]


const illustrations = [
    "/illustrations/dr5ftlndscp.png",
    "/illustrations/refffd.png",
    "/illustrations/basdnnm1000.png",
    "/illustrations/asdad.png",
    
]

export default function Gallery() {
    const [sketchIndex, setSketchIndex] = useState(0)
    const [illustrationIndex, setIllustrationIndex] = useState(0)
    const changeSketches = (id:number) => {
        setSketchIndex(id)
    }
    const changeIllustration = (id:number) => {
        setIllustrationIndex(id)
    }
    return(
        <section className="flex justify-center items-center flex-col">
            <div id="sketch" className="font-extralight text-sm w-[2000px] items-center justify-center flex flex-col">
                <p className="items-start justify-items-start">Sketch</p>
                <AnimatePresence mode="wait">
                    <motion.div
                    key={sketchIndex}
                    initial={{opacity:0, x:-50}}
                    animate={{opacity:1, x:0}}
                    exit={{opacity:50, x:50}}
                    transition={{duration:0.5}}
                    whileInView={{opacity:1}}
                    className=""> 
                        <Image src={sketches[sketchIndex]} alt="Pictures" width={1000} height={1000}/>
                    </motion.div>
                </AnimatePresence>
                <div className="my-10 space-x-5">
                    {sketches.map((sketch, id) => (
                        <button 
                        key={id}
                        className="relative" 
                        onClick={() => changeSketches(id)}>
                            <Image src={sketch} alt="Pictures" width={200} height={200}/>   
                            <div className="absolute inset-0 opacity-0 hover:opacity-25 bg-gradient-to-t from-blue-300 via-gray-300 to-white"/>
                        </button> 
                    ))}
                </div>   
            </div>
            <div id="illustration" className="font-extralight text-sm w-[2000px] items-center justify-center flex flex-col">
                <p className="items-start justify-items-start">Illustration</p>
                <AnimatePresence mode="wait">
                    <motion.div
                    key={illustrationIndex}
                    initial={{opacity:0, x:-50}}
                    animate={{opacity:1, x:0}}
                    exit={{opacity:50, x:50}}
                    transition={{duration:0.5}}
                    whileInView={{opacity:1}}
                    className=""> 
                        <Image src={illustrations[illustrationIndex]} alt="Pictures" width={1000} height={1000}/>
                    </motion.div>
                </AnimatePresence>
                <div className="my-10 space-x-5">
                    {illustrations.map((illust, id) => (
                        <button 
                        key={id}
                        className="relative" 
                        onClick={() => changeIllustration(id)}>
                            <Image src={illust} alt="Pictures" width={200} height={200}/>   
                            <div className="absolute inset-0 opacity-0 hover:opacity-25 bg-gradient-to-t from-blue-300 via-gray-300 to-white"/>
                        </button> 
                    ))}
                </div>   
            </div>
      </section>
    )
}
