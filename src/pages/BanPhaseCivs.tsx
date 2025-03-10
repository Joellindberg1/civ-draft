//React
import React from "react"
import { useNavigate } from "react-router-dom"

//Components
import Button from "../Components/Button/Button"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"

//Types


//Interfaces



const BanPhaseCivs: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div>
          <Header text="Ban Civs" className="banCivs"/>
          <Header text="You can ban X Civs for how many players you are" className="banCivs2"/>
          <Button text="Previous" onClick={() => navigate("/Home")} className="banCiv" />
          <Button text="Finish Draft" onClick={() => navigate("/FinalDraft")} className="banCiv" />
          <Footer />  
        </div>
      );
    };
    
    export default BanPhaseCivs;