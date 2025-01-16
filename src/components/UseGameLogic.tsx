import { useState } from "react";

export function useGameLogic() {
    const [victoiresX, setVictoiresX] = useState(0);
    const [victoiresO, setVictoiresO] = useState(0);
    const [matchNul, setMatchNul] = useState(0);

    const incrementeVictoireX = () => {setVictoiresX(victoiresX + 1)}
    const incrementeVictoireO = () => {setVictoiresO(victoiresO + 1)}
    const incrementeMatchNul = () => {setMatchNul(matchNul + 1)}

    return {
      victoiresX,
      victoiresO,
      matchNul,
      incrementeVictoireX,
      incrementeVictoireO,
      incrementeMatchNul
    }
     
    
}