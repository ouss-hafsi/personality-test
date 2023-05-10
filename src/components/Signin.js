
import { Link} from "react-router-dom"
import React from "react"


const Signin = ({ error, handleSubmit, handleChange }) => {

    return (
        <>
            <div className="login-form-div">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <input onChange={(event) => handleChange(event)} type="text" id='username' placeholder="username" />
                    <input onChange={(event) => handleChange(event)} type="password" id='password' placeholder="password" />
                    <button type="submit">Login</button>
                    <p><Link to="/signup" className="signin-link">Create an Account</Link></p>
                    <p>{error}</p>
                </form>
            </div>

        </>
    )
}

export default Signin;