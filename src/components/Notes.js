import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../contexts/noteContext";
import NoteItem from "./NoteItem";
import { useNavigate } from "react-router-dom";

const Notes = ()=>{    
    const navigate = useNavigate()

    const context = useContext(NoteContext)
    const {notes, fetchNotes, editNote} = context

    const [newNote, setNewNote] = useState({id: "", edittitle: "", editdescription: "", edittag: ""})

    useEffect(() => {
        if(localStorage.getItem("authToken")){
            fetchNotes()
        }
        else{
            navigate("/login")
        }
    }, [])

    const ref = useRef(null)
    const refClose = useRef(null)

    const handleEditClick = (note)=>{
        ref.current.click()
        setNewNote({id: note._id, edittitle: note.title, editdescription: note.description, edittag: note.tag})
    }

    const handleSaveChangesClick = ()=>{
        editNote(newNote.id, newNote.edittitle, newNote.editdescription, newNote.edittag)
        refClose.current.click()
    }

    const onChange = (e)=>{
        setNewNote({...newNote, [e.target.name]: e.target.value})
    }

    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={ref} style={{display: 'none'}}>
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>

                                    <input type="text" className="form-control" value={newNote.edittitle} name="edittitle" id="edittitle" onChange={onChange}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="editdescription" className="form-label">Description</label>

                                    <input type="text" className="form-control" value={newNote.editdescription} id="editdescription" name="editdescription" onChange={onChange}/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleSaveChangesClick} disabled={newNote.edittitle.length===0 || newNote.editdescription.length===0}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        <div className="row my-5">
        <h2 style={{paddingLeft: "0"}}>Your Notes</h2>
            {
                notes.map((note, index) => {
                    return <NoteItem key={index} note={note} handleEditClick={handleEditClick}/>
                })
            }
        </div>
        </>
    )
}

export default Notes