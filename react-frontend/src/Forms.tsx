import { useEffect, useRef, useState, type ChangeEvent } from "react";

const Forms: React.FC = () => {
    const [hide, setHide] = useState(false);
    const [uncontrolledValue, setUncontrolledValue] = useState('');

    console.log('RENDER')

    const inputRef = useRef<HTMLInputElement>(null);

    const [user, setUser] = useState({
        firstname: 'Max',
        lastname: ''
    });

    useEffect(() => {
        if (!hide && uncontrolledValue !== '') {
            inputRef.current!.value = uncontrolledValue;
        }
    }, [hide, uncontrolledValue])


    function handleSave() {
        console.log('Hier könnte Ihr Wert stehen', user.firstname, user.lastname)
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        console.log(event.target.name, ' - ', event.target.value)
        setUser((prevUser) => {
            return {
                ...prevUser,
                [event.target.name]: event.target.value
            }
        })
    }

    return <div>
        <div>

            <h1>Controlled components</h1>
            {

                Object.keys(user).map((fieldName) => {
                    return <label key={fieldName}>
                        {fieldName}
                        <input type="text"
                            name={fieldName}
                            value={user[fieldName as keyof typeof user]}
                            onChange={handleChange} />
                    </label>
                })


            }

            <button onClick={handleSave}>save</button>

        </div>

        <hr />

        {!hide && <div>
            <h1>Uncontrolled Components</h1>
            <label>Filter: <input type="text" ref={inputRef} /></label>
            <button onClick={() => {
                console.log(inputRef.current!.value)
            }}>save</button>
        </div>}
        <button onClick={() => {
            if (!hide) {
                setUncontrolledValue(inputRef.current!.value);
            }
            setHide(!hide)
        }}>hide</button>


    </div >
}

export default Forms;