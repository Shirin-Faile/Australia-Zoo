import React from "react";
import { useLocation } from "react-router-dom";
import styles from './Sidebar.module.css';

const Sidebar = ({ animals, onAnimalClick }) => {
    const location = useLocation();
    const currentRoute = location.pathname.substring(1);

    const filteredAnimals = currentRoute === "" ? animals : animals.filter(animal => animal.group.toLowerCase() === currentRoute.toLowerCase());

    return (
        <div className={styles.sidebar}>
            <h2>Animals</h2>
            <ul>
                {filteredAnimals.map((animal, index) => (
                    <li key={index} onClick={() => onAnimalClick(animal)}>
                        <img src={animal.image} alt={animal.name} />
                        <span>{animal.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;





