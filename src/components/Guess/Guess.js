import React from "react";
import { GUESS_LENGTH } from "../../constants";
import { range } from "../../utils";

function Guess({ result: resultObj }) {
    resultObj ??= { id: crypto.randomUUID(), result: null };
    const { result, id } = resultObj;
    return (
        <p className="guess">
            {result
                ? result.map(({ status, letter }, index) => (
                      <span key={`${index}_${id}`} className={`cell ${status}`}>
                          {letter}
                      </span>
                  ))
                : range(GUESS_LENGTH).map((value) => <span key={value} className="cell"></span>)}
        </p>
    );
}

export default Guess;
