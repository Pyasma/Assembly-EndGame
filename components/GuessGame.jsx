export function GuessGame({ word, guessedletters, isLoser }) {
  const letters = word.split("").map((letter, index) => {
    const upperLetter = letter.toUpperCase();
    const isGuessed = guessedletters.includes(upperLetter);
    const showLetter = isGuessed || isLoser;
    const missedLetter = isLoser && !isGuessed;

    return (
      <span
        key={index}
        className="letter"
        style={{ color: missedLetter ? "red" : "white" }}
      >
        {showLetter ? upperLetter : ""}
      </span>
    );
  });

  return <section className="word">{letters}</section>;
}
