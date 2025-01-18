import React, { useEffect, useState } from "react";

export function Classement() {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        const allScores = [];
        for (let key in localStorage) {
            if (key.startsWith("victoire-")) {
                const player = key.replace("victoire-", "");
                const score = parseInt(localStorage.getItem(key), 10) || 0;
                allScores.push({ player, score });
            }
        }

        // Trier les scores par ordre décroissant
        allScores.sort((a, b) => b.score - a.score);

        // Mettre à jour l'état
        setScores(allScores);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-6">
            <h1 className="text-2xl font-bold">Classement des Joueurs</h1>
            <table className="table-auto border-collapse border border-gray-800">
                <thead>
                    <tr>
                        <th className="border border-gray-600 px-4 py-2">Position</th>
                        <th className="border border-gray-600 px-4 py-2">Joueur</th>
                        <th className="border border-gray-600 px-4 py-2">Victoires</th>
                    </tr>
                </thead>
                <tbody>
                    {scores.map((entry, index) => (
                        <tr key={entry.player}>
                            <td className="border border-gray-600 px-4 py-2">{index + 1}</td>
                            <td className="border border-gray-600 px-4 py-2">{entry.player}</td>
                            <td className="border border-gray-600 px-4 py-2">{entry.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {scores.length === 0 && (
                <p className="text-gray-600">Aucun score enregistré pour l'instant.</p>
            )}
        </div>
    );
}