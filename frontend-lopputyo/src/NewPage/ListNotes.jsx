import { useEffect, useState } from "react";
import NoteStore from "../noteStore/NoteStore";
import { Link } from "react-router";

function ListNotes() {

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

    return (
        <div>
            <select value={selectedCourseId} onChange={handleCourseChange}>
                <option value=""></option>
                {courses.map((course) => (
                    <option key={course.id} value={course.id}>
                        {course.name}
                    </option>
                ))}
            </select>  

            {/* Display notes for the selected course */}
            {selectedCourseId && (
                <div style={{ marginTop: "20px" }}>
                    <h3>Notes for Selected Course:</h3>
                    {notes
                        .filter((note) => note.courseId === selectedCourseId) // Filter notes
                        .map((note, index) => (
                            <p key={index}>{note.note}</p> // Render each note
                        ))}
                    
                    {/* Show fallback if no notes exist */}
                    {notes.filter((note) => note.courseId === selectedCourseId).length === 0 && (
                        <p>No notes available for this course.</p>
                    )}
                </div>
            )}  
        </div>
    );
}

export default ListNotes;
