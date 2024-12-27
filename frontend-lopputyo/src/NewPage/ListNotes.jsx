    import { useEffect, useState } from "react";
    import NoteStore from "../noteStore/NoteStore";

    function ListNotes() {

        const { courses, notes, fetchNote, fetchCourse, setNewNote } = NoteStore();
        const [selectedCourseId, setSelectedCourseId] = useState("");
        
        useEffect(() => {
            fetchCourse();
            fetchNote();    
        }, []); 
        
        const handleCourseChange = (e) => {
            setSelectedCourseId(e.target.value); 
        };

        return (
            <div>
                <div class="py-8">
                    <h1 class="text-4xl font-bold">List of notes</h1>
                </div>
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
                        .filter((note) => note.course.id === parseInt(selectedCourseId)) // Filter notes by courseId
                        .map((note) => (
                            <div key={note.id}>
                                <p>{note.text}</p> {/* Display the note text */}
                                <small>{note.timestamp}</small> {/* Display timestamp */}
                            </div>
                        ))}

                    {/* Show fallback if no notes exist */}
                    {notes.filter((note) => note.course.id === parseInt(selectedCourseId)).length === 0 && (
                        <p>No notes available for this course.</p>
                    )}
                </div>
            )} 
            </div>
        );
    }

    export default ListNotes;
