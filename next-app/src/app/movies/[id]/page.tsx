import { getMovieById } from "@/api/movie.api";
import { Movie } from "@/components/list/movie";
import { NextPage } from "next";

type Props = {
    params: Promise<{ id: string }>
}

const MovieDetailPage: NextPage<Props> = async ({ params }) => {
    const { id } = await params;

    let movie: Movie | null = null;
    try {
        movie = await getMovieById(id);

    } catch {
        return <div>An error occurred</div>
    }

    return <div>
        <h1>{movie.title}</h1>
        <article>({movie.year})</article>
    </div>
}
export default MovieDetailPage;

export async function generateStaticParams() {
    return [
        { id: '6a7b8c' }
    ]
}
