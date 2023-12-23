import axios from "axios";
import { NextResponse } from "next/server";

const API_URL='https://jsonplaceholder.typicode.com/users';

/* export async function GET_fetch(){

    const res = await fetch(API_URL)

    const todos =await res.json()

    return NextResponse.json(todos)
} */

export async function GET(){

    const response = await axios.get(`${API_URL}`);
    return NextResponse.json(response.data);
}