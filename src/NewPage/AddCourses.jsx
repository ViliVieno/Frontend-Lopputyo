import { useState, useEffect } from "react";
import NoteStore from "../noteStore/NoteStore";

function AddCourses() {
    
    const { addCourse, fetchCourse, fetchNote } = NoteStore();
    const [NewCourse, SetNewCourse] = useState("");
    const [courseAdded, setCourseAdded] = useState("");
    
    useEffect(() => {
        fetchCourse();
        fetchNote();
    }, []); 

    const handleAddCourse = () => {
        if (!NewCourse.trim()) {
            alert("Please enter a course name.");
            return;
        }
        addCourse(NewCourse);
        setCourseAdded(`Course "${NewCourse}" added successfully!`);
        SetNewCourse("");
    };

    return (    
        <div>
            <div class="py-8">
                <h1 class="text-4xl font-bold">Add new courses</h1>
            </div>    
            <input
                type="text"
                value={NewCourse}
                onChange={(e) => SetNewCourse(e.target.value)}
                placeholder="Enter a new course"
            />  
            <button onClick={handleAddCourse}
            className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
            >Add Course</button>

            {courseAdded && (
                <p>{courseAdded}</p>
            )}
        </div>
    );
}

export default AddCourses;