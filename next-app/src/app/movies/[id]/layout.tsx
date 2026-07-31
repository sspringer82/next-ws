import Link from "next/link"
import { PropsWithChildren } from "react"

// type Props = {} & PropsWithChildren;

const DetailLayout: React.FC<PropsWithChildren> = ({ children }) => {
    return <>
        {children}
        <div>
            <Link href='/'>Zurück zur Liste</Link>
        </div>
    </>
}

export default DetailLayout;