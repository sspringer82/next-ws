import type { Movie } from "./Movie";

type Props = {
    movie: Movie;
    onDelete: (id: string) => void;
}

const ListItem: React.FC<Props> = ({ movie, onDelete }) => {
    function handleDelete() {
        if (confirm(movie.id + ' wirklich löschen?')) {
            onDelete(movie.id)
        }
    }
    return <tr>
        <td>{movie.title}</td>
        <td>{movie.year}</td>
        <td><button onClick={handleDelete}>🚮</button></td>
    </tr>
}

export default ListItem;