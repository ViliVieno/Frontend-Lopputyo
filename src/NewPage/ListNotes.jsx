import { useEffect, useState } from "react";
import NoteStore from "../noteStore/NoteStore";

function ListNotes() {
    const { courses, notes, fetchNote, fetchCourse, setNewNote } = NoteStore();
    const [selectedCourseId, setSelectedCourseId] = useState("");
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetchCourse();
        fetchNote();
    }, []);
    
    const handleCourseChange = (e) => {
        const value = e.target.value;
        setSelectedCourseId(value);
        setShowAll(value === "all"); 
    };

    const filteredNotes = notes.filter((note) => {
        if (showAll) {
            return true; 
        }
        return note.course.id === parseInt(selectedCourseId);
    });

    return (
        <div>
            <div className="py-8">
                <h1 className="text-4xl font-bold">List of notes</h1>
            </div>
            <select value={selectedCourseId} onChange={handleCourseChange}>
                <option value="">Select a Course</option>
                <option value="all">Show All Notes</option>
                {courses.map((course) => (
                    <option key={course.id} value={course.id}>
                        {course.name}
                    </option>
                ))}
            </select>

            <div style={{ marginTop: "20px" }}>
                <h3>{showAll ? "All Notes" : "Notes for Selected Course:"}</h3>

                {filteredNotes.length > 0 ? (
                    filteredNotes.map((note) => (
                        <div key={note.id} style={{ marginBottom: "20px" }}>
                            <h4 className="font-semibold">{note.course.name}</h4>
                            <p>{note.text}</p>
                            <small>{note.timestamp}</small>
                        </div>
                    ))
                ) : (
                    <p>No notes available for this course.</p>
                )}
            </div>
        </div>
    );
}

export default ListNotes;
