import React, { useState } from "react";

import { GUESS_LENGTH, NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GameBanner from "../GameBanner";

function WordInput({ handleGuess, results, answer, resetGame }) {
    const [guess, setGuess] = useState("");
    const wonGame = results.at(-1)?.result.every(({ status }) => status === "correct");
    const finshed = wonGame || results.length === NUM_OF_GUESSES_ALLOWED;
    return (
        <form
            className="guess-input-wrapper"
            onSubmit={(evt) => {
                evt.preventDefault();
                handleGuess(guess);
                setGuess("");
            }}
        >
            <label htmlFor="guessInput" style={{ display: "block" }}>
                Enter guess:
            </label>
            {finshed && <GameBanner won={wonGame} guesses={results.length} answer={answer} resetGame={resetGame} />}
            <input
                type="text"
                id="guessInput"
                disabled={finshed}
                maxLength={GUESS_LENGTH}
                pattern={`[a-zA-Z]{${GUESS_LENGTH}}`}
                title={`Guess must be ${GUESS_LENGTH} letters long`}
                required={true}
                value={guess}
                onChange={({ target }) => {
                    setGuess(target.value.toUpperCase());
                }}
            />
        </form>
    );
}

export default WordInput;
