import { Movie } from "@/components/list/movie";
import List from "@/components/list/list";
import { getAllMovies } from "@/api/movie.api";

export default async function Home() {

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
