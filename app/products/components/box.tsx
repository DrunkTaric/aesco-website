"use client"

type sizes = "Small" | "Medium" | "Big" | "Rounded" | "Image"

export default function box(props: {size: sizes}) {
    if (props.size != "Rounded" && props.size != "Image") {
        return(
            <div className={(props.size == "Medium"? "pt-4 pb-4": props.size == "Small"? "pt-3 pb-3": "pt-6 pb-6") + " bg-gray-300 border rounded-md border-transparent"}>
            </div>
        )
    }

    if (props.size == "Rounded") {
        return(
            <div className={"pt-2 pb-2 bg-gray-300 border rounded-full border-transparent"}>
            </div>
        )
    }

    return(
        <div className={"pt-2 pb-2 w-52 h-52 block ml-auto mr-auto bg-gray-300 border rounded-full border-transparent"}>
        </div>
    )
} 