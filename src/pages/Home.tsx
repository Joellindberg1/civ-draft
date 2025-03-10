
//React
import React from "react"
import { useNavigate } from "react-router-dom"

//Components
import Button from "../Components/Button/Button"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"

//Types


//Interfaces




const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div>
          <Header text="Welcome to the Civ 7 Drafter" className="start"/>
          <div className="content">
            <p>You will first go through a setup phase where you enter how many players you are, how many leaders and civs you can choose from and what age you are playing.</p>
            <Button text="Start Draft" onClick={() => navigate("/setup")} className="start" />
          </div>
          <Footer />  
        </div>
      );
    };
    
    export default Home;