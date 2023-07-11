import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

const Signup = (props) => {
    const {showAlert} = props

    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({name: "", email: "", password: "", confirmPassword: ""})

    const handleFormSubmit = async(e)=>{
        e.preventDefault()
        const {name, email, password} = credentials
        const url = "http://localhost:5000/api/auth/signup"
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name, email, password})
        })

        const json = await response.json()
        console.log(json)

        if(json.success){
            localStorage.setItem("authToken", json.authToken)
            navigate("/")
            showAlert("Account created successfully!", "success")
        }
        else{
            showAlert("Invalid Credentials", "danger")
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <>
        <div className="container my-3">
            <h2>Signup</h2>
            <form className='my-3' onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" value={credentials.name} id="name" name='name' onChange={onChange}  required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} id="email" name='email' aria-describedby="emailHelp" onChange={onChange} required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} id="password" name='password' onChange={onChange} required minLength={8}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" value={credentials.confirmPassword} id="confirmPassword" name='confirmPassword' onChange={onChange} required minLength={8}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        </>
    )
}

export default Signup