import { useState, useRef, useEffect } from "react"

export default function Chat() {
    const [userInput, setUserInput] = useState("")

    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        money: "",
    });

    const inputRef = useRef(null);

    useEffect(()=> {
        inputRef.current.focus();
    }, [])

    const handleChange = (e) => {
        const text = e.target.value
        console.log(text);
        setUserInput(text);
    }

    const handlFormDataChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        try{
            e.preventDefault()
            console.log(`Data: ${userInput}`);
            setUserInput('')
        } catch (e) {
            console.error(e)
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit} >
                <label>
                    <input type="text" name="userInput" value={userInput} ref={inputRef} onChange={handleChange}/>
                </label>
                {/* <hr />
                <label>
                    First Name
                    <br />
                    <input type="text" name="name" value={formData.name} onChange={handlFormDataChange}/>
                </label>
                <hr />  
                <label>
                    Lat Name
                    <br />
                    <input type="text" name="lastName" value={formData.lastName} onChange={handlFormDataChange}/>
                </label>
                <hr />
                <label>
                    Money
                    <br />
                    <input type="text" name="money" value={formData.money} onChange={handlFormDataChange}/>
                </label>
                <hr /> */}
                <button>Send</button>
            </form>
        </div>
    )
}