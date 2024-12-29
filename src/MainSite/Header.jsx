import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <header className="bg-blue-900 text-white p-6 flex items-center justify-between fixed w-full top-0 left-0 z-10">
            <h1 className="text-6xl font-bold">Notes</h1>
            <nav className="flex gap-4">
                <Link to="/mainpage">
                    <button className="text-white px-4 py-2 rounded hover:bg-gray-700">Home</button>
                </Link>
                <Link to="/addnotes">
                    <button className="text-white px-4 py-2 rounded hover:bg-gray-700">AddNotes</button>
                </Link>
                <Link to="/addcourses">
                    <button className="text-white px-4 py-2 rounded hover:bg-gray-700">AddCourses</button>
                </Link>
                <Link to="/listnotes">
                    <button className="text-white px-4 py-2 rounded hover:bg-gray-700">ListNotes</button>
                </Link>
            </nav>
        </header>
    );
};

export default Header;
