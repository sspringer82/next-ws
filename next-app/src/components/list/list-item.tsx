"use client"

import Link from "next/link";
import type { Movie } from "./movie";
import clsx from "clsx";

import style from './list-item.module.css'
import Button from "../Button";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";


type Props = {
    movie: Movie;
}

const TitleCell: React.FC<PropsWithChildren> = ({ children }) => {
    return <td className='bg-gray-100 text-black font-bold underline text-lg'>{children}</td>
}


const ListItem: React.FC<Props> = ({ movie }) => {
    const router = useRouter();
    return <tr className={clsx({ new: movie.year >= 2000 })}>
        <TitleCell>{movie.title}</TitleCell>
        <td>{movie.year}</td>
        <td>
            <Button onClick={() => router.replace(`/movies/${movie.id}`)}>Details</Button>
            {/* <Link className={style.link} href={`/movies/${movie.id}`}>Details</Link> */}
        </td>
    </tr>
}

export default ListItem;