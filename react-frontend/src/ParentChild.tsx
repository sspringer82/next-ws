import { useState } from "react";

const ParentChild: React.FC = () => {
    return <div>
        <h1>ParentChild Works</h1>
        <Parent />
    </div>
}

export default ParentChild;


const Parent: React.FC = () => {

    const [state, setState] = useState('Hallo Welt');

    return (
        <div>
            <h1>
                Parent
            </h1>
            <Child data={state} />
        </div>
    );
}

type Props = {
    data: string;
}

const Child: React.FC<Props> = ({ data }) => {
    return (
        <div>
            <h1>Child</h1>
            <article>{data}</article>
        </div>
    );
}