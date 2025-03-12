//React
// import react from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

//Components
import Footer from "./Components/Footer/Footer"

//context
import { GameSetupProvider } from "./context/GameSetupContext"

//Styles
import './App.scss'

//Pages
import Home from "./pages/Home"
import Setup from "./pages/Setup"
import BanPhaseLeaders from "./pages/BanPhaseLeaders"
import BanPhaseCivs from "./pages/BanPhaseCivs"
import FinalDraft from "./pages/FinalDraft"


//Types


//Interfaces



const App: React.FC = () => {
  return (
    <GameSetupProvider>
      <Router>
        <div className="app-container">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/setup" element={<Setup />} />
            <Route path="/banPhaseLeaders" element={<BanPhaseLeaders />} />
            <Route path="/banPhaseCivs" element={<BanPhaseCivs />} />
            <Route path="/FinalDraft" element={<FinalDraft />} />
          </Routes>
          <Footer/>
        </div>
      </Router>
    </GameSetupProvider>
  );
};

export default App
