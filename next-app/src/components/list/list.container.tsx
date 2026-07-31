import { getAllMovies } from "@/api/movie.api";
import { Movie } from "./movie";
import List from "./list";

const ListContainer: React.FC = async () => {
    let movies: Movie[] = [];
    try {
        movies = await getAllMovies();
    } catch {
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