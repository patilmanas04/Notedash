import React, { useContext } from "react";
import NoteContext from "../contexts/noteContext";
import NoteItem from "./NoteItem";

const Notes = ()=>{    
    const context = useContext(NoteContext)
    const {notes} = context

    return (
        <>
        <div className="row my-5">
            <h2>Your Notes</h2>
            {
                notes.map((note, index) => {
                    return <NoteItem key={index} note={note}/>
                })
            }
        </div>
        </>
    )
}

export default Notes