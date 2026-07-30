import Link from "next/link";
import type { Movie } from "./movie";

type Props = {
    movie: Movie;
}

const ListItem: React.FC<Props> = ({ movie }) => {
    return <tr>
        <td>{movie.title}</td>
        <td>{movie.year}</td>
        <td>
            <Link href={`/movies/${movie.id}`}>Details</Link>
        </td>
    </tr>
}

export default ListItem;