import React from "react";
import Header from "../components/Header";
import styles from "../components/Home/Home.module.css";
import zooImage from "/src/assets/zoo.png"

const Home = ({ title }) => {
    return (
        <>
            <Header pageTitle={title}/>;
            <div className={styles["welcome-container"]}>
                <div className={styles["welcome-text"]}>
                    <h2>Welcome to Australia Zoo</h2>
                    <p>Explore the wonders of the Australian Wildlife!</p>
                </div>
                <div className={styles["zoo-image-container"]}>
                    <img src={zooImage} className={styles["zoo-image"]} />
                </div>
            </div>
        </>
    );
};

export default Home;
