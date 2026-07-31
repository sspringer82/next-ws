import { Movie } from "@/components/list/movie";
import ky from 'ky'

export async function getAllMovies(): Promise<Movie[]> {
    // const response = await fetch('http://localhost:3001/movies');
    // if (!response.ok) {
    //     throw new Error('Response was not ok');
    // }
    // return response.json();

    return ky('http://localhost:3001/movies').json();
}

export async function getMovieById(id: string): Promise<Movie> {
    return ky(`http://localhost:3001/movies/${id}`).json();
}

export async function deleteMovie(id: string): Promise<void> {
    await ky.delete(`http://localhost:3001/movies/${id}`);
}