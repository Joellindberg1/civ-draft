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
  children?: React.ReactNode;
}

const SetupInformation: React.FC<SetupInformationProps> = ({ 
  title, 
}) => {
  const { players, leadersPerPlayer, civsPerPlayer, totalLeaders, totalCivs } = useGameSetup();
  
    //Hur många ledare och civs kommer att slumpas ut
    const requiredLeaders = players * leadersPerPlayer;
    const requiredCivs = players * civsPerPlayer;

    //Hur många bans kan man göra på civs och ledare utefter val. 
    const maxBansLeaders = Math.max(totalLeaders - requiredLeaders, 0);
    const maxBansCivs = Math.max(totalCivs - requiredCivs, 0);

    const leaderBansPerPlayer = Math.floor(maxBansLeaders / players);
    const civBansPerPlayer = Math.floor(maxBansCivs / players);
    
    // // Begränsa maxvärdet i input-fälten
    // const maxLeadersPerPlayer = Math.floor(totalLeaders / players);
    // const maxCivsPerPlayer = Math.floor(totalCivs / players);

    return (
      <div className={styles.infoBox}>
        <div className={styles.inforowTop}>
          <span className={styles.infoLabel}>Leader pool: {totalLeaders}</span>
          <span className={styles.infoDivider}> - </span>
          <span className={styles.infoLabel}>Civ pool: {totalCivs}</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.infoList}>
          <div className={styles.infoRow}>
            <span className={styles.infoText}>Nr. of leaders that will be selected for draft:</span>
            <span className={styles.infoValue}>{requiredLeaders}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoText}>Nr. of civs that will be selected for draft:</span>
            <span className={styles.infoValue}>{requiredCivs}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoText}>Leader bans available:</span>
            <span className={styles.infoValue}>{maxBansLeaders}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoText}>Leader bans per player:</span>
            <span className={styles.infoValue}>{leaderBansPerPlayer}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoText}>Civ bans available:</span>
            <span className={styles.infoValue}>{maxBansCivs}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoText}>Civ bans per player:</span>
            <span className={styles.infoValue}>{civBansPerPlayer}</span>
          </div>
      </div>

    </div>
    );
  };
  
  export default SetupInformation;