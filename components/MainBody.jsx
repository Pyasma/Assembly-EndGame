import React from "react";
import { GuessGame } from "./GuessGame.jsx";
import { NewGame } from "./NewGame.jsx";
import { Key } from "../components/Keys.jsx";
import { Status } from "../components/Status.jsx";

const WORDS = ["apple", "grape", "mango", "peach"];
const LANGUAGES = [
  { name: "HTML", color: "orange", text: "black" },
  { name: "CSS", color: "blue", text: "white" },
  { name: "JavaScript", color: "gold", text: "black" },
  { name: "React", color: "#61dafb", text: "black" },
  { name: "Typescript", color: "#3178c6", text: "white" },
  { name: "Node.js", color: "green", text: "white" },
  { name: "Python", color: "#3572a5", text: "white" },
  { name: "Ruby", color: "#cc342d", text: "white" },
  { name: "Assembly", color: "gray", text: "white" },
];

export function MainBody() {
  const [word, setWord] = React.useState("apple");
  const [guessedletters, setguessedLetters] = React.useState([]);
  console.log(guessedletters);

  function handleGuess(letter) {
    // console.log("Attempting to guess:", letter);
    setguessedLetters((prevletters) => {
      const letterSet = new Set(prevletters);
      letterSet.add(letter);
      return Array.from(letterSet);
    });
  }
  const startNewGame = () => {
    const random = WORDS[Math.floor(Math.random() * WORDS.length)];
    setWord(random);
    setguessedLetters([]);
  };

  // Count wrong guesses (letters guessed that are NOT in the word)
  const wrongGuesses = guessedletters.filter(
    (letter) => !word.toUpperCase().includes(letter),
  );
  const wrongGuessCount = wrongGuesses.length;

  // Check if all letters in the word have been guessed
  const wordLetters = word.toUpperCase().split("");
  const isWinner = wordLetters.every((letter) =>
    guessedletters.includes(letter),
  );

  // Lose condition: 5 wrong guesses
  const isLoser = wrongGuessCount >= 8;

  // Game is over if won or lost
  const isGameOver = isWinner || isLoser;

  return (
    <div>
      {isGameOver &&
        (isWinner ? (
          <Status
            message="You win!"
            description="Well done! 🎉 Press New Game to play again."
            style={{ color: "white", backgroundColor: "green" }}
          />
        ) : (
          <Status
            message="You lose!"
            description="Better luck next time! Press New Game to try again."
            style={{ color: "white", backgroundColor: "red" }}
          />
        ))}
      <div className="hero">
        {LANGUAGES.map((lang, index) => {
          const isLost = index < wrongGuessCount;
          return (
            <p
              key={lang.name}
              className="body-html"
              style={{
                backgroundColor: lang.color,
                color: lang.text,
                textDecoration: isLost ? "line-through" : "none",
                opacity: isLost ? 0.5 : 1,
              }}
            >
              {lang.name}
            </p>
          );
        })}
      </div>
      <GuessGame word={word} guessedletters={guessedletters} />
      <Key
        onGuess={handleGuess}
        guessedletters={guessedletters}
        word={word}
        isGameOver={isGameOver}
      />

      <NewGame onNewGame={startNewGame} />
    </div>
  );
}
