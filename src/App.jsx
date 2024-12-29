import { useState } from 'react'
import './App.css'
import { Routes, Route, Outlet } from "react-router";
import AddNotes from './NewPage/AddNotes'
import Header from './MainSite/Header'
import Footer from './MainSite/Footer'
import MainPage from './NewPage/MainPage';
import ListNotes from './NewPage/ListNotes';
import AddCourses from './NewPage/AddCourses';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />} />
          <Route index element={<MainPage />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/addnotes" element={<AddNotes />} />
          <Route path="/addcourses" element={<AddCourses />} />
          <Route path="/listnotes" element={<ListNotes />} />
      </Routes>
      <Footer />
    </>
  )
}

function Layout() {
  return (
    <main className="flex-grow container mx-auto p-4 pt-24">
      <Outlet />
    </main>
  );
}

export default App
