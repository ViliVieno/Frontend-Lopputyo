This is an app made for my frontend course. In it, the user can make notes for different classes in the "Add notes",
Look at the notes in the "List notes" and add courses in the "Add course". The app also fetches courses and notes from a netlify link.
To run the app, you need to use npm install and npm run dev. You need Node.js for it to work.

The program was made by me, with help in some sections by ChatGPT and Copilot. Below, I have listed everything that I used
AI for and which AI was used. For the sake of clarity, I have made some comments on the codes, where AI was used, but most of my thoughts
are written in this readme. I read through this again and left some of my thoughts now. I also noticed that I never specified how I used
the AI. Most of the time, I made a thing and when it didn't work, I asked about the part that didn't work. Or I asked "How can I make X"
and it told me "Use Y to make X". 





AI Part.
--------------------------------------------------------------------------------------------------------------
Made MainBody.jsx and Header.jsx using Copilot.
Made AddNotes.jsx mostly with the course materials, but made improvements with ChatGPT
More AI on AddNotes.jsx:

const handleChange = (event) => {
        selectedNote(event.target.value);
};
This is simple, when change happens then it grabs the selectedNotes value
Editors Note: In the beginning, I used Copilot for learning as I found out that it doesnt always/most of the time even remember what was 
said to it before.

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
What it does is, it first filters the notes with the .filter with the courseid where the note.courseId has to be exactly the same as selectedCourseId. So with this it can tell which course its looking at and what notes have been added to it.

NoteStore.jsx 
addNote: (courseId, note) => {
        set((state) => ({
            notes: [...state.notes, { courseId, note }],
        }));
    },
I was wondering why nothing was working before, then I asked chatgpt and it changed this small part and BOOM it works.

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
make a useless separate function, when I could have just written the same thing in the ListNotes. ChatGPT helped to make
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
Editors Note: It was the parseint.

After it broke the whole thing, I needed to add
const course = state.courses.find(course => course.id === parseInt(courseId));
to my addNote in the NoteStore while reworking the whole addNote to work with the newly added fetchNote.
This was, of course, ChatGPT who told me this. 
The same for the addCourse
id: state.courses.length ? state.courses[state.courses.length - 1].id + 1 : 1,  // Use the last course's id + 1 for new courses
This is the only time I am using code that I do not fully understand, but as it works it works.

Did some work on how the app looks with ChatGPT.

Last thing, in the ListNotes I made a "Show all" in the dropdown menu. This was made with some help from ChatGPT. 
---------------------------------------------------------------------------------------------------------

