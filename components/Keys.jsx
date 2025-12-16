import React from "react";

export function Key({ onGuess, guessedletters, word, getBtnColor }) {
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
      const key = event.key.toUpperCase();
      // console.log("Key pressed:", key);
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
  }, [onGuess]);

  return (
    <div className="alphabet-container">
      {letters.map((letter) => (
        <button
          onClick={() => {
            // console.log("Key clicked:", letter);
            if (typeof onGuess === "function") {
              onGuess(letter);
            }
          }}
          key={letter}
          className="alphabet-btn"
          style={{
            backgroundColor: getBtnColor(letter, guessedletters, word),
          }}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}
