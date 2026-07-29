import type { Movie } from "./Movie";

type Props = {
    movie: Movie;
}

const ListItem: React.FC<Props> = ({ movie }) => {
    return <tr>
        <td>{movie.title}</td>
        <td>{movie.year}</td>
    </tr>
}

export default ListItem;