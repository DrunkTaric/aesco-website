"use client"

import { useEffect, useState } from "react"


interface ItemData {
    name: string
    category: string
}

export interface FilterItemProps {
    item: ItemData
    state: boolean
    callback: Function
}

export default function FilterItem(props: FilterItemProps) {

    const [Backgound, setBackgound] = useState<string>("transparent")

    function HandleButton() {
        console.info("sending filter state to parent with prams: ", {
            name: props.item.name,
            category: props.item.category,
        })
        props.callback({
            name: props.item.name,
            state: setBackgound,
            category: props.item.category,
        })
    }

    useEffect(() => {
        setBackgound(props.state? "green": "white")
    }, [])

    return(
        <div key={`${props.item.category}-${props.item.name}`} className="p-[2px] pt-1 pb-0">
            <button
                key={`${props.item.name}-${props.item.category}`} 
                className={"w-fit h-auto p-[2px] pl-3 pr-3 border-2 rounded-2xl"} 
                style={{borderColor: Backgound}} 
                onClick={HandleButton}
            >
                {props.item.name}
            </button>
        </div>
    )
}