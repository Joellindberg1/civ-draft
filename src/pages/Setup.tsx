//React
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

//Components
import Button from "../Components/Button/Button"
import Header from "../Components/Header/Header"
import InputField from "../Components/InputField/InputField"

//Data
import {leaders} from "../data/leaders"
import {antiquityCivs} from "../data/antiquityCivs"

//Types

//Styles
import styles from "../styles/Setup.module.scss";

//Interfaces



const Setup: React.FC = () => {
    const navigate = useNavigate();

    //State för input
    const [players, setPlayers] = useState<number>(2);
    const [leadersPerPlayer, setLeadersPerPlayer] = useState<number>(3);
    const [civsPerPlayer, setCivsPerPlayer] = useState<number>(2);

    const totalLeaders = leaders.length;
    const totalCivs = antiquityCivs.length;

      // Beräkna hur många ledare och civs vi behöver
    const requiredLeaders = players * leadersPerPlayer;
    const requiredCivs = players * civsPerPlayer;

    // Hur många bans kan göras?
    const maxBansLeaders = Math.max(totalLeaders - requiredLeaders, 0);
    const maxBansCivs = Math.max(totalCivs - requiredCivs, 0);

    // Begränsa maxvärdet i input-fälten
    const maxLeadersPerPlayer = Math.floor(totalLeaders / players);
    const maxCivsPerPlayer = Math.floor(totalCivs / players);

    return (
        <>
          <Header text="Set up the draft" className="setup"/>
          <div className={styles.content}>
            <div className={styles.contentInput}>
              <InputField 
                label="How many players?" 
                id="players" 
                value={players} 
                onChange={setPlayers} />
              <InputField 
                label="How many leaders per player?" 
                id="leaders" 
                value={leadersPerPlayer} 
                onChange={(val) => setLeadersPerPlayer(Math.min(val, maxLeadersPerPlayer))} />
              <InputField 
                label="How many civs per player?" 
                id="civs" 
                value={civsPerPlayer} 
                onChange={(val) => setCivsPerPlayer(Math.min(val, maxCivsPerPlayer))} />
            </div>
            <div className={styles.contentInformation}>
                <p>
                There are {totalLeaders} leaders available. Each player can choose {leadersPerPlayer} leaders, meaning a total of {requiredLeaders} leaders will be picked.
                You can ban up to {maxBansLeaders} leaders ({Math.floor(maxBansLeaders / players)} per player).
                </p>
                <p>
                There are {totalCivs} civilizations available. Each player can choose {civsPerPlayer} civs, meaning a total of {requiredCivs} civs will be picked.
                You can ban up to {maxBansCivs} civs ({maxBansCivs > 0 ? Math.floor(maxBansCivs / players) : 0} per player).
                </p>
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