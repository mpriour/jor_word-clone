import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess";

const resultRows = range(NUM_OF_GUESSES_ALLOWED);

function GuessResults({ results }) {
    return (
        <div className="guess-results">
            {resultRows.map((value) => (
                <Guess key={`row_${value}`} result={results[value]} />
            ))}
        </div>
    );
}

export default GuessResults;
