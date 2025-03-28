//react
import React, { createContext, useContext, useState } from "react";

// Data
import {leaders} from "../data/leaders";
import {antiquityCivs} from "../data/antiquityCivs";
import { Civ, Leader} from "../data/types"

// interface
interface GameSetupContextType {
  players: number;
  leadersPerPlayer: number;
  civsPerPlayer: number;
  setPlayers: (value: number) => void;
  setLeadersPerPlayer: (value: number) => void;
  setCivsPerPlayer: (value: number) => void;
  totalLeaders: number;
  totalCivs: number;
  leaders: Leader[];
  antiquityCivs: Civ[];
  maxBansLeaders: number;
  maxBansCivs: number;
}

//Context
const GameSetupContext = createContext<GameSetupContextType | undefined>(undefined);

// Provider
export const GameSetupProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [players, setPlayers] = useState(2);
  const [leadersPerPlayer, setLeadersPerPlayer] = useState(4);
  const [civsPerPlayer, setCivsPerPlayer] = useState(3);

  const totalLeaders = leaders.length;
  const totalCivs = antiquityCivs.length;

  const maxBansLeaders = Math.max(leaders.length - (players * leadersPerPlayer), 0);
  const maxBansCivs = Math.max(antiquityCivs.length - (players * civsPerPlayer), 0);

  return (
    <GameSetupContext.Provider value={{ 
      players, setPlayers, 
      leadersPerPlayer, setLeadersPerPlayer, 
      civsPerPlayer, setCivsPerPlayer, 
      totalLeaders, totalCivs,
      leaders: leaders,
      antiquityCivs: antiquityCivs, 
      maxBansLeaders,
      maxBansCivs
    }}>
      {children}
    </GameSetupContext.Provider>
  );
};

//Hook för att använda Context
export const useGameSetup = () => {
  const context = useContext(GameSetupContext);
  if (!context) {
    throw new Error("useGameSetup must be used within a GameSetupProvider");
  }
  return context;
};
