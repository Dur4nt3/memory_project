import { charactersSquares } from '../utilities/charactersSquares';

import '../../assets/stylesheets/CharacterGrid.css';
import React from 'react';

export default function CharacterGrid({ characterOrder, updateGameStatus }) {
    return (
        <div className='character-grid'>
            {characterOrder.map((character) => {
                let characterSquare = charactersSquares[character];
                characterSquare = React.cloneElement(characterSquare, {
                    key: character,
                    onClick: () => updateGameStatus(character),
                    tabIndex: 0,
                    onKeyPress: (event) => {
                        if (event.key === 'Enter') {
                            updateGameStatus(character);
                        }
                    },
                });

                return characterSquare;
            })}
        </div>
    );
}
