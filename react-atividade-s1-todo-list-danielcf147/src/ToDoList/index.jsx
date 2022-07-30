const ToDoList = ({ toDo, handleToDo }) => {
  return (
    <div>
      <ul className="ul-list">
        {toDo.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button className="btn2" onClick={() => handleToDo(item)}>
              {" "}
              Concluir Tarefa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ToDoList;
