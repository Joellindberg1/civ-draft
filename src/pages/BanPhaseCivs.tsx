//React
import React from "react"
import { useNavigate } from "react-router-dom"

//Components
import Button from "../Components/Button/Button"
import Header from "../Components/Header/Header"


//Types


//Interfaces



const BanPhaseCivs: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
          <header>
            <Header text="Ban Civs" className="banCivs"/>
            <Header text="You can ban X Civs for how many players you are" className="banCivs2"/>
          </header>
          <div className="content">
            <Button text="Previous" onClick={() => navigate("/BanPhaseLeaders")} className="banCiv" />
            <Button text="Finish Draft" onClick={() => navigate("/FinalDraft")} className="banCiv" />
          </div>
        </>
      );
    };
    
    export default BanPhaseCivs;