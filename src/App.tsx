import "./tailwind.css"
import {Route, Routes} from "react-router";
import {Game} from "./components/Game.tsx";
import { PageAccueil } from "./components/PageAccueil.tsx";
import { Classement } from "./components/Classement.tsx";

function App() {

  return (

      <Routes>
          <Route path="/" element={<PageAccueil/>}/>
          <Route path="/game" element={<Game/>}/>
          <Route path="/classement" element={<Classement/>}/>
      </Routes>

  )
}

export default App
