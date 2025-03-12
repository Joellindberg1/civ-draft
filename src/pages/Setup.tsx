//React
import React from "react"
import { useNavigate } from "react-router-dom"

//Components
import Button from "../Components/Button/Button"
import Header from "../Components/Header/Header"
import InputField from "../Components/InputField/InputField"
import SetupInformation from "../Components/SetupInformation/SetupInformation"

//Data


//Types

//Styles
import styles from "../styles/Setup.module.scss";

//Interfaces



const Setup: React.FC = () => {
    const navigate = useNavigate();

    //State för input
    // const [players, setPlayers] = useState<number>(1);
    // const [leadersPerPlayer, setLeadersPerPlayer] = useState<number>(1);
    // const [civsPerPlayer, setCivsPerPlayer] = useState<number>(1);

    return (
        <>
          <Header text="Set up the draft" className="setup"/>
          <div className={styles.content}>
            <div className={styles.contentMain}>
              <div className={styles.contentInput}>
                <InputField 
                  label="How many players?" 
                  id="players" 
                  />
                <InputField 
                  label="How many leaders per player?" 
                  id="leadersPerPlayer" 
                  />
                <InputField 
                  label="How many civs per player?" 
                  id="civsPerPlayer" 
                  />
              </div>
              <div className={styles.contentInformation}>
                <SetupInformation
                  title="Leader Selection"
                  description="Leader description"
                />
                <SetupInformation
                  title="Civ Selection"
                  description="Leader description"
                />
                <SetupInformation
                  title="Draft Summary"
                  description="Leader description"
                />  
              </div>
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