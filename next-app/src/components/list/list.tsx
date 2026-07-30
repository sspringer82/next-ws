import { type ReactNode } from "react";
import ListItem from "./list-item";

import { type Movie } from './movie'

const movies: Movie[] = [
    { id: '1', title: 'The Shawshank Redemption', year: 1994 },
    { id: '2', title: 'The Godfather', year: 1972 },
    { id: '3', title: 'The Dark Knight', year: 2008 },
    { id: '4', title: 'Pulp Fiction', year: 1994 },
    { id: '5', title: 'The Lord of the Rings: The Return of the King', year: 2003 },
];

const List: React.FC = () => {

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