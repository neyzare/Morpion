import React, { useState } from "react";
import "../css/game.css";
import rond from "../assets/circle.svg";
import crois from "../assets/cross.svg";

export function InitialiseBoard({ player1, player2, updateScores }) {
    const [board, setBoard] = useState(Array(3).fill(null).map(() => Array(3).fill(null)));
    const [isXNext, setIsXNext] = useState(true);
    const [winner, setWinner] = useState(null);

    const handleClick = (i, j) => {
        if (board[i][j] !== null || winner) return;

        const newBoard = board.map((row, rowIndex) =>
            rowIndex === i
                ? row.map((cell, colIndex) => (colIndex === j ? (isXNext ? "X" : "O") : cell))
                : row
        );

        setBoard(newBoard);
        setIsXNext(!isXNext);
        checkWinner(newBoard);
    };

    const checkWinner = (newBoard) => {
        let winner = null;
        for (let i = 0; i < 3; i++) {
            if (newBoard[i][0] && newBoard[i][0] === newBoard[i][1] && newBoard[i][0] === newBoard[i][2]) {
                winner = newBoard[i][0];
                break;
                /* declareWinner(newBoard[i][0]);
                return; */
            }
            if (newBoard[0][i] && newBoard[0][i] === newBoard[1][i] && newBoard[0][i] === newBoard[2][i]) {
                winner = newBoard[0][i];
                /* declareWinner(newBoard[0][i]);
                return; */
            }
        }
        if (winner) return declareWinner(winner);
        if (newBoard[0][0] && newBoard[0][0] === newBoard[1][1] && newBoard[0][0] === newBoard[2][2]) {
            declareWinner(newBoard[0][0]);
            return;
        }
        if (newBoard[0][2] && newBoard[0][2] === newBoard[1][1] && newBoard[0][2] === newBoard[2][0]) {
            declareWinner(newBoard[0][2]);
            return;
        }

        if (newBoard.every((row) => row.every((cell) => cell !== null))) {
            setWinner("Nul");
        }
    };

    const declareWinner = (player) => {
        const winnerName = player === "X" ? player1 : player2;
        setWinner(winnerName);
        updateScores(winnerName); 
    };

    const resetGame = () => {
        setBoard(Array(3).fill(null).map(() => Array(3).fill(null)));
        setWinner(null);
        setIsXNext(true);
    };

    const renderBoard = () => {
        return board.map((row, i) => (
            <tr key={`row-${i}`}>
                {row.map((cell, j) => (
                    <td
                        key={`cell-${i}-${j}`}
                        onClick={() => handleClick(i, j)}
                        style={{
                            width: "100px",
                            height: "100px",
                            textAlign: "center",
                            border: "1px solid #000",
                            verticalAlign: "middle",
                            position: "relative",
                        }}
                    >
                        {null !== cell && (
                            <img
                            src={cell === "X" ? crois : rond}
                            alt="Croix"
                            style={{
                                width: "80px",
                                height: "80px",
                                objectFit: "contain",
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                            }}
                            />
                        )}
                    </td>
                ))}
            </tr>
        ));
    };

    return (
        <div>
            <table>
                <tbody>{renderBoard()}</tbody>
            </table>
            {winner && (
                <div>
                    {winner === "Nul" ? <p>Match nul !</p> : <p>Le gagnant est : {winner}</p>}
                    <button onClick={resetGame}>Recommencer</button>
                </div>
            )}
            {!winner && <p>Tour de : {isXNext ? player1 : player2}</p>}
        </div>
    );
}