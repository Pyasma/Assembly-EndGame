export function GuessGame(props) {
  console.log("GuessGame props:", props);

  const letters = props.word.split("").map((letter, index) => (
    <span key={index} className="letter">
      {letter.toUpperCase()}
    </span>
  ));
  return <section className="word">{letters}</section>;
}
