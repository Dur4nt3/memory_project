function determineText(winLast, alreadySelected) {
    if (winLast === null || alreadySelected !== 0) {
        return 'Click any image to play'
    }

    if (winLast === true) {
        return 'You won!'
    }

    return 'You lost...'
}

export default function GameNotice({ winLast, alreadySelected }) {
    return (
        <div className='game-notice'>
            <span>{determineText(winLast, alreadySelected)}</span>
        </div>
    );
}
