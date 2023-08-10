import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/utils/mongo";



export async function GET(req: NextRequest) {
    const { db } = await connectToDatabase();
    const data = await db.collection('users').find({}).toArray();

    console.log(data);

    return NextResponse.json({ status: "Success", });
}


export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.json();
    let count = 100;
    let sample = data.usersData[0];
    let myData: any = [];

    for (let i = 0; i < 500; i++) {
        myData.push({
            username: sample.username + count,
            email: sample.email + count,
            phone: sample.phone + count,
            linkedin: sample.linkedin + count,
            company: sample.company + count,
        });
        count++;
    }


    try {
        const { db } = await connectToDatabase();
        await db.collection('users').insertMany(myData);

        return NextResponse.json({ status: "Success" });
    } catch (error) {
        console.error('Error saving user:', error);
        return NextResponse.json({ message: 'Internal Server Error' });
    }
}
