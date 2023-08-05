import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/utils/mongo";



export async function GET(req: NextRequest) {
    const { db } = await connectToDatabase();
    const data = await db.collection('users').find({}).toArray();

    console.log(data);

    return NextResponse.json({ status: "Success", });
}


export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.json()

    try {
        const { db } = await connectToDatabase();
        const collection = await db.collection('users');
        const result = await collection.insertOne(data);
        return NextResponse.json({ status: "Success", result });
    } catch (error) {
        console.error('Error saving user:', error);
        return NextResponse.json({ message: 'Internal Server Error' });
    }
}
