"use client"

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
            SetCurrentImage(images[(images.indexOf(CurrentImage) == images.length - 1) ? 0 : images.indexOf(CurrentImage) + 1])
        }, 7000)
    })

    return (
        <header>
            <div id="header-menu-padding" className="absolute flex p-14 h-48">
                <div id="header-menu-icon" className="flex h-[100%]  w-fit pr-10">
                    <img src="https://aesco.sa.com/storage/Logo.png" alt="logo"></img>
                </div>
                <div className="flex space-x-10 font-sans font-bold text-2xl text-gray-300 text-opacity-60 mt-auto mb-auto">
                    <a href="/" className="hover:text-white">Home</a>
                    <a href="/products" className="hover:text-white">Products</a>
                    <a href="/" className="hover:text-white">About</a>
                </div>
            </div>
            <div className="h-[850px] w-full bg-center bg-cover z-[-1]" id="header-image" style={{backgroundImage: CurrentImage}}/>
        </header>
    )
}