import { useRef } from "react";
export function InputsAss() {
  const inputRef = useRef([]);

  function handleChange(e, index) {
    if (e.target.value.length === 1 && index < inputRef.current.length - 1) {
      inputRef.current[index + 1].focus();
    }
  }

  function onKeyDown(e, index) {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputRef.current[index - 1].focus();
    }
  }

  const totalInputs = 8;

  return (
    <div className="input-values">
      {Array.from({ length: totalInputs }).map((_, i) => (
        <input
          key={i}
          type="text"
          className="input-box"
          maxLength={1}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => onKeyDown(e, i)}
          ref={(el) => (inputRef.current[i] = el)}
        />
      ))}
    </div>
  );
}
