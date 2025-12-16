export function Status(props) {
  return (
    <section className="status-box" style={props.style}>
      <h2>{props.message}</h2>
      <p>{props.description}</p>
    </section>
  );
}
