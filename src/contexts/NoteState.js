import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const host = "http://localhost:5000"
    const authToken = localStorage.getItem("authToken")
    const [notes, setNotes] = useState([])

    // Add note
    const addNote = async(title, description, tag)=>{
        const url = `${host}/api/notes/addnote`
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Auth-Token": authToken
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
                "Auth-Token": authToken
            }
        })
        const fetchedNotes = await response.json()
        setNotes(fetchedNotes)
    }

    // Update Note (Edit Note)
    const editNote = async(noteId, title, description, tag)=>{
        const url = `${host}/api/notes/updatenote/${noteId}`
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Auth-Token": authToken
            },
            body: JSON.stringify({title, description, tag})
        })

        const newNotesArray = JSON.parse(JSON.stringify(notes))
        console.log(newNotesArray)
        
        // To show the changes in the frontend
        for(let i=0 ; i<newNotesArray.length ; i++){
            if(noteId===newNotesArray[i]._id){
                newNotesArray[i].title = title
                newNotesArray[i].description = description
                newNotesArray[i].tag = tag
                break
            }
        }

        setNotes(newNotesArray)
    }

    // Deleting a Note
    const deleteNote = async(noteId)=>{
        const url = `${host}/api/notes/deletenote/${noteId}`
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Auth-Token": authToken
            }
        })

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