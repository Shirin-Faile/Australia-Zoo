import {useState} from "react";
import {Routes, Route, NavLink} from 'react-router-dom'
import Home from './pages/Home'
import MainBirds from "./components/Birdspage";
import { birds } from "./data/birds"
import MainMammals from "./components/Mammalspage";
import { mammals } from "./data/mammals";
import MainReptiles from "./components/Reptilespage";
import { reptiles } from "./data/reptiles";
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
                <Route path="Birds" element={<MainBirds birds={birds} />} />
                <Route path="Mammals" element={<MainMammals mammals={mammals} />} />
                <Route path="Reptiles" element={<MainReptiles reptiles={reptiles} />} />
            </Routes>
            <Footer/>
        </>
    );
}

export default App;