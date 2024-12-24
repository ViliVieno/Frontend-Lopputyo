import { useEffect, useState } from "react";
import NoteStore from "../noteStore/NoteStore";

function AddNotes() {

    const { courses, notes, newNote, fetchNote, addNote, setNewNote } = NoteStore();
    const [selectedCourseId, setSelectedCourseId] = useState("");

    useEffect(() => {
        fetchNote();
    }, []); 

    const handleCourseChange = (e) => {
        setSelectedCourseId(e.target.value); 
    };

    const handleNewNoteChange = (e) => {
        setNewNote(e.target.value); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!selectedCourseId || !newNote.trim()) {
            alert("Please write something");
            return;
        }
        
        addNote(selectedCourseId, newNote);
        setNewNote("");
    }

    return (
        <div>
            <h1>Select a Course and add a note for it</h1>

            {/* Dropdown Menu */}
            <select value={selectedCourseId} onChange={handleCourseChange}>
                <option value=""></option>
                {courses.map((course) => (
                    <option key={course.id} value={course.id}>
                        {course.name}
                    </option>
                ))}
            </select>

            {selectedCourseId && (
                <div style={{ marginTop: "20px" }}>
                    <h2>Add a new note:</h2>
                    <textarea
                        value={newNote}
                        onChange={handleNewNoteChange}
                        placeholder="Enter your note here"
                        rows="4"
                        cols="50"   
                    />
                    <button onClick={handleSubmit}>Add Note</button>
                </div>
            )}

                {/* Optionally, you could display the notes associated with the selected course */}
                {selectedCourseId && (
                <div style={{ marginTop: "20px" }}>
                    <h3>Existing Notes for Selected Course:</h3>
                    {notes
                        .filter((note) => note.courseId === selectedCourseId)
                        .map((note, index) => (
                            <p key={index}>{note.note}</p>
                        ))}
                </div>
            )}
        </div>
    );
}

export default AddNotes;
