import {Header} from "./components/Header.tsx";
import "./tailwind.css"
import {Route, Routes} from "react-router";
import {Game} from "./components/Game.tsx";

function App() {

  return (

      <Routes>
          <Route path="/" element={<Header/>}/>
          <Route path="/game" element={<Game/>}/>
      </Routes>

  )
}

export default App
