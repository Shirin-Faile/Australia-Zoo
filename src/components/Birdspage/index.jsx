import styles from './Birdspage.module.css';

const MainBirds = ({ birds }) => {
    return (
        <div className={styles.mainBirds}>
            {birds.map((bird, index) => (
                <div key={index} className={styles.bird}>
                    <img src={bird.image} />
                    <div className={styles.details}>
                        <h3>{bird.name}</h3>
                        <p><span>Lifespan: </span>{bird.lifespan}</p>
                        <p><span>Group: </span>{bird.group}</p>
                        <p><span>Food: </span>{bird.food}</p>
                        <p><span>Description: </span>{bird.description}</p>
                        <p><span>Height: </span>{bird.height}</p>
                        <p><span>Weight: </span>{bird.weight}</p>
                        <p><span>Found: </span>{bird.found}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MainBirds;