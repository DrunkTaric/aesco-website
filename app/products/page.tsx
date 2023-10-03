"use client"

import Product, { ProductProps } from "./components/product";
import FilterItem from "./components/filter";
import Input from "./components/input";
import Line from "./components/line";
import Box from "./components/box";
import { useEffect, useState } from "react";

interface CategoryProps {
    name: string
    state: boolean
}

interface FilterProps {
    name: string
    categories: CategoryProps[]
}

export default function Products() {

    const array = [1, 2, 3, 4, 5, 6, 7, 8]

    const [InitialProducts, setInitialProducts] = useState<ProductProps[]>([])
    
    const [ProductsLoading, setProductsLoading] = useState<boolean>(true)
    const [FiltersLoading, setFiltersLoading] = useState<boolean>(true)

    const [Products, setProducts] = useState<ProductProps[]>([])
    const [Filters, setFilters] = useState<FilterProps[]>([])


    function getIndexOfParentFilter(name: string) {
        for (let x = 0; x < Filters.length; x++) {
            if (name == Filters[x].name) {
                return x
            }
        }
        return 0
    }

    function getIndexOfChildFilter(parent: number, name: string) {
        let list = Filters[parent].categories
        for (let x = 0; x < list.length; x++) {
            if (name == list[x].name) {
                return x
            }
        }
        return 0
    }

    function ActiveFilters() {
        let table: string[] = []
        for (let category of Filters) {
            for (let filter of category.categories) {
                if (filter.state == true) {
                    table.push(filter.name)
                }
            }
        }
        return table
    }

    function AppyFilters() {
        let tmp_products: ProductProps[] = []
        let active_filters = ActiveFilters()
        for (let product of Products) {
            let valid = true
            for (let filter of active_filters ) {
                if (!product.category.includes(filter)) {
                    valid = false
                }
            }
            if (valid) {tmp_products.push(product)}
        }
        setInitialProducts(tmp_products)
    }

    function handleFilter(data: {name: string, category: string, state: Function}) {
        console.info("revceived filter state from component with prams: ", data)
        let tmp_data: FilterProps[] = Filters
        let parent = getIndexOfParentFilter(data.category)
        let index = getIndexOfChildFilter(parent, data.name)
        tmp_data[parent].categories[index].state = !(tmp_data[parent].categories[index].state)
        setFilters(tmp_data)
        tmp_data[parent].categories[index].state?data.state("green"): data.state("white")
        console.info("modified the Filterlist with prams: ", data)
        AppyFilters()
    }

    function handleSearch(input: string) {
        if (input == "") {
            return AppyFilters()
        }
        let tmp_products: ProductProps[] = []
        for (let product of InitialProducts) {
            if (product.name.includes(input)) {
                tmp_products.push(product)
            }
        }
        setInitialProducts(tmp_products)
    }

    useEffect(() => {
        async function getProducts() {
            setProductsLoading(true) 
            const response = await fetch(`${process.env.SERVER}/products`, {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Credentials": "true",
                    "Access-Control-Allow-Methods": "GET,DELETE,PATCH,POST,PUT"
                },
            })
            const data = await response.json()
            setInitialProducts(data)
            setProducts(data)
            setProductsLoading(false)  
        }

        async function getFilter() {
            setFiltersLoading(true) 
            const response = await fetch(`${process.env.SERVER}/families`, {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Credentials": "true",
                    "Access-Control-Allow-Methods": "GET,DELETE,PATCH,POST,PUT"
                },
            })
            const data: FilterProps[] = await response.json()

            data.map((val) => {
                val.categories = JSON.parse((val.categories as any))
            })

            setFilters(data)
            setFiltersLoading(false)
        }

        getFilter()

        getProducts()

    }, [])

    return(
        <main className="p-11 bg-white w-screen h-screen">
            <div className="flex w-full h-full bg-black border rounded-3xl">
                <div>
                    { 
                        FiltersLoading? 
                        <div className="block p-5 h-full w-96 border-r-8 border-white overflow-auto font-bold">
                            <div className="animate-pulse">
                                <div className="block w-24 ml-auto mr-auto pt-7 pb-7">
                                    <Box size="Small"></Box>
                                </div>
                                <div className="flex w-full space-x-4">
                                    <div className="w-24 mt-auto mb-auto">
                                        <Box size="Small"></Box>
                                    </div>
                                    <div className="w-full pl-4">
                                        <Box size="Medium"></Box>
                                    </div>
                                </div>
                                <div className="pt-3">
                                    {(array).map((value) => {
                                        return (
                                            <div key={value}>
                                                <div className="pt-7">
                                                    <div className="w-28">
                                                        <Box size="Small"></Box>
                                                    </div>
                                                    <Line></Line>
                                                </div>
                                                <div className="flex flex-wrap">
                                                    {(array).map(((val) => {
                                                        return (
                                                            <div key={val} className="w-20 p-2">
                                                                <Box size="Rounded"></Box>
                                                            </div>
                                                        )
                                                    }))}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>: 
                        <div className="block p-5 h-full w-96 border-r-8 border-white overflow-auto font-bold">
                            <h1 className="pt-7 pb-7 text-center text-xl">Filter</h1>
                            <Input callback={handleSearch}></Input>
                            <div>
                            {(Filters).map(function(row: any) {
                               return (
                                    <div key={row.name}>
                                        <div className="pt-7">
                                            <h1>{row.name}</h1>
                                            <Line></Line>
                                        </div>
                                        <div className="flex flex-wrap">
                                            {(row.categories).map((function(value: {name: string, state: boolean}) {
                                                return <FilterItem key={Math.random()} item={{name: value.name, category: row.name}} state={value.state} callback={handleFilter}></FilterItem>
                                            }))}
                                        </div>
                                    </div>
                                   ) 
                                })}
                            </div>
                        </div>
                        
                    }
                </div>
                {
                    ProductsLoading? 
                    <div className="block p-7 pt-0 pl-20 pr-20 overflow-auto">
                        <div className="flex flex-wrap mr-auto ml-auto animate-pulse">
                            {(array).map((value) => {
                                return (
                                    <div key={value} className="pt-20 pl-7">
                                        <div className="w-[17rem] h-[20rem] border-2 border-white rounded-xl bg-white">
                                            <div className="pt-2 h-[15rem] overflow-hidden">
                                                <Box size="Image"></Box>
                                            </div>
                                            <div className="block w-44 mr-auto ml-auto">
                                                <Box size="Small"></Box>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>: 
                    <div className="block p-7 pt-0 pl-20 pr-20 overflow-auto">
                        <div className="flex flex-wrap mr-auto ml-auto">
                            {(InitialProducts).map((value: ProductProps) => {
                                return <Product key={`${value.id}`} id={value.id} name={value.name} discription={value.discription} category={value.category} image={value.image} alt_images={value.alt_images}></Product>
                            })}
                        </div>
                    </div>
                }
            </div>
        </main>
    )
}