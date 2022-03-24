import React from "react";
import { useState } from 'react';

function Poem({poem: {title, content, author}}) {
  const [read, setRead] = useState(true)

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>- By {author}</strong>
      </p>
      <button
      onClick={() => setRead(!read)}
      >Mark as {read ? "read" : "unread" }
      </button>
    </div>
  );
}

export default Poem;
