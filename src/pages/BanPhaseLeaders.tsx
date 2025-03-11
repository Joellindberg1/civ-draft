//React
import React from "react"
import { useNavigate } from "react-router-dom"

//Components
import Button from "../Components/Button/Button"
import Header from "../Components/Header/Header"

//Types


//Interfaces



const BanPhaseLeaders: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
          <header>
            <Header text="Ban Leaders" className="banLeader"/>
            <Header text="You can ban X leaders for how many players you are" className="banLeader2"/>
          </header>
          <div className="content">
            <Button text="Previous" onClick={() => navigate("/Setup")} className="banLeader" />
            <Button text="Continue" onClick={() => navigate("/BanPhaseCivs")} className="banLeader" />
          </div>
        </>
      );
    };
    
    export default BanPhaseLeaders;