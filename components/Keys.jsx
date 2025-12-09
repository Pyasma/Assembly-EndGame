export function Key() {
  function getAlphabets() {
    const letters = [];
    for (let i = 0; i < 26; i++) {
      letters.push(String.fromCharCode(65 + i));
    }
    return letters;
  }
  const letters = getAlphabets();
  return (
    <div className="alphabet-container">
      {letters.map((letter) => (
        <button key={letter} className="alphabet-btn">
          {letter}
        </button>
      ))}
    </div>
  );
}
