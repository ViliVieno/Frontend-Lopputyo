import { useEffect, useState } from "react";
import NoteStore from "../noteStore/NoteStore"; 

function AddNotes() {

    const { courses, notes, newNote, fetchCourse, fetchNote, addNote, setNewNote } = NoteStore();
    const [selectedCourseId, setSelectedCourseId] = useState("");
    const [courseIdAdded, setCourseIdAdded] = useState("");

    useEffect(() => {
        fetchCourse();
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
        setCourseIdAdded(`Note for course "${selectedCourseId}" added succesfully!`);
        setNewNote("");
    }

    return (
        <div>
            <div class="py-8">
                <h1 class="text-4xl font-bold">Make new notes for classes</h1>
            </div>
            <h1>Select a Course and add a note for it</h1>

            <select value={selectedCourseId} onChange={handleCourseChange}>
                <option value=""></option>
                {courses.map((course) => (
                    <option key={course.id} value={course.id}>
                        {course.name}
                    </option>
                ))}
            </select>

            {selectedCourseId && ( // This is conditional rendering. It doesnt show anything if it doesnt have a value.
                <div style={{ marginTop: "20px" }}>
                    <h2>Add a new note:</h2>
                    <textarea
                        value={newNote}
                        onChange={handleNewNoteChange}
                        placeholder="Enter your note here"
                        rows="4"
                        cols="50"   
                    />
                    <button onClick={handleSubmit}
                    className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
                    >Add Note</button>
                </div>
            )}

            {courseIdAdded && (
                <p>{courseIdAdded}</p>
            )}

                {selectedCourseId && (
                <div style={{ marginTop: "20px" }}>
                    <h3>Latest note for this class:</h3> 
                    {notes
                        .filter((note) => note.course.id === parseInt(selectedCourseId)) 
                        .slice(-1) // This part, first it filters the notes by course id and then it slices, so only the last note is left.
                        .map((note, index) => (
                            <p key={index}>{note.text}</p>
                        ))}
                </div>
            )}
        </div>
    );
}

export default AddNotes;
