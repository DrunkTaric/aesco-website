"use client"

export interface ProductProps {
    id: number
    name: string
    discription: string
    category: string
    image: string
    alt_images: string
}

export default function Product(props: ProductProps) {
    return(
        <div className="pt-20 pl-7">
            <div className="w-[17rem] h-[20rem] border-2 border-white rounded-xl bg-white">
                <div className="h-[15rem] overflow-hidden">
                    <img className="block w-[70%] h-[98%] pt-8 mr-auto ml-auto bg-center bg-cover" src={props.image} alt={props.name}/>
                </div>
                <h1 className="p-3 text-center text-black font-bold">{props.name}</h1>
            </div>
        </div>
    )
}