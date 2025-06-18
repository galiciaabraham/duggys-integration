import { neon } from '@neondatabase/serverless'; 
import { NextResponse } from 'next/server';


const sql = neon(`${process.env.DATABASE_URL}`);

export async function GET(request: Request) {
    const {searchParams} = new URL(request.url)
    const category = searchParams.get('category')

    if (!category) {
        return NextResponse.json({error: 'Category is required'}, {status: 400})
    }

    try {
        const rows = await sql `SELECT id, name, category, description, price FROM menu_item WHERE cagetory =[${category}];`

        return NextResponse.json(rows);
    } catch(error) {
        console.log('Error retreiving the menu', error);
        return NextResponse.json({error: 'Error in database connection or fetch'}, {status: 500})
    }

}
