import '../../assets/stylesheets/Scoreboard.css';

export default function Scoreboard({ currentScore, bestScore }) {
    return <div className="scoreboard">
        <div className="current-display">
            <span>Current:</span>
            <span className="current-score">{currentScore}</span>
        </div>
        <div className="best-display">
            <span>Best:</span>
            <div className="best-score">{bestScore}</div>
        </div>
    </div>
}