//React
import React, {useState} from "react"
import { useNavigate } from "react-router-dom"

//Components
import Button from "../Components/Button/Button"
import Header from "../Components/Header/Header"
import LeaderCard from "../Components/LeaderCard/LeaderCard"
import WarningInfo from "../Components/WarningInfo/WarningInfo"

//Data
// import {Leader} from "../data/types"

//Context
import { useGameSetup } from "../context/GameSetupContext"

//Styles
import styles from "../styles/BanPhaseLeaders.module.scss";

//Types


//Interfaces



const BanPhaseLeaders: React.FC = () => {
  const { leaders, maxBansLeaders } = useGameSetup();
  const [bannedLeaders, setBannedLeaders] = useState<number[]>([]);
  const [warning, setWarning] = useState<string | null>(null);
  const navigate = useNavigate();
  const bansLeft = maxBansLeaders - bannedLeaders.length;
  const bansLeftText = bansLeft === 1 ? "ban" : "bans";

  const handleBanToggle = (id: number) => {
    setBannedLeaders((prevBans) => {
      if (prevBans.includes(id)) {
        return prevBans.filter((leaderId) => leaderId !== id);
      } else if (prevBans.length < maxBansLeaders) {
        return [...prevBans, id];
      } else {
        setWarning("You have reached the maximum number of bans!"); //varningsmeddelande
        setTimeout(() => setWarning(null), 3000); //varningen varar 3 sekunder
        return prevBans;
      }
    });
  };

    return (
      <>
        <header>
          <Header text="Ban Leaders" className="banLeader"/>
          <Header text={`You have ${bansLeft} ${bansLeftText} left from a total of ${maxBansLeaders} banned leaders.`} className={styles.banLeader2}/>
        </header>
        {warning && < WarningInfo message = {warning}/>}
        <div className="content">
          <div className={styles.banPhaseContainer}>
            <div className={styles.leaderGrid}>
              {leaders.map((leader) => (
               <LeaderCard
                  key={leader.id}
                  leader={leader}
                  onBan={handleBanToggle}
                  isBanned={bannedLeaders.includes(leader.id)}
                />
              ))}
            </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button text="Previous" onClick={() => navigate("/Setup")} className="banLeader" />
          <Button text="Continue" onClick={() => navigate("/BanPhaseCivs")} className="banLeader" />
        </div>
      </div>
      </>
      );
    };
    
    export default BanPhaseLeaders;