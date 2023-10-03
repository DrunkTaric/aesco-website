import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
    const prisma = new PrismaClient()
    await prisma.$connect()
    const products = await prisma.products_new.findMany()
    products.map((value) => {
        value.image = `http://aesco.com.sa/storage/${value.image}`
    })
    await prisma.$disconnect()
    return NextResponse.json(products)
}