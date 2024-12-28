import React from 'react';
import { Link } from 'react-router';

const MainPage = () => {
    return (
        <main className="container mx-auto p-4">
            <div class="py-8">
                <h1 class="text-6xl font-bold">NotesApp</h1>
            </div>
            <section className= "text-white p-6">  
                <nav className="flex space-x-6">
                    <div className="flex space-x-4">
                        <Link to="/AddNotes">
                            <button className="bg-gray-100 text-black px-4 py-2 rounded hover:bg-gray-200">Create notes for class</button>
                        </Link>
                        <Link to="/ListNotes">
                          <button className="bg-gray-100 text-black px-4 py-2 rounded hover:bg-gray-200">List notes</button>
                        </Link>
                        <Link to="AddCourses">
                          <button className="bg-gray-100 text-black px-4 py-2 rounded hover:bg-gray-200 text-center;">Add courses</button>
                        </Link>
                    </div>
                </nav>
            </section>
        </main>
    );
};

export default MainPage;
