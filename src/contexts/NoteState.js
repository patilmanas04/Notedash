import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const initialNotes = [
        {
            "_id": "64a91a35d6bbf4f9a387f743",
            "user": "64a85e93a95848d412b14eb9",
            "title": "Note 2",
            "description": "Note 2 description",
            "tag": "testing",
            "date": "2023-07-08T08:11:33.994Z",
            "__v": 0
        },
        {
            "_id": "64a91a3a7675b58f13e5f523",
            "user": "64a85e93a95848d412b14eb9",
            "title": "Note 3",
            "description": "Note 3 description",
            "tag": "testing",
            "date": "2023-07-08T08:11:38.151Z",
            "__v": 0
        },
        {
            "_id": "64a91a3e1d9e3c354245d22a",
            "user": "64a85e93a95848d412b14eb9",
            "title": "Note 4",
            "description": "Note 4 description",
            "tag": "testing",
            "date": "2023-07-08T08:11:42.357Z",
            "__v": 0
        },
        {
            "_id": "64a91a42129884a1458a56f8",
            "user": "64a85e93a95848d412b14eb9",
            "title": "Note 5",
            "description": "Note 5 description",
            "tag": "testing",
            "date": "2023-07-08T08:11:46.870Z",
            "__v": 0
        },
        {
            "_id": "64a91a3a7675b58f13e5f523",
            "user": "64a85e93a95848d412b14eb9",
            "title": "Note 3",
            "description": "Note 3 description",
            "tag": "testing",
            "date": "2023-07-08T08:11:38.151Z",
            "__v": 0
        },
        {
            "_id": "64a91a3e1d9e3c354245d22a",
            "user": "64a85e93a95848d412b14eb9",
            "title": "Note 4",
            "description": "Note 4 description",
            "tag": "testing",
            "date": "2023-07-08T08:11:42.357Z",
            "__v": 0
        },
        {
            "_id": "64a91a42129884a1458a56f8",
            "user": "64a85e93a95848d412b14eb9",
            "title": "Note 5",
            "description": "Note 5 description",
            "tag": "testing",
            "date": "2023-07-08T08:11:46.870Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(initialNotes)

    // Add note
    const addNote = (title, description, tag)=>{
        const note = {
            "_id": "64a91a42129884a1458a56f8",
            "user": "64a85e93a95848d412b14eb9",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-07-08T08:11:46.870Z",
            "__v": 0
        }

       setNotes(notes.concat(note))
    }

    return (
        <NoteContext.Provider value={{notes, addNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;