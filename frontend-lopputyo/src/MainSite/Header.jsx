import React from 'react';

const Header = () => {
    return (
        <header className="bg-blue-900 text-white p-6 flex items-center justify-between fixed w-full top-0 left-0 z-10">
            <h1 className="text-6xl font-bold">Notes</h1>
            <nav className="flex gap-4">
                <a href="#" className="text-white px-4 py-2 rounded hover:bg-gray-700">Home</a>
                <a href="#" className="text-white px-4 py-2 rounded hover:bg-gray-700">About</a>
                <a href="#" className="text-white px-4 py-2 rounded hover:bg-gray-700">Services</a>
                <a href="#" className="text-white px-4 py-2 rounded hover:bg-gray-700">Contact</a>
            </nav>
        </header>
    );
};

export default Header;
