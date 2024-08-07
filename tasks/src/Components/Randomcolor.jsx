import React, { useState } from 'react'
import { motion } from 'framer-motion';

export default function Randomcolor() {
    let [hxa, setHxa] = useState('#000000')
    let [rgb, setRgba] = useState('rgb(0, 0, 0)')
    let [typOfColor, settypOfColor] = useState('hexa')


    function generateRandom(length) {
        return Math.round(Math.random() * length )
    }

    function handleHexaRandomColor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[generateRandom(16)]
        }
        setHxa(hexColor)
    }
    function handleRgbRandomColor() {
        let r = generateRandom(255)
        let g = generateRandom(255)
        let b = generateRandom(255)

        let color = `rgb(${r},${g},${b})`
        setRgba(color)

    }


    return (
        <div className='h-screen text-center py-4' style={{ backgroundColor: typOfColor == 'hexa' ? hxa : rgb }}>Randomcolor
            <h1 className='text-white'>{typOfColor == 'hexa' ? hxa : rgb}</h1>
            <motion.button whileHover={{ scale: [null, 1.5, 1.4] }}
                transition={{ duration: 0.3 }} className='bg-cyan-400 my-3 text-white' onClick={() => settypOfColor('hexa')}>hexa</motion.button>
                <br />
            <motion.button whileHover={{ scale: [null, 1.5, 1.4] }}
                transition={{ duration: 0.3 }} className='bg-cyan-400 my-3 text-white' onClick={() => settypOfColor('rgb')}>rgb</motion.button>
                <br />
            <motion.button whileHover={{ scale: [null, 1.5, 1.4] }}
                transition={{ duration: 0.3 }} className='bg-cyan-400 my-3 text-white' onClick={typOfColor == 'hexa' ? handleHexaRandomColor : handleRgbRandomColor}>generate of color</motion.button>
            <h2></h2>
        </div>
    )
}
