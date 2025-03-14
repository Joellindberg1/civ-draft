//React
import React, { useState } from "react";

//Styles
import styles from "./CivCard.module.scss"
import BanButton from "../BanButton/BanButton";
// import { antiquityCivs } from "../../data/antiquityCivs";
import {Civ} from "../../data/types"


interface CivCardProps {
    civ: Civ;
    onBan: (id: number) => void;
    isBanned: boolean;
}

const CivCard: React.FC<CivCardProps> = ({ civ, onBan, isBanned }) => {
  const [showInfo, setShowInfo] = useState(false);
    return (
      <div className={`${styles.civCard} ${isBanned ? styles.banned : ""}`}>
        <h3>{civ.name}</h3>
        <p>Type: {civ.type1} / {civ.type2}</p>
        <img 
        src={civ.icon} 
        alt={civ.name} 
        className={styles.civIcon} />
        <p>Start Bias: {civ.startBias.join(" & ")}</p>
        <BanButton isBanned={isBanned} onClick={() => onBan(civ.id)}/>
        <button className={styles.infoButton} onClick={() => setShowInfo(true)}>ℹ️</button>  
        {showInfo && (
          <div className={styles.popupOverlay} onClick={() => setShowInfo(false)}>
            <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={() => setShowInfo(false)}>X</button>
              <h2>{civ.name}</h2>
              <img src={civ.icon} alt={civ.name} className={styles.civIconPopup} />
              <p><strong>Type:</strong> {civ.type1} - {civ.type2}</p>
              <p><strong>Start Bias:</strong> {civ.startBias}</p>
              <p><strong>Attributes:</strong></p>
                {civ.attribute.map((attr, index) => (
                  <p key={index}>{attr}</p>
                ))}
            </div>
          </div>
        )}
        </div>
    );
  };
  
  export default CivCard;