import { useState } from 'react';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmitEmail = () => {
        if(email !== "") {
            alert("Data filled successfully");
        } else {
            alert("Input data can't be left empty.");
        }
    }

    const handleSubmitPassword = () => {
        if(password !== "") {
            alert("Data filled successfully");
        } else {
            alert("Input data can't be left empty.");
        }
    }

    return (
        <>
        <form onSubmit={handleSubmitEmail}>
            <label>Enter your Email:
                <input
                 type="text"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <input type="submit" />
        </form>
        <form onSubmit={handleSubmitPassword}>
        <label>Enter your password:
                <input
                 type="text"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                />
            </label>     
            <input type="submit" />       
        </form>
        </>
    )
}

export default Login;