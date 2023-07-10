import React from "react";
import Notes from "./Notes";
import AddNote from "./AddNote";

const Home = ()=>{
    return (
        <>
        <div className="container my-3">
            <AddNote/>
            <Notes/>
        </div>
        </>
    )
}

export default Home;