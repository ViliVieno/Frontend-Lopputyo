import React from 'react';

const MainBody = () => {
    return (
        <main className="container mx-auto p-4">
            <section className= "text-white p-6">  
                <nav className="flex space-x-6">
                    <div className="flex space-x-4">
                        <button className="bg-gray-100 text-black px-4 py-2 rounded hover:bg-gray-200">Create notes for class</button>
                        <button className="bg-gray-100 text-black px-4 py-2 rounded hover:bg-gray-200">List notes</button>
                    </div>
                    <button className="bg-gray-100 text-black px-4 py-2 rounded hover:bg-gray-200 text-center;">Add courses</button>
                </nav>
            </section>
            {/* Add more sections as needed */}
        </main>
    );
};

export default MainBody;
