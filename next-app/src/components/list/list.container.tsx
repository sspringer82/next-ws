import { getAllMovies } from "@/api/movie.api";
import { Movie } from "./movie";
import List from "./list";
import ky from "ky";

const ListContainer: React.FC = async () => {
    let movies: Movie[] = [];
    try {
        // movies = await getAllMovies();
        movies = await ky.get('http://localhost:3000/movies/api').json<Movie[]>();
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