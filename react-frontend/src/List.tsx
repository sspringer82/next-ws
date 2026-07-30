import { useEffect, useState, type ReactNode } from "react";
import ListItem from "./ListItem";

import { type Movie } from './Movie'

const moviesData: Movie[] = [
    { id: '1', title: 'The Shawshank Redemption', year: 1994 },
    { id: '2', title: 'The Godfather', year: 1972 },
    { id: '3', title: 'The Dark Knight', year: 2008 },
    { id: '4', title: 'Pulp Fiction', year: 1994 },
    { id: '5', title: 'The Lord of the Rings: The Return of the King', year: 2003 },
];

const List: React.FC = () => {
    // if (movies.length === 0) {
    //     return <div>Keine Daten vorhanden</div>
    // }

    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        setTimeout(() => {
            setMovies(moviesData)
        }, 1000);
    }, [])

    function deleteMovie(id: string): void {
        setMovies(prevMovies => prevMovies.filter(movie => movie.id !== id));
    }

    let tableContent: ReactNode = <tr><td colSpan={2}>Keine Daten vorhanden</td></tr>;

    if (movies.length > 0) {
        tableContent = movies.map(movie => <ListItem
            key={movie.id}
            movie={movie}
            onDelete={deleteMovie} />);
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