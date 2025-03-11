//React
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

//Components
import Button from "../Components/Button/Button"
import Header from "../Components/Header/Header"
import InputField from "../Components/InputField/InputField"

//Types

//Styles
import styles from "../styles/Setup.module.scss";

//Interfaces



const Setup: React.FC = () => {
    const navigate = useNavigate();

    //State för input
    const [players, setPlayers] = useState<number>(2);
    const [leaders, setLeaders] = useState<number>(3);
    const [civs, setCivs] = useState<number>(3);

    return (
        <>
          <Header text="Set up the draft" className="setup"/>
          <div className={styles.content}>
            <div className={styles.contentInput}>
              <InputField label="How many players?" id="players" value={players} onChange={setPlayers} />
              <InputField label="How many leaders per player?" id="leaders" value={leaders} onChange={setLeaders} />
              <InputField label="How many civs per player?" id="civs" value={civs} onChange={setCivs} />
            </div>
            <div className={styles.contentInformation}>
                <p>Information gällande banfasen osv....</p>
            </div>
            <div className={styles.contentButton}>
              <Button text="Previous" onClick={() => navigate("/Home")} className="setup" />
              <Button text="Start Ban phase" onClick={() => navigate("/BanPhaseLeaders")} className="setup" /> 
            </div>
          </div>    
        </>
      );
    };
    
    export default Setup;