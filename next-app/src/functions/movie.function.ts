"use server";

import { deleteMovie as apiDeleteMovie } from "@/api/movie.api";
import { revalidatePath } from "next/cache";

export async function deleteMovie(id: string): Promise<void> {
    await apiDeleteMovie(id);
    revalidatePath("/movies");
}