
import React from "react";
import styles from './Sidebar.module.css'

const Sidebar = ({ animals, onAnimalClick }) => {
    return (
        <div className={styles.sidebar}>
            <h2>Animals</h2>
            <ul>
                {animals.map((animal, index) => (
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

