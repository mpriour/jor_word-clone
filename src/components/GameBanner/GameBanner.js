import React from "react";

const buttonStyle = {
  border: 'solid 2px var(--color-gray-100)',
  padding: '0.5rem 2rem',
  marginBlock: '0.5rem'
}

function GameBanner({ won, guesses, answer, resetGame }) {
    return won ? (
        <div className="happy banner">
            <p>
                <strong>Congratulations!</strong> Got it in <strong>{guesses} guesses</strong>.
            </p>
            <button type="button" onClick={resetGame} style={buttonStyle}>
                Reset Game
            </button>
        </div>
    ) : (
        <div className="sad banner">
            <p>
                Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
            <button type="button" onClick={resetGame} style={buttonStyle}>
                Reset Game
            </button>
        </div>
    );
}

export default GameBanner;
