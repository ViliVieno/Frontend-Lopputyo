import { useEffect } from "react";
import NoteStore from "../noteStore/NoteStore";

function AddNotes() {

    const { notes, fetchNote } = NoteStore();

    useEffect(() => {
        fetchNote(); 
    }, []); 

    return (
        <div>
            <h2 className="text-6xl font-bold">Add notes for class</h2>
            <div>
            <h1>Notes</h1>
            <ul>
                {notes.map((note) => (
                    <li key={note.id}>
                        <h3>{note.name}</h3>
                    </li>
                ))}
            </ul>
            </div>    
        </div>
    );
}

export default AddNotes;
