import axios from "axios"
import { useNavigate,Link } from "react-router-dom"
import React, { useState } from "react"

const Signup = () => {
    const navigate = useNavigate();
    const [error, setError] = useState()
    const [user, setUser] = useState({
        username: '',
        password: '',
    });

    function handleChange(event) {
        setUser({ ...user, [event.target.id]: event.target.value })
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        axios.post('https://personality-test-backend.herokuapp.com/users/signup', user)
            .then(() => {
                console.log(`the post is ${user}`)
                navigate('/signin')
            })
            .catch(err => {
                console.log(err.response.data)
                setError(err.response.data);
            })
    }

    return (
        <>
            <div className="login-form-div">
                <form onSubmit={handleSubmit} className="login-form" >
                    <h1>Sign up</h1>
                    <input onChange={handleChange} type="text" id="username" placeholder="username" />
                    <input onChange={handleChange} type="password" id="password" placeholder="password" />
                    <button type='submit'>Submit</button>
                    <p><Link to="/signin" className="signin-link">Back to login</Link></p>
                    <p>{error}</p>

                </form>
            </div>
        </>
    )
}

export default Signup;