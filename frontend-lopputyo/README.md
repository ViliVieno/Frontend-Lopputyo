Made MainBody.jsx and Header.jsx using Copilot.
Made AddNotes.jsx mostly with the course materials, but made improvements with ChatGPT
More AI on AddNotes.jsx:

const handleChange = (event) => {
        selectedNote(event.target.value);
};
This is simple, when change happens then it grabs the selectedNotes value

{currentNote && ( 
The && makes this a "Conditional Rendering", where the condition is that the currentNotes value must be something other then "".
This makes it so it doesnt display anything when there is no value.

{selectedCourseId && (
                <div style={{ marginTop: "20px" }}>
                    <h3>Existing Notes for Selected Course:</h3>
                    {notes
                        .filter((note) => note.courseId === selectedCourseId)
                        .map((note, index) => (
                            <p key={index}>{note.note}</p>
                        ))}
                </div>
I somehow could not find a way to get it to show the existing notes that were created, so this is what I got out of chatGPT...
What I understand of it, it first filters the notes with the .filter with the courseid where the note.courseId has to be exactly the same as selectedCourseId. So with this it can tell which course its looking at and what notes have been added to it.

NoteStore.jsx 
addNote: (courseId, note) => {
        set((state) => ({
            notes: [...state.notes, { courseId, note }],
        }));
    },
I was wondering why nothing was working before, then I asked chatgpt and it changed this small part and BOOM it works.

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
This looks like a big part, but in reality its pretty much what I have been doing this whole time, but this time I tried to 
make a useless separate function, when I could have just written the same thing in the ListNotes. ChatGPT was used to make
it work.

NoteStore.jsx
addCourse: (name) =>
        set((state) => {
            const newCourse = {
                id: String(state.courses.length + 1),
                name,
            };
            return { courses: [...state.courses, newCourse] };
        }),
I made something that didnt work, then I asked ChatGPT to make it better. Then it simplified my code.

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
So this is what I have been trying to do for the last many hours and finally, with help from ChatGPT yet again, I did it.
So the big thing that happens here is that it filters the courses to ID, and then finds the same ID from the json(netlify)
where it can then write down the notes from there. it writes everything, the date, the note etc. 