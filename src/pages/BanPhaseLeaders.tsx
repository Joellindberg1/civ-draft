//React
import React from "react"
import { useNavigate } from "react-router-dom"

//Components
import Button from "../Components/Button/Button"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"

//Types


//Interfaces



const BanPhaseLeaders: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div>
          <Header text="Ban Leaders" className="banLeader"/>
          <Header text="You can ban X leaders for how many players you are" className="banLeader2"/>
          <Button text="Continue" onClick={() => navigate("/BanPhaseCivs")} className="banLeader" />
          <Footer />  
        </div>
      );
    };
    
    export default BanPhaseLeaders;