import React from "react";

interface HeaderProps {
    gameOn: JSX.Element;
    gameOff: JSX.Element;
    game: boolean; // Indique si le jeu est actif ou non
    navigateTo: (page: string) => void; // Fonction pour gérer la navigation
}

export function Header({ game, gameOn, gameOff, navigateTo }: HeaderProps) {
    return (
        <header className="flex justify-between items-center bg-gray-800 text-white px-6 py-4">
            <div
                className="cursor-pointer hover:underline"
                onClick={() => navigateTo("home")}
            >
                Home
            </div>
            <div>{game ? gameOn : gameOff}</div>
            <div
                className="cursor-pointer hover:underline"
                onClick={() => navigateTo("game")}
            >
                Game
            </div>
            <div
                className="cursor-pointer hover:underline"
                onClick={() => navigateTo("classement")}
            >
                Classement
            </div>
        </header>
    );
}