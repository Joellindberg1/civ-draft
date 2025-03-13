//React
// import React, { useState } from "react";

//Styles
import styles from "./LeaderCard.module.scss"
import BanButton from "../BanButton/BanButton";

interface Leader {
    id: number;
    name: string;
    type1: string;
    type2: string;
    startBias: string;
    icon: string; 
  }

interface LeaderCardProps {
    leader: Leader;
    onBan: (id: number) => void;
    isBanned: boolean;
}

const LeaderCard: React.FC<LeaderCardProps> = ({ leader, onBan, isBanned }) => {
    return (
      <div className={`${styles.leaderCard} ${isBanned ? styles.banned : ""}`}>
        <h3>{leader.name}</h3>
        <p>Type: {leader.type1} / {leader.type2}</p>
        <img 
        src={leader.icon} 
        alt={leader.name} 
        className={styles.leaderIcon} />
        <p>Start Bias: {leader.startBias}</p>
        <BanButton isBanned={isBanned} onClick={() => onBan(leader.id)}/>
      </div>
    );
  };
  
  export default LeaderCard;