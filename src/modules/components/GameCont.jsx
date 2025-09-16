import { useState, useEffect, useRef } from 'react';
import shuffledCharacters from '../utilities/shuffledCharacters';
import fetchGif from '../utilities/fetchGif';
import handleResponse from '../utilities/handleResponse';

import CharacterGrid from './CharacterGrid';
import Scoreboard from './Scoreboard';
import GameNotice from './GameNotice';
import GifCont from './GifCont';

export default function GameCont() {
    const [alreadySelected, setAlreadySelected] = useState([]);
    const [bestScore, setBestScore] = useState(0);
    const [winLast, setWinLast] = useState(null);
    const imgRef = useRef(null);

    useEffect(() => {
        let ignore = false;
        if (alreadySelected.length === 0 && winLast === null) {
            fetchGif('initial').then((value) => {
                handleResponse(value, imgRef, ignore);
            });
        } else if (alreadySelected.length !== 0) {
            fetchGif('round').then((value) => {
                handleResponse(value, imgRef, ignore);
            });
        } else if (winLast === true) {
            fetchGif('win').then((value) => {
                handleResponse(value, imgRef, ignore);
            });
        } else if (winLast === false) {
            fetchGif('lose').then((value) => {
                handleResponse(value, imgRef, ignore);
            });
        }

        return () => (ignore = true);
    }, [alreadySelected, winLast]);

    function updateGameStatus(characterClicked) {
        if (alreadySelected.includes(characterClicked)) {
            if (alreadySelected.length > bestScore) {
                setBestScore(alreadySelected.length);
            }
            setWinLast(false);
            setAlreadySelected([]);
            return;
        }

        if (alreadySelected.length === 9) {
            setBestScore(10);
            setWinLast(true);
            setAlreadySelected([]);
        } else {
            const newSelected = [...alreadySelected, characterClicked];
            setAlreadySelected(newSelected);
        }
    }

    return (
        <div className='game-cont'>
            <Scoreboard
                currentScore={alreadySelected.length}
                bestScore={bestScore}
            />
            <GameNotice
                winLast={winLast}
                alreadySelected={alreadySelected.length}
            />
            <GifCont ref={imgRef} />
            <CharacterGrid
                characterOrder={shuffledCharacters()}
                updateGameStatus={updateGameStatus}
            />
        </div>
    );
}
