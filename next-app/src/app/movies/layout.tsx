import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const MoviesLayout: React.FC<Props> = ({ children }) => {
    return <div>
        <header>Header</header>
        {children}
    </div>
}

export default MoviesLayout;
