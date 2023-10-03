import Product from "./micro-components/product";

export default function Products() {
    return(
        <div className="flex pt-11 w-auto h-auto">
            <div className="flex ml-auto mr-auto p-9 pl-20 pr-20 space-x-3 border rounded-3xl bg-white">
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </div>
        </div>
    )
}