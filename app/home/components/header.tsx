"use client"

import Image from "next/image";
import { useEffect, useState } from "react"

const images = [
    `linear-gradient(rgba(0, 0, 0, 0.308), black), url("http://aesco.sa.com/storage/slider_images/n5wVf7fhTGqjg48eidJCokwbB9ydccHTLeuN5BuW.jpeg")`,
    `linear-gradient(rgba(0, 0, 0, 0.308), black), url("http://aesco.sa.com/storage/slider_images/6Ek5kvhuC1XRhJWF5FiUT6oHrKjsuOiEDw8k5Zvf.jpeg")`,
    `linear-gradient(rgba(0, 0, 0, 0.308), black), url('http://aesco.sa.com/storage/slider_images/s45lTKsvOsRdL4VQoJpQ7g1Nt0dx9V7GpfU9AM73.jpeg')`
]

export default function Main() {

    const [CurrentImage, SetCurrentImage] = useState(images[0]) 

    useEffect(() => {
        setTimeout(() => {
            SetCurrentImage(images[(images.indexOf(CurrentImage) == images.length - 1)? 0: images.indexOf(CurrentImage) + 1])
        }, 7000)
    })

    return(
        <div className="bg-cover bg-center h-[850px]" style={{backgroundImage: CurrentImage}}>
            <div id="header-menu">
                <div id="header-menu-padding" className="flex p-14">
                    <div id="header-menu-icon" className="flex h-36 w-fit">
                        <img src="https://aesco.sa.com/storage/Logo.png" alt="logo"></img>
                    </div>
                    <div className="w-2/3">
                        <div className="flex space-x-10 font-sans font-bold text-2xl text-gray-300 text-opacity-60">
                            <a href="/" className="h-3 hover:text-white">Home</a>
                            <a href="/products" className="h-3 hover:text-white">Products</a>
                            <a href="/" className="h-3 hover:text-white">Solutions</a>
                            <a href="/" className="h-3 hover:text-white">Contact</a>
                            <a href="/" className="h-3 hover:text-white">About</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}