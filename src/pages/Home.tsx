
//React
import React from "react"
import { useNavigate } from "react-router-dom"

//Components
import Button from "../Components/Button/Button"
import Header from "../Components/Header/Header"


//Types

//Styles
import styles from "../styles/Home.module.scss";

//Interfaces




const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
          <Header text="Welcome to the Civ 7 Drafter" className="start"/>
          <div className={styles.content}>
            <p className={styles.contentText}>You will first go through a setup phase where you enter how many players you are, how many leaders and civs you can choose from and what age you are playing.</p>
            <Button text="Start Draft" onClick={() => navigate("/setup")} className={styles.btnStart} />
          </div> 
        </>
      );
    };
    
    export default Home;