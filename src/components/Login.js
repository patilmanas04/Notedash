import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

const Login = (props) => {
    const {showAlert} = props

    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({email: "", password: ""})

    // handle form submit to log into the user's account
    const handleFormSubmit = async(e)=>{
        e.preventDefault()
        const url = "http://localhost:5000/api/auth/login"
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        })

        const json = await response.json()
        console.log(json)

        // showing alert messages if the login was successfull or not
        if(json.success){
            localStorage.setItem("authToken", json.authToken)
            navigate("/")
            showAlert("Logged in Successfully", "success")
        }
        else{
            showAlert("Invalid Credentials", "danger")
        }
    }

    // update the credentials as the user alters the values of the form
    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <>
        <div className="container my-5">
            <div class="card">
                <div class="card-body">
                    <h2>Login</h2>
                    <form className='my-3' onSubmit={handleFormSubmit}>
                        <div className="mb-3">
                            <label htmlhtmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" value={credentials.email} id="email" name='email' aria-describedby="emailHelp" onChange={onChange} required />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlhtmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" value={credentials.password} id="password" name='password' onChange={onChange} required />
                        </div>
                        <button type="submit" className="btn btn-primary">Log in</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login