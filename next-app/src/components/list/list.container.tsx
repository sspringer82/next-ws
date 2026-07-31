import { getAllMovies } from "@/api/movie.api";
import { Movie } from "./movie";
import List from "./list";

type Props = {
    filter: string;
}

const ListContainer: React.FC<Props> = async ({ filter }) => {
    let movies: Movie[] = [];
    try {
        movies = (await getAllMovies())
            .filter(movie => movie.title.toLowerCase().includes(filter.toLowerCase()));
        // movies = await ky.get('http://localhost:3000/movies/api').json<Movie[]>();
    } catch (error) {
        console.log(error);
        return <div>whoops, an error occurred</div>
    }

    return (
        <div>
            <h1>Hello World</h1>
            <List movies={movies} />
        </div>
    );
}

export default ListContainer;