//React
import React, { useState } from "react";

//Styles
import styles from "./LeaderCard.module.scss"
import BanButton from "../BanButton/BanButton";

interface Leader {
  id: number;
  name: string;
  type1: string;
  type2: string;
  startBias: string[];
  attribute: string[];
  agenda: { name: string; effect: string };
  icon?: string;
  }

interface LeaderCardProps {
    leader: Leader;
    onBan: (id: number) => void;
    isBanned: boolean;
}

const LeaderCard: React.FC<LeaderCardProps> = ({ leader, onBan, isBanned }) => {
  const [showInfo, setShowInfo] = useState(false);
    return (
      <div className={`${styles.leaderCard} ${isBanned ? styles.banned : ""}`}>
        <h3>{leader.name}</h3>
        <p>Type: {leader.type1} / {leader.type2}</p>
        <img 
        src={leader.icon} 
        alt={leader.name} 
        className={styles.leaderIcon} />
        <p>Start Bias: {leader.startBias.join(" & ")}</p>
        <BanButton isBanned={isBanned} onClick={() => onBan(leader.id)}/>
        <button className={styles.infoButton} onClick={() => setShowInfo(true)}>ℹ️</button>  
        {showInfo && (
          <div className={styles.popupOverlay} onClick={() => setShowInfo(false)}>
            <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={() => setShowInfo(false)}>X</button>
              <h2>{leader.name}</h2>
              <img src={leader.icon} alt={leader.name} />
              <p><strong>Type:</strong> {leader.type1} - {leader.type2}</p>
              <p><strong>Start Bias:</strong> {leader.startBias}</p>
              <p><strong>Attributes:</strong></p>
                {leader.attribute.map((attr, index) => (
                  <p key={index}>{attr}</p>
                ))}
              <p><strong>Agenda:</strong></p> 
              <p><strong>{leader.agenda.name}</strong> - {leader.agenda.effect}</p>
            </div>
          </div>
        )}
        </div>
    );
  };
  
  export default LeaderCard;