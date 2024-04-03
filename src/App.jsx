import {useState} from "react";
import {Routes, Route, NavLink} from 'react-router-dom'
import Home from './pages/Home'
import Birds from './pages/Birds';
import Mammals from './pages/Mammals';
import Reptiles from './pages/Reptiles';
import Footer from "./components/Footer";
import './App.css';

function App() {
    return (
        <>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="Birds">Birds</NavLink>
            <NavLink to="Mammals">Mammals</NavLink>
            <NavLink to="Reptiles">Reptiles</NavLink>
        </nav>
            <Routes>
                <Route path="/" element={<Home title="Animals" />} />
                <Route path="Birds" element={<Home title="Birds" />} />
                <Route path="Mammals" element={<Home title="Mammals" />} />
                <Route path="Reptiles" element={<Home title="Reptiles" />} />
            </Routes>
            <Footer/>
        </>
    );
}

export default App;