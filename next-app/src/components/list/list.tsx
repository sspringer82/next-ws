import { type ReactNode } from "react";
import ListItem from "./list-item";

import { type Movie } from './movie'

type Props = {
    movies: Movie[];
}

const List: React.FC<Props> = ({ movies }) => {

    let tableContent: ReactNode = <tr><td colSpan={2}>Keine Daten vorhanden</td></tr>;

    if (movies.length > 0) {
        tableContent = movies.map(movie => <ListItem
            key={movie.id}
            movie={movie} />);
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
        </>
    );
}

export default List;