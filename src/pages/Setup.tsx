//React
import React from "react"
import { useNavigate } from "react-router-dom"

//Components
import Button from "../Components/Button/Button"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"

//Types


//Interfaces



const Setup: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div>
          <Header text="Set up the draft" className="setup"/>
          <Button text="Previous" onClick={() => navigate("/Home")} className="setup" />
          <Button text="Start Ban phase" onClick={() => navigate("/BanPhaseLeaders")} className="setup" />
          <Footer />    
        </div>
      );
    };
    
    export default Setup;