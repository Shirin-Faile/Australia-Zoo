import {useState} from "react";
import {Routes, Route, Link} from 'react-router-dom'
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
            <Link to="/">Home Page</Link>
            <Link to="Birds">Birds</Link>
            <Link to="Mammals">Mammals</Link>
            <Link to="Reptiles">Reptiles</Link>
        </nav>
            <Routes>
                <Route path="/" element={<Home title="Home Page" />} />
                <Route path="Birds" element={<Home title="Birds" />} />
                <Route path="Mammals" element={<Home title="Mammals" />} />
                <Route path="Reptiles" element={<Home title="Reptiles" />} />
            </Routes>
            <Footer/>
        </>
    );
}

export default App;