//React
import React from "react";

//Style
import './InputField.scss'

//Context
import { useGameSetup } from "../../context/GameSetupContext";

interface InputFieldProps {
    label: string;
    id: "players" | "leadersPerPlayer" | "civsPerPlayer";
}

const InputField: React.FC<InputFieldProps> = ({ label, id}) => {
  const { players, setPlayers, leadersPerPlayer, setLeadersPerPlayer, civsPerPlayer, setCivsPerPlayer, totalLeaders, totalCivs } = useGameSetup();

  let value: number, setValue: (val: number) => void, max: number;
  switch (id) {
    case "players":
      value = players;
      setValue = (val) => {
        setPlayers(val);
        if (leadersPerPlayer > Math.floor(totalLeaders / val)) {
          setLeadersPerPlayer(Math.floor(totalLeaders / val));
        }
        if (civsPerPlayer > Math.floor(totalCivs / val)) {
          setCivsPerPlayer(Math.floor(totalCivs / val));
        }
      };
      max = totalCivs; // 🎯 Max antal spelare är antal civs (minst 1 civ per spelare)
      break;
    case "leadersPerPlayer":
      value = leadersPerPlayer;
      setValue = setLeadersPerPlayer;
      max = Math.floor(totalLeaders / players);
      break;
    case "civsPerPlayer":
      value = civsPerPlayer;
      setValue = setCivsPerPlayer;
      max = Math.floor(totalCivs / players);
      break;
  }

    return (
      <div className="inputContainer">
        <label className="label" htmlFor={id}>{label}</label>
        <input
          id={id}  
          type="number"
          className="input"
          value={value}
          onChange={(e) => {
            let val = Number(e.target.value);
            if (val > max) val = max; // 🎯 Begränsa maxvärde
            if (val < 1) val = 1; // 🎯 Se till att min är 1
            setValue(val);
          }}
          min={1}
          max={max}
        />
      </div>
    );
  };

export default InputField;
