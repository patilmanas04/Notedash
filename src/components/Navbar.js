import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = ()=>{
    const navigate = useNavigate()
    
    // handle click on logout button
    const handleLogout = ()=>{
        localStorage.removeItem("authToken")
        navigate("/login")
    }

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <svg width="27" height="27" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="130" height="130" rx="4" fill="#F8F8F8" />
                        <path d="M28.7755 111.275C27.4172 111.275 26.4443 110.982 25.8569 110.394C25.2696 109.77 24.9759 108.614 24.9759 106.925C24.9759 105.787 25.086 104.41 25.3063 102.795C25.5265 101.18 25.912 98.7385 26.4627 95.4712C26.5361 95.0307 26.8298 93.2502 27.3437 90.1297C27.8577 86.9726 28.3166 83.6686 28.7204 80.2177C29.0875 77.2808 29.2711 75.0782 29.2711 73.6097C29.2711 71.9577 28.6653 71.1317 27.4539 71.1317C26.5361 71.1317 25.3797 71.6273 23.9847 72.6185C22.6264 73.573 21.1579 75.1149 19.5793 77.2441C19.0654 77.9416 18.4964 78.2904 17.8723 78.2904C17.3583 78.2904 16.8994 78.0518 16.4956 77.5745C16.1285 77.0606 15.9449 76.4916 15.9449 75.8675C15.9449 75.2434 16.0551 74.656 16.2753 74.1053C16.4956 73.518 16.8994 72.8204 17.4868 72.0128C19.2856 69.5532 21.2864 67.6625 23.4891 66.3409C25.6917 64.9826 28.0045 64.3035 30.4275 64.3035C32.4466 64.3035 33.9517 64.9276 34.9429 66.1757C35.9708 67.4239 36.4848 69.2411 36.4848 71.6273C36.4848 73.7566 36.1911 76.8403 35.6037 80.8785C37.4393 75.4453 39.7704 71.3336 42.5972 68.5436C45.424 65.7168 48.7463 64.3035 52.5643 64.3035C55.5746 64.3035 57.8323 65.1662 59.3375 66.8916C60.8793 68.5803 61.6503 70.8564 61.6503 73.7199C61.6503 75.3352 61.4116 77.2992 60.9344 79.612L57.5753 95.3611C57.2082 97.1966 57.0247 98.7752 57.0247 100.097C57.0247 101.639 57.3734 102.795 58.0709 103.566C58.8052 104.337 59.8147 104.722 61.0996 104.722C62.3111 104.722 63.4858 104.319 64.6239 103.511C65.7986 102.703 67.1753 101.363 68.7539 99.4911C69.1944 98.9771 69.69 98.7201 70.2407 98.7201C70.7179 98.7201 71.085 98.9404 71.342 99.3809C71.6357 99.8215 71.7825 100.427 71.7825 101.198C71.7825 102.63 71.4338 103.768 70.7363 104.612C68.8273 106.925 66.9367 108.614 65.0644 109.678C63.1921 110.743 61.2281 111.275 59.1723 111.275C56.0518 111.275 53.6105 110.358 51.8484 108.522C50.0863 106.65 49.2052 104.153 49.2052 101.033C49.2052 99.8215 49.297 98.4999 49.4805 97.0681C49.7008 95.6364 50.0496 93.8192 50.5268 91.6165L52.7295 81.5393C52.8029 81.2089 52.9314 80.6216 53.1149 79.7772C53.2985 78.9328 53.4453 78.1436 53.5555 77.4093C53.6656 76.6384 53.7207 75.8858 53.7207 75.1516C53.7207 73.9768 53.3903 73.0407 52.7295 72.3432C52.0687 71.6457 51.1325 71.2969 49.9211 71.2969C47.7184 71.2969 45.5157 72.4717 43.3131 74.8212C41.1104 77.1707 39.0729 80.9703 37.2007 86.22C35.3284 91.433 33.86 98.1144 32.7953 106.264C32.5384 108.137 32.1529 109.44 31.6389 110.174C31.1617 110.908 30.2072 111.275 28.7755 111.275Z" fill="#1E1E1E" />
                    </svg>
                    <span style={{ marginLeft: "5px" }}>Notedash</span>
                </Link>
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
                        <Link className="btn btn-sm btn-primary" to="/login" role="button">Login</Link>
                        <Link className="btn btn-sm btn-primary mx-2" to="/signup" role="button">Signup</Link></form> : <div className="user-account"><button className="btn btn-sm btn-primary" onClick={handleLogout}>Logout</button><Link to="/profile"><svg className="mx-2" style={{ fill: "#fff" }} height="32" viewBox="0 0 48 48" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 6c3.31 0 6 2.69 6 6 0 3.32-2.69 6-6 6s-6-2.68-6-6c0-3.31 2.69-6 6-6zm0 28.4c-5.01 0-9.41-2.56-12-6.44.05-3.97 8.01-6.16 12-6.16s11.94 2.19 12 6.16c-2.59 3.88-6.99 6.44-12 6.44z" /><path d="M0 0h48v48H0z" fill="none" /></svg></Link></div>
                    }

                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar;