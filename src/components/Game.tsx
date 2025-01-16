import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { InitialiseBoard } from "./InitialiseBoard";
import circleIcon from "../assets/circle.svg";
import crossIcon from "../assets/cross.svg";

export function Game() {
    const navigate = useNavigate();
    const location = useLocation();
    const { player1, player2 } = location.state || { player1: "Joueur 1", player2: "Joueur 2" };

    const [gameStarted, setGameStarted] = useState(false);
    const [scores, setScores] = useState({ [player1]: 0, [player2]: 0 });


    useEffect(() => {
        const savedPlayer1Score = localStorage.getItem(`victoire-${player1}`);
        const savedPlayer2Score = localStorage.getItem(`victoire-${player2}`);
        
        if (savedPlayer1Score) {
            setScores((prevScores) => ({ ...prevScores, [player1]: parseInt(savedPlayer1Score, 10) }));
        }
        if (savedPlayer2Score) {
            setScores((prevScores) => ({ ...prevScores, [player2]: parseInt(savedPlayer2Score, 10) }));
        }
    }, [player1, player2]);

    const updateScores = (winnerName) => {
        const newScores = { ...scores, [winnerName]: scores[winnerName] + 1 };
        setScores(newScores);

        localStorage.setItem(`victoire-${player1}`, newScores[player1]);
        localStorage.setItem(`victoire-${player2}`, newScores[player2]);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-6">
            <div className="flex space-x-4" onClick={() => navigate("/")}>
                <img src={circleIcon} alt="Circle Icon" height={45} width={45} />
                <img src={crossIcon} alt="Cross Icon" height={45} width={45} />
            </div>

            <div className="card w-96 shadow-xl bg-custom">
                <figure className="px-10 pt-10">
                    {gameStarted && (
                        <InitialiseBoard
                            player1={player1}
                            player2={player2}
                            updateScores={updateScores}
                        />
                    )}
                </figure>
                <div className="card-body items-center text-center bg-custom">
                    <h2 className="card-title text-white">Morpion</h2>
                    <p className="text-white">
                        {player1} (victoires : {scores[player1]}) VS {player2} (victoires :{" "}
                        {scores[player2]})
                        
                    </p>
                    <div className="card-actions flex flex-col space-y-2">
                        {!gameStarted && (
                            <button
                                className="btn btn-custom text-white hover:bg-opacity-80 w-full py-3"
                                onClick={() => setGameStarted(true)}
                            >
                                Start
                            </button>
                        )}
                        {gameStarted && (
                            <button
                                className="btn btn-secondary text-white hover:bg-opacity-80 w-full py-3"
                                onClick={() => setGameStarted(false)}
                            >
                                Reset
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}