// import React from "react";

// const ListNotesStore = ({ notes, selectedCourseId }) => {
//     const filteredNotes = notes.filter((note) => note.courseId === selectedCourseId);

//     return (
//         <div style={{ marginTop: "20px" }}>
//             <h3>Existing Notes for Selected Course:</h3>
//             {filteredNotes.length > 0 ? (
//                 filteredNotes.map((note, index) => (
//                     <p key={index}>{note.note}</p>
//                 ))
//             ) : (
//                 <p>No notes available for this course.</p>
//             )}
//         </div>
//     );
// };

// export default ListNotesStore;