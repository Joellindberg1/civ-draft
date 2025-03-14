//React
import React, {useState} from "react"
import { useNavigate } from "react-router-dom"

//Components
import Button from "../Components/Button/Button"
import Header from "../Components/Header/Header"
import CivCard from "../Components/CivCard/CivCard"
import WarningInfo from "../Components/WarningInfo/WarningInfo"

//Data


//Context
import { useGameSetup } from "../context/GameSetupContext"

//Styles
import styles from "../styles/BanPhaseCivs.module.scss";
// import { antiquityCivs } from "../data/antiquityCivs"

//Types


//Interfaces



const BanPhaseCivs: React.FC = () => {
  const { antiquityCivs, maxBansCivs } = useGameSetup();
  const [bannedCivs, setBannedCivs] = useState<number[]>([]);
  const [warning, setWarning] = useState<string | null>(null);
  const navigate = useNavigate();
  const bansLeft = maxBansCivs - bannedCivs.length;
  const bansLeftText = bansLeft === 1 ? "ban" : "bans";

  const handleBanToggle = (id: number) => {
    setBannedCivs((prevBans) => {
      if (prevBans.includes(id)) {
        return prevBans.filter((civId) => civId !== id);
      } else if (prevBans.length < maxBansCivs) {
        return [...prevBans, id];
      } else {
        setWarning("You have reached the maximum number of bans!"); //varningsmeddelande
        setTimeout(() => setWarning(null), 3000); //varningen varar 3 sekunder
        return prevBans;
        
      }
    });
    console.log(antiquityCivs.length);
  };

    return (
      <>
        <header>
          <Header text="Ban Civs" className="banCivs"/>
          <Header text={`You have ${bansLeft} ${bansLeftText} left from a total of ${maxBansCivs} banned civs.`} className={styles.banCiv2}/>
        </header>
        {warning && < WarningInfo message = {warning}/>}
        <div className="content">
          <div className={styles.banPhaseContainer}>
            <div className={styles.civGrid}>
              {antiquityCivs.map((civ) => (
               <CivCard
                  key={civ.id}
                  civ={civ}
                  onBan={handleBanToggle}
                  isBanned={bannedCivs.includes(civ.id)}
                />
              ))}
            </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button text="Previous" onClick={() => navigate("/BanPhaseLeaders")} className="banCiv" />
          <Button text="Continue" onClick={() => navigate("/FinalDraft")} className="banCiv" />
        </div>
      </div>
      </>
      );
    };
    
    export default BanPhaseCivs;