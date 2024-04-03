import React from "react";
import { mammals } from "../data/mammals";

const Mammals = () => {
    return (
        <div>
            {mammals.map((mammal, index) => (
                <div key={index}>
                    <img src={mammal.image} alt="" />
                    <h2>{mammal.name}</h2>
                    <p>Lifespan: {mammal.lifespan}</p>
                    <p>Group: {mammal.group}</p>
                    <p>Food: {mammal.food}</p>
                    <p>Description: {mammal.description}</p>
                    <p>Height: {mammal.height}</p>
                    <p>Weight: {mammal.weight}</p>
                    <p>Found: {mammal.found}</p>
                </div>
            ))}
        </div>
    );
}

export default Mammals;