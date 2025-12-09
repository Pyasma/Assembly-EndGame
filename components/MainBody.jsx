export function MainBody() {
  const languages = [
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
  return (
    <div className="hero">
      {languages.map((lang) => (
        <p
          key={lang.name}
          className="body-html"
          style={{
            backgroundColor: lang.color,
            color: lang.text,
          }}
        >
          {lang.name}
        </p>
      ))}
    </div>
  );
}
