import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from '../../game-helpers';
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [results, setResults] = useState([]);
    function handleGuess(guess) {
        console.log({ guess });
        const result = checkGuess(guess, answer);
        setResults([
            ...results,
            {
                id: crypto.randomUUID(),
                result,
            },
        ]);
    }
    return (
        <>
            <GuessResults results={results} />
            <GuessInput handleGuess={handleGuess} results={results} answer={answer} />
        </>
    );
}

export default Game;
