import { useState, useEffect } from "react";

const initialMovie = {
    id: 1,
    title: 'Die Schlümpfe',
    year: 1956
}

type Movie = {
    id: number,
    title: string,
    year: number
}

const StateLifecycle: React.FC = () => {
    console.log('RENDER');

    const [movie, setMovie] = useState<Movie>(initialMovie);
    let description = 'toller film über kleine blaue kreaturen'

    // useEffect(() => {
    //     console.log('use effect');
    // })

    useEffect(() => {
        setTimeout(() => {
            // überschreiben
            // setMovie({ ...movie, year: 2026 });

            // modifizieren
            setMovie((prevMovie) => {
                const clone = structuredClone(prevMovie);
                clone.year = 2026;
                return clone;
            })

        }, 1_000);
    }, [])


    return <div>
        <h1>{movie.title}</h1>
        <div>year: {movie.year}</div>
        <div>{description}</div>
    </div>

}

export default StateLifecycle;