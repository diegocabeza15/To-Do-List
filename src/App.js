import React, { useState } from 'react';
import './App.css'; // Importa los estilos aquí

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue.trim()]);
      setInputValue("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div className="card">
      <h1 className="title">Nuctasks</h1>
      <div className="input-container">
        <input
          type="text"
          className="input"
          placeholder="¿Qué tarea desea agregar?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="add-button" onClick={addTask}>
          Agregar
        </button>
      </div>
      <ul className="list">
        {tasks.map((task, index) => (
          <li className="list-item" key={index}>
            {task}
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Borrar
            </button>
          </li>
        ))}
      </ul>
      <button className="clear-button" onClick={clearTasks}>
        Borrar todas
      </button>
    </div>
  );
}

export default App;
