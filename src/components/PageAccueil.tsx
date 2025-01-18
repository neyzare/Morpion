import circleIcon from "../assets/circle.svg";
import crossIcon from "../assets/cross.svg";
import morpion from "../assets/téléchargement.png";
import { useState } from "react";
import { useNavigate } from "react-router";
import "../css/App.css";

export function PageAccueil() {
    const navigate = useNavigate();
    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");

    const startGame = () => {
        if (!player1) {
            alert("Veuillez entrer le nom du premier joueur !");
            return;
        }

        if (!player2) {
            navigate("/game", { state: { player1, player2: "Ordinateur" } });
        } else {
            navigate("/game", { state: { player1, player2 } });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-6">
            <div className="flex space-x-4">
                <img src={circleIcon} alt="Circle Icon" height={45} width={45} />
                <img src={crossIcon} alt="Cross Icon" height={45} width={45} />
            </div>

            <div className="card w-[400px] shadow-xl bg-custom">
                <figure className="px-10 pt-10">
                    <img src={morpion} alt="Morpion" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center bg-custom">
                    <h2 className="card-title text-white">Morpion</h2>
                    <p className="text-white">Préparez-vous à un duel dans ce jeu de morpion où chaque coup peut vous mener à la victoire !</p>
                    <div className="card-actions flex flex-col space-y-4">
                        <input
                            type="text"
                            className="input input-bordered w-full text-white"
                            placeholder="Nom du joueur 1"
                            value={player1}
                            onChange={(e) => setPlayer1(e.target.value)}
                        />
                        <input
                            type="text"
                            className="input input-bordered w-full text-white"
                            placeholder="Nom du joueur 2 (laisser vide pour jouer contre l'ordinateur)"
                            value={player2}
                            onChange={(e) => setPlayer2(e.target.value)}
                        />
             
                        <button
                            className="btn btn-custom text-white hover:bg-opacity-80 w-full py-3"
                            onClick={startGame}
                        >
                            Démarrer le jeu
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}