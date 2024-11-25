import axios from "axios";
import { useState, useEffect, useRef } from "react";

export default function SignUp() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const inputRef = useRef(null);

    useEffect(()=> {
        inputRef.current.focus();
    }, [])

    const handlFormDataChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        try{
            e.preventDefault()

            axios({
                method: "post",
                url: "http://localhost:4001/User",
                data: formData,
              })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
        } catch (e) {
            console.error(e)
        }
    }
    return(
        <main>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" id="username" value={formData.username} onChange={handlFormDataChange} ref={inputRef} placeholder="username" required/>
                <input type="email" name="email" id="email" value={formData.email} onChange={handlFormDataChange} placeholder="email" required/>
                <input type="password" name="password" id="password" value={formData.password} onChange={handlFormDataChange} placeholder="password" minLength={5} required/>
                <button>Submit</button>
            </form>
        </main>
    )
}