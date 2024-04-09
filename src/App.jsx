import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import MainBirds from './components/Birdspage';
import { birds } from './data/birds';
import MainMammals from './components/Mammalspage';
import { mammals } from './data/mammals';
import MainReptiles from './components/Reptilespage';
import { reptiles } from './data/reptiles';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AnimalDetails from './components/Animaldetails';
import Footer from './components/Footer';
import './App.css';

function App() {
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const [ setMainContentVisible ] = useState(true);

    const handleAnimalClick = (animal) => {
        setSelectedAnimal(animal);
        setMainContentVisible(false);
    };

    const handleCloseDetails = () => {
        setSelectedAnimal(null);
        setMainContentVisible(true);
    };

    return (
        <>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="Birds">Birds</NavLink>
                <NavLink to="Mammals">Mammals</NavLink>
                <NavLink to="Reptiles">Reptiles</NavLink>
            </nav>
            <Header />
            <div className="container">
                <Sidebar
                    animals={[...birds, ...mammals, ...reptiles]}
                    onAnimalClick={handleAnimalClick}
                />
                {!selectedAnimal && (
                    <div className="main-content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="Birds" element={<MainBirds birds={birds} />} />
                            <Route path="Mammals" element={<MainMammals mammals={mammals} />} />
                            <Route path="Reptiles" element={<MainReptiles reptiles={reptiles} />} />
                        </Routes>
                    </div>
                )}
                {selectedAnimal && (
                    <AnimalDetails animal={selectedAnimal} onClose={handleCloseDetails} />
                )}
            </div>
            <Footer />
        </>
    );
}

export default App;
