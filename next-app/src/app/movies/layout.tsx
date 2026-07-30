import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const MoviesLayout: React.FC<Props> = ({ children }) => {
    return <div>
        <header style={{ width: '100%', height: '200px', backgroundColor: 'hotpink' }}>Header</header>
        {children}
    </div>
}

export default MoviesLayout;
