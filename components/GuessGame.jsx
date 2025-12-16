export function GuessGame({ word, guessedletters }) {
  const letters = word.split("").map((letter, index) => {
    const upperLetter = letter.toUpperCase();
    const isGuessed = guessedletters.includes(upperLetter);

    return (
      <span key={index} className="letter">
        {isGuessed ? upperLetter : ""}
      </span>
    );
  });

  return <section className="word">{letters}</section>;
}
