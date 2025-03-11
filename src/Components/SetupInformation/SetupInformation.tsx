//React
import React, { useState } from "react";
import styles from "./SetupInformation.module.scss";

//Data
import leaders from "../../data/leaders";
import antiquityCivs from "../../data/antiquityCivs";

//Style


//Interface



const SetupInformation: React.FC<SetupInformationProps> = ({ children }) => {
    // State för inputfält
    const [players, setPlayers] = useState<number>(2);
    const [leadersPerPlayer, setLeadersPerPlayer] = useState<number>(3);
    const [civsPerPlayer, setCivsPerPlayer] = useState<number>(2);
  
    // Totalt antal ledare och civs
    const totalLeaders = leaders.length; // 28 ledare
    const totalCivs = antiquityCivs.length; // 11 civs
  
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
      <div className={styles.infoBox}>
        <p className={styles.text}>
          There are <strong>{totalLeaders}</strong> leaders available. Each player can choose <strong>{leadersPerPlayer}</strong> leaders, meaning a total of <strong>{requiredLeaders}</strong> leaders will be picked.
          You can ban up to <strong>{maxBansLeaders}</strong> leaders ({Math.floor(maxBansLeaders / players)} per player).
        </p>
        <p className={styles.text}>
          There are <strong>{totalCivs}</strong> civilizations available. Each player can choose <strong>{civsPerPlayer}</strong> civs, meaning a total of <strong>{requiredCivs}</strong> civs will be picked.
          You can ban up to <strong>{maxBansCivs}</strong> civs ({maxBansCivs > 0 ? Math.floor(maxBansCivs / players) : 0} per player).
        </p>
  
        {/* Här kan Setup.tsx skicka in extra information */}
        {children}
      </div>
    );
  };
  
  export default SetupInformation;