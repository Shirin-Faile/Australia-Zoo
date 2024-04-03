import React from "react";
import { birds } from "../data/birds";

const Birds = () => {
    return (
        <div>
            {birds.map((bird, index) => (
                <div key={index}>
                    <img src={bird.image} alt="" />
                    <h2>{bird.name}</h2>
                    <p>Lifespan: {bird.lifespan}</p>
                    <p>Group: {bird.group}</p>
                    <p>Food: {bird.food}</p>
                    <p>Description: {bird.description}</p>
                    <p>Height: {bird.height}</p>
                    <p>Weight: {bird.weight}</p>
                    <p>Found: {bird.found}</p>
                </div>
            ))}
        </div>
    ); 
}

export default Birds;