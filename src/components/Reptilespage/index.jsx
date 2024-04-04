import styles from './Reptilespage.module.css';

const MainReptiles = ({ reptiles }) => {
    return(
        <div className={styles.mainReptiles}>
            {reptiles.map((reptile, index) => (
                <div key={index} className={styles.reptile}>
                    <img src={reptile.image} />
                    <div className={styles.details}>
                        <h3>{reptile.name}</h3>
                        <p><span>Lifespan: </span>{reptile.lifespan}</p>
                        <p><span>Group: </span>{reptile.group}</p>
                        <p><span>Food: </span>{reptile.food}</p>
                        <p><span>Description: </span>{reptile.description}</p>
                        <p><span>Height: </span>{reptile.height}</p>
                        <p><span>Weight: </span>{reptile.weight}</p>
                        <p><span>Found: </span>{reptile.found}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MainReptiles;