import React from "react";
import { GuessGame } from "./GuessGame.jsx";
import { NewGame } from "./NewGame.jsx";
import { Key } from "../components/Keys.jsx";

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
    setguessedLetters((prevletters) => [...prevletters, letter]);
  }
  const startNewGame = () => {
    const random = WORDS[Math.floor(Math.random() * WORDS.length)];
    setWord(random);
  };

  return (
    <div>
      <div className="hero">
        {LANGUAGES.map((lang) => (
          <p
            key={lang.name}
            className="body-html"
            style={{ backgroundColor: lang.color, color: lang.text }}
          >
            {lang.name}
          </p>
        ))}
      </div>
      <GuessGame word={word} />
      <Key onGuess={handleGuess} />
      <NewGame onNewGame={startNewGame} />
    </div>
  );
}
