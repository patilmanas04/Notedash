import React, { useContext, useState } from "react";
import NoteContext from "../contexts/noteContext";

const AddNote = () => {
    const context = useContext(NoteContext)
    const {addNote} = context

    const [note, setNote] = useState({
        title: "",
        description: "",
        tag: "general"
    })

    // handle click on add note button
    const handleClick = (e)=>{
        e.preventDefault()
        addNote(note.title, note.description, note.tag)
    }

    const onChange = (e)=>{
        // ...note means the object will be there as it was before and the after comma means [e.target.name]: e.target.value means that only the values with the particular key-value pair will change and this will not affect other part of the object
        // ... is known as a spread operator
        setNote({...note, [e.target.name]: e.target.value})
    }

    return (
        <>
        <h2>Add note here</h2>
        <form>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>

                <input type="text" className="form-control" name="title" id="title" onChange={onChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>

                <input type="text" className="form-control" id="description" name="description" onChange={onChange}/>
            </div>

            <button type="submit" disabled={note.title.length===0 || note.description.length===0} className="btn btn-primary" onClick={handleClick}>Add Note</button>
        </form>
        </>
    )
}

export default AddNote