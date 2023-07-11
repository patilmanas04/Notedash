import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = ()=>{
    const navigate = useNavigate()
    
    const handleLogout = ()=>{
        localStorage.removeItem("authToken")
        navigate("/login")
    }

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Notedash</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About Us</NavLink>
                        </li>
                    </ul>
                    {
                        !localStorage.getItem("authToken")?<form className="d-flex" role="search">
                        <Link className="btn btn-primary" to="/login" role="button">Login</Link>
                        <Link className="btn btn-primary mx-2" to="/signup" role="button">Signup</Link></form> : <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
                    }
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar;