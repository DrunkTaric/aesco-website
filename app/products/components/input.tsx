"use client"

import { useState } from "react"

interface InputProps {
    callback: Function
}

export default function Input(props: InputProps) {
    const [Input, setInput] = useState<string>("")

    return(
        <div className="flex space-x-4">
            <h1 className="mt-auto mb-auto font-bold">Search</h1>
            <input className="outline-none p-2 pl-4 pr-4 bg-transparent border-2 rounded-lg" placeholder="Product Name" 
                onKeyUp={(e) => {
                    if (e.key == "Enter") {
                        e.preventDefault()
                        props.callback(Input)
                    }
                }} 
                onChange={(e) => {
                    e.preventDefault()
                    setInput((e.target as HTMLInputElement).value
                )}}
            />
        </div>
    )
}