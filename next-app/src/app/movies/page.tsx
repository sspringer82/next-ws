import ListContainer from "@/components/list/list.container";
import { NextPage } from "next";

// With search params:
// type Props = {
//     searchParams: Promise<{ filter: string }>
// }

// const MoviesPage: NextPage<Props> = async ({ searchParams }) => {
//     const { filter } = await searchParams;
//     return <ListContainer filter={filter} />
// }

const MoviesPage: NextPage = async () => {
    return <ListContainer filter={""} />
}

export default MoviesPage;