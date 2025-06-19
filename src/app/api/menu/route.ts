import { neon } from '@neondatabase/serverless'; 
import { NextResponse } from 'next/server';
import { config } from 'dotenv';

config();
const sql = neon(`${process.env.DATABASE_URL}`);

export async function GET(request: Request) {
    const {searchParams} = new URL(request.url)
    const category = searchParams.get('category')
    console.log(category);
    if (!category) {
        return NextResponse.json({error: 'Category is required'}, {status: 400})
    }

    try {
        const result = await sql `SELECT id, name, category, description, price FROM menu_items WHERE category =${category};`;
        return NextResponse.json(result);
    } catch(error) {
        console.log('Error retreiving the menu', error);
        return NextResponse.json({error: 'Error in database connection or fetch'}, {status: 500})
    }

}
