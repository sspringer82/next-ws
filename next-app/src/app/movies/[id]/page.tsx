import { NextPage } from "next";

type Props = {
    params: Promise<{ id: string }>
}

const MovieDetailPage: NextPage<Props> = async ({ params }) => {
    const { id } = await params;
    return <h1>Detail Page works for {id}</h1>
}
export default MovieDetailPage;