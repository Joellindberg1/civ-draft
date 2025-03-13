//React
import React, {useState} from "react"
import { useNavigate } from "react-router-dom"

//Components
import Button from "../Components/Button/Button"
import Header from "../Components/Header/Header"
import LeaderCard from "../Components/LeaderCard/LeaderCard"

//Data
import {Leader} from "../data/types"

//Context
import { useGameSetup } from "../context/GameSetupContext"

//Styles
import styles from "../styles/BanPhaseLeaders.module.scss";

//Types


//Interfaces



const BanPhaseLeaders: React.FC = () => {
  const { leaders, maxBansLeaders } = useGameSetup(); // 📌 Hämta leaders-arrayen från Context
  const [bannedLeaders, setBannedLeaders] = useState<number[]>([]);
  const navigate = useNavigate();
  const bansLeft = maxBansLeaders - bannedLeaders.length;
  const bansLeftText = bansLeft === 1 ? "ban" : "bans";

  const handleBanToggle = (id: number) => {
    setBannedLeaders((prevBans) =>
      prevBans.includes(id) ? prevBans.filter((leaderId) => leaderId !== id) : [...prevBans, id]
    );
  };

    return (
      <>
        <header>
          <Header text="Ban Leaders" className="banLeader"/>
          <Header text={`You have ${bansLeft} ${bansLeftText} left from a total of ${maxBansLeaders} banned leaders.`} className={styles.banLeader2}/>
        </header>
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