import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const host = "http://localhost:5000"
    const [notes, setNotes] = useState([])

    // Add note
    const addNote = async(title, description, tag)=>{
        const url = `${host}/api/notes/addnote`
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Auth-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhYWY5MWE4NDJkYTI5NmQ4MWVmNjBlIn0sImlhdCI6MTY4ODkyNjQ5NX0.jtJz_XWDYBmst7CJDhtMGP4JVuGNUAFOCvR9kyep2l8"
            },
            body: JSON.stringify({title, description, tag})
        })
        const addedNote = await response.json()

        setNotes(notes.concat(addedNote))
    }

    // Fetch Notes
    const fetchNotes = async()=>{
        const url = `${host}/api/notes/fetchnotes`
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Auth-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhYWY5MWE4NDJkYTI5NmQ4MWVmNjBlIn0sImlhdCI6MTY4ODkyNjQ5NX0.jtJz_XWDYBmst7CJDhtMGP4JVuGNUAFOCvR9kyep2l8"
            }
        })
        const fetchedNotes = await response.json()
        setNotes(fetchedNotes)
    }

    // Update Note (Edit Note)
    const editNote = async(noteId, title, description, tag)=>{
        const url = `${host}/api/notes/updatenote/${noteId}`
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Auth-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhYWY5MWE4NDJkYTI5NmQ4MWVmNjBlIn0sImlhdCI6MTY4ODkyNjQ5NX0.jtJz_XWDYBmst7CJDhtMGP4JVuGNUAFOCvR9kyep2l8"
            },
            body: JSON.stringify({title, description, tag})
        })
    }

    // Deleting a Note
    const deleteNote = async(noteId)=>{
        const url = `${host}/api/notes/deletenote/${noteId}`
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Auth-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhYWY5MWE4NDJkYTI5NmQ4MWVmNjBlIn0sImlhdCI6MTY4ODkyNjQ5NX0.jtJz_XWDYBmst7CJDhtMGP4JVuGNUAFOCvR9kyep2l8"
            }
        })
        const fetchedNotes = await response.json()

        const updatednotes = notes.filter((note)=>{
            return note._id!==noteId
        })
        setNotes(updatednotes)
    }

    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, fetchNotes, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;