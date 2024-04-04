import styles from './Mammalspage.module.css';

const MainMammals = ({ mammals }) => {
    return (
        <div className={styles.mainMammals}>
            {mammals.map((mammal, index) => (
                <div key={index} className={styles.mammal}>
                    <img src={mammal.image} />
                    <div className={styles.details}>
                        <h3>{mammal.name}</h3>
                        <p><span>Lifespan: </span>{mammal.lifespan}</p>
                        <p><span>Group: </span>{mammal.group}</p>
                        <p><span>Food: </span>{mammal.food}</p>
                        <p><span>Description: </span>{mammal.description}</p>
                        <p><span>Height: </span>{mammal.height}</p>
                        <p><span>Weight: </span>{mammal.weight}</p>
                        <p><span>Found: </span>{mammal.found}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MainMammals;