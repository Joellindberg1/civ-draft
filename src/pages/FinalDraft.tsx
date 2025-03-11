//React
import React from "react"
import { useNavigate } from "react-router-dom"

//Components
import Button from "../Components/Button/Button"
import Header from "../Components/Header/Header"


//Types


//Interfaces



const FinalDraft: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
          <Header text="Finished Draft" className="finished"/>
          <div className="content">
            <Button text="One More Draft" onClick={() => navigate("/FinalDraft")} className="finished" />
            <Button text="Home" onClick={() => navigate("/Home")} className="finished" />
          </div>
        </>
      );
    };
    
    export default FinalDraft;