import React from "react";
import styles from './Animaldetails.module.css';
import { Link } from "react-router-dom";

const AnimalDetails = ({ animal, onClose }) => {
  const handleGroupClick = () => {
    onClose();
  }
    return (
        <div className={styles['animal-details']}>
            <button onClick={onClose}>Close</button>
            <img src={animal.image} alt={animal.name} className={styles['animal-image']} />
            <h3>{animal.name}</h3>
            <p>{animal.summary}</p>
            <p>
                Group:{" "}
                <Link to={getGroupLink(animal.group)} onClick={handleGroupClick}>{animal.group}</Link>
            </p>
        </div>
  );
};

const getGroupLink = (groupName) => {
  const groupUrls = {
    Birds: "/birds",
    Mammals: "/mammals",
    Reptiles: "/reptiles"
  };
  return groupUrls[groupName] || "/";
};

export default AnimalDetails;
