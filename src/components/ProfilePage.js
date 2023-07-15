import React, { useEffect, useContext } from "react";
import NoteContext from "../contexts/noteContext";

const ProfilePage = ()=>{
    const context = useContext(NoteContext)
    const { getUserDetails, userCredentials, setUserCredentials, setUserDetails } = context

    useEffect(() => {
        getUserDetails()
        // eslint-disable-next-line
    }, [])

    const onChange = (e)=>{
        setUserCredentials({...userCredentials, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUserDetails(userCredentials.name)
    }

    return (
        <>
        <div className="container my-5">
            <div className="card">
                <div className="card-body">
                    <h2>Your Profile</h2>
                    <form className="my-3" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input onChange={onChange} type="text" className="form-control" value={userCredentials.name} id="name" aria-describedby="emailHelp" name="name" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input onChange={onChange} type="email" className="form-control" value={userCredentials.email} id="email" name="email" required disabled/>
                        </div>
                        <button type="submit" className="btn btn-primary">Save Changes</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProfilePage