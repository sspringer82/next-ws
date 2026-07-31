import { getAllMovies } from "@/api/movie.api";
import { NextResponse as Response } from "next/server";

export async function GET(request: Request) {
    const allMovies = await getAllMovies();
    return Response.json(allMovies);
}

