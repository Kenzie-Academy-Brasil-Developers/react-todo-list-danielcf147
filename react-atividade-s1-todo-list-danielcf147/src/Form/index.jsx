import { useState } from "react";

const Form = ({ addToDo, toDo }) => {
  const [userInput, setUserInput] = useState("");
  return (
    <div className="input-box">
      <input
        type="text"
        className="input"
        placeholder="Nova Tarefa"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <button
        className="btn"
        type="submit"
        onClick={() => addToDo([userInput])}
      >
        Enviar
      </button>
    </div>
  );
};
export default Form;
