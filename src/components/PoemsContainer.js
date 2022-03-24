import React from "react";
import Poem from "./Poem";

function PoemsContainer({ poems } ) {

  const showPoems = poems.map(poem => {
    return <Poem
    key={poem.id}
    poem={poem} />
});

  return (
    <div className="poems-container">
      {showPoems}
    </div>
  );
}

export default PoemsContainer;
