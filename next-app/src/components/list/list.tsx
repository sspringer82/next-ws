import { type ReactNode } from "react";
import ListItem from "./list-item";
import './list.css'

import { type Movie } from './movie'
import { IxInput } from "@siemens/ix-react";
import Filter from "./filter";

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
        <div className="movieList">
            {/* <Filter /> */}
            <table>
                <thead style={{ backgroundColor: '#FFFFCC', color: 'black', fontWeight: 'bolder' }}>
                    <tr >
                        <th>Title</th>
                        <th>Year</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
        </div>
    );
}

export default List;