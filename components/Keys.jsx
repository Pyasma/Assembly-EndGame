import React from "react";
import clsx from "clsx";

export function Key({ onGuess, guessedletters, word, isGameOver }) {
  function getAlphabets() {
    const letters = [];
    for (let i = 0; i < 26; i++) {
      letters.push(String.fromCharCode(65 + i));
    }
    return letters;
  }

  const letters = getAlphabets();

  // Add keyboard event listener
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (isGameOver) return;
      const key = event.key.toUpperCase();
      // Check if the pressed key is a letter (A-Z)
      if (key.length === 1 && key >= "A" && key <= "Z") {
        if (typeof onGuess === "function") {
          onGuess(key);
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup: remove event listener when component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onGuess, isGameOver]);

  // Determine the class for each letter button
  function getButtonClass(letter) {
    const hasBeenGuessed = guessedletters.includes(letter);
    const isInWord = word.toUpperCase().includes(letter);

    return clsx("alphabet-btn", {
      correct: hasBeenGuessed && isInWord,
      wrong: hasBeenGuessed && !isInWord,
      disabled: isGameOver,
    });
  }

  return (
    <div className="alphabet-container">
      {letters.map((letter) => (
        <button
          onClick={() => {
            if (typeof onGuess === "function") {
              onGuess(letter);
            }
          }}
          key={letter}
          className={getButtonClass(letter)}
          disabled={isGameOver}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}
