import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

function Game() {
    const [answer, setAnswer] = useState(() => {
        // Pick a random word on every pageload
        const word = sample(WORDS);
        // To make debugging easier, we'll log the solution in the console.
        console.log({ answer: word });
        return word;
    });
    const [results, setResults] = useState([]);
    function handleReset() {
        setResults([]);
        const newWord = sample(WORDS)
        setAnswer(newWord);
        // To make debugging easier, we'll log the solution in the console.
        console.log({ answer: newWord });
    }
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
            <GuessInput
                handleGuess={handleGuess}
                results={results}
                answer={answer}
                resetGame={handleReset}
            />
        </>
    );
}

export default Game;
