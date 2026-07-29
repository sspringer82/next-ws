import { useState } from "react";
import List from "./List";
import StateLifecycle from "./StateLifecycle";
const App: React.FC = () => {
    const [state, setState] = useState(true)

    return <div>
        <button onClick={() => setState(false)}>hide</button>
        {state && <List />}
    </div>
}
export default App;