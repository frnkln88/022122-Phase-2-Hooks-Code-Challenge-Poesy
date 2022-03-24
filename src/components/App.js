import React from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import { useEffect, useState } from 'react';

function App() {
  const poemAPI = "http://localhost:8004/poems"
  const [poems, setPoems] = useState([]);
  const [formShow, setFormShow] = useState(true);

  useEffect(() => {
    fetch(poemAPI)
      .then((res) => res.json())
      .then(setPoems);
  }, [])


  function addNewPoem(newContent) {
     let newPoem = ([...poems, newContent]);
     setPoems(newPoem)
  }


  return (
    <div className="app">
      <div className="sidebar">
        <button
        onClick={(e) => setFormShow(!formShow)}>Show/hide new poem form</button>
        {formShow ? <NewPoemForm addNewPoem={addNewPoem}/> : null}
      </div>
      <PoemsContainer poems={poems}/>
    </div>
  );
}

export default App;
