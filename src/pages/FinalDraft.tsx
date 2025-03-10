//React
import React from "react"
import { useNavigate } from "react-router-dom"

//Components
import Button from "../Components/Button/Button"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"

//Types


//Interfaces



const FinalDraft: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div>
          <Header text="Finished Draft" className="finished"/>
          <Button text="One More Draft" onClick={() => navigate("/FinalDraft")} className="finished" />
          <Button text="Home" onClick={() => navigate("/Home")} className="finished" />
          <Footer />  
        </div>
      );
    };
    
    export default FinalDraft;