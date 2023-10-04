"use client"

import { useState } from "react";
import { animated, useSpring } from "react-spring";

const Data = [
    {
        image: "http://aesco.com.sa/storage/families/h3KhGMsKAGJRbR30xKJoGMnKmDoK8cMnvPWELtGG.jpeg",
        iabel: "Down Lights",
        disription: `Down Lights are one of the most common types of
        lighting found in homes, offices, show rooms, stores,
        museums, etc…, with simple and elegant design.`,
    },
    {
        image: "http://aesco.com.sa/storage/families/bgJAIP73hWMHIikOHsFeCpLQU4M3oUQyn2Na0zgi.jpeg",
        iabel: "Panel Light",
        disription: `Panel light is a widely used economic
        indoor fixture, where the light pass
        through the high transmittance light guide
        plate to form a uniform plane luminous effect,
        With illumination uniformity, comfortable and bright light, eye
        fatigue effectively relieved.
        The panel comes with two options for ingress protection IP20/54 to
        meet all indoor requirements.`,
    },
    {
        image: "https://blog.architizer.com/wp-content/uploads/attachments_article_big_tec_slide_lamparas-de-techo-big-slide-06-usa-1024x721-1.jpg",
        iabel: "Surface Mounted",
        disription: `Our collection of surface mount vary in different shapes and
        types, to suite different architectural decoration, from a
        circular and square shape, with different methods of
        installation with a simple and easy installation mechanism
        without having to change the decor of the place, and also it
        comes with different ingress protection grades to meat the
        requarments.`,
    }
]

export default function ShowCase() {

    const [CurrentData, setCurrentData] = useState(Data[0])
    const [Visable, setVisable] = useState<boolean>(true)

    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        loop: true,
        delay: 300,
        reset: true,
        reverse: Visable,
        onRest(result, ctrl, item) {
            setVisable(!Visable)
            if (result.value.opacity == 0){
                setCurrentData(Data[(Data.indexOf(CurrentData) == Data.length - 1)? 0: Data.indexOf(CurrentData) + 1])
            }
        }
    })

    return(
        <animated.div style={props}>
            <div className="flex pt-11 h-[700px]">
                <div className="fadeOut" style={{display: "flex", padding: `1.25rem`}}>
                    <img className="bg-cover bg-center w-[50%] min-h-[500px]" alt={"Image"} src={CurrentData.image}/>
                    <div className="pl-5 w-[50%]">
                        <h1 className="pb-11 font-serif text-8xl">{CurrentData.iabel}</h1> 
                        <p className="text-gray-400 break-keep space-x-3">{CurrentData.disription}</p>
                    </div> 
                </div>
            </div>
        </animated.div>
    )
}