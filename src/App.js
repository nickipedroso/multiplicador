import { useState } from "react";
import { FaGripLines } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import "./style.css";

import api from "./services/api";

function App() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});
  const [input2, setInput2] = useState("");
  const [cep2, setCep2] = useState({});
  const [input3, setInput3] = useState("");
  const [cep3, setCep3] = useState({});

  function multiplicacao() {
    setInput3(input * input2);
  }

  return (
    <div className="container">
      <h1 className="title">Multiplicador</h1>
      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite um número..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <button className="buttonSearch" onClick={multiplicacao}>
        <FaTimes size={25} color="FFF" />
      </button>
      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite um número..."
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          onKeyUp={(e) => {
            console.log(e.code);
            if (e.code == "Enter") {
              multiplicacao();
            }
          }}
        />
      </div>
      <div>
        <button className="buttonSearch" onClick={multiplicacao}>
          <FaGripLines size={25} color="FFF" />
        </button>
      </div>
      <div className="containerInput">
        <input
          type="text"
          placeholder="Resposta"
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
