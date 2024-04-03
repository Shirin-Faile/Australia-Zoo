import React from "react";
import { reptiles } from "../data/reptiles";

const Reptiles = () => {
    return (
        <div>
            {reptiles.map((reptile, index) => (
                <div key={index}>
                    <img src={reptile.image} alt="" />
                    <h2>{reptile.name}</h2>
                        <p>Lifespan: {reptile.lifespan}</p>
                        <p>Group: {reptile.group}</p>
                        <p>Food: {reptile.food}</p>
                        <p>Description: {reptile.description}</p>
                        <p>Height: {reptile.height}</p>
                        <p>Weight: {reptile.weight}</p>
                        <p>Found: {reptile.found}</p>
                </div>
            ))}
        </div>
    );
}

export default Reptiles;