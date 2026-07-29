import { useEffect, useState, type ReactNode } from "react";

type Movie = {
    id: string;
    title: string;
    year: number;
};

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
        const ival = setInterval(() => {
            console.log('do horrible things')
        }, 1000);

        return () => {
            clearInterval(ival);
            console.log('UNMOUNT!!!')
        }
    }, [])

    useEffect(() => {
        console.log('render + update');
    })

    let tableContent: ReactNode = <tr><td colSpan={2}>Keine Daten vorhanden</td></tr>;

    if (movies.length > 0) {
        tableContent = movies.map(movie => <tr key={movie.id}>
            <td>{movie.title}</td>
            <td>{movie.year}</td>
        </tr>);
    }

    return <table>
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
}

export default List;