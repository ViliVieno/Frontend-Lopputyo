import { useState } from "react";
import NoteStore from "../noteStore/NoteStore";

function AddCourses() {
    
    const { addCourse } = NoteStore();
    const [NewCourse, SetNewCourse] = useState("");

    const handleAddCourse = () => {
        if (!NewCourse.trim()) {
            alert("Please enter a course name.");
            return;
        }
        addCourse(NewCourse);
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
                placeholder="Enter a name"
            />  
            <button onClick={handleAddCourse}>Add Course</button>
        </div>
    );
}

export default AddCourses;
