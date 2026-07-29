import { useState } from "react";

const Events: React.FC = () => {
    console.log('RENDER')
    const [toggle, setToggle] = useState(false);
    const [click, setClick] = useState(false);

    const [color, setColor] = useState({
        r: 0,
        g: 0,
        b: 0
    })

    function handleMouseMove() {
        setToggle(!toggle);
        console.log('you TOUCHED the MOUSE!')
        setColor((prevColor) => {
            return {
                r: prevColor.r + 1,
                g: prevColor.g + 0,
                b: prevColor.b + 1
            }
        })
    }

    function handleClick() {
        setToggle(!toggle);
    }

    function handleClick2() {
        setClick(!click);
    }

    return <>
        <div>{toggle ? '🟢' : '🔴'}</div>
        <div>{click ? '🔵' : '🟡'}</div>
        < button onClick={handleClick}>click me</button >
        <div style={{ height: 400, width: 400, backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})` }}
            onMouseMove={handleMouseMove}
            onClick={handleClick2}
            onKeyDown={handleClick}
            contentEditable={true}
        >

        </div>
    </>
}

export default Events;