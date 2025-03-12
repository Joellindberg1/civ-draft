//React
import React from "react";

//Data

//Context
import { useGameSetup } from "../../context/GameSetupContext";

//Style
import styles from "../SetupInformation/SetupInformation.module.scss";

//Interface
interface SetupInformationProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const SetupInformation: React.FC<SetupInformationProps> = ({ 
  title,
  description, 
}) => {
  const { players, leadersPerPlayer, civsPerPlayer, totalLeaders, totalCivs } = useGameSetup();
  
    //Hur många ledare och civs kommer att slumpas ut
    const requiredLeaders = players * leadersPerPlayer;
    const requiredCivs = players * civsPerPlayer;

    //Hur många bans kan man göra på civs och ledare utefter val. 
    const maxBansLeaders = Math.max(totalLeaders - requiredLeaders, 0);
    const maxBansCivs = Math.max(totalCivs - requiredCivs, 0);
    
    // // Begränsa maxvärdet i input-fälten
    // const maxLeadersPerPlayer = Math.floor(totalLeaders / players);
    // const maxCivsPerPlayer = Math.floor(totalCivs / players);

    return (
      <div className={styles.infoBox}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{description}</p>
          <>
            <p className={styles.text}>
              Total leaders: {totalLeaders}
              Total civs: {totalCivs}
              Leaders som slumpas ut: {requiredLeaders}
              Civs som slumpas ut: {requiredCivs}
              Max bans for leaders: {maxBansLeaders}
              Max bans for civs: {maxBansCivs}
            </p>

            <p className={styles.text}>
              
            </p>
          </>

      </div>
    );
  };
  
  export default SetupInformation;