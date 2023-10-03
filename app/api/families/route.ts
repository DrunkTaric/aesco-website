import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

function Catigories(data: string[]) {
    let table = []
    for (let x of data) {
        table.push({
            name: x,
            state: false
        })
    }
    return table
}

export async function GET() {
    const prisma = new PrismaClient()
    await prisma.$connect()
    const families = await prisma.filters_new.findMany()
    families.map((value) => {
        (value.categories as any) = Catigories(JSON.parse(value.categories))
    })
    await prisma.$disconnect()
    return NextResponse.json(families)
}