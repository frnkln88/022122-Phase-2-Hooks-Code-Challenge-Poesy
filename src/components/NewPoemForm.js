import React from "react";
import { useState } from "react";

function NewPoemForm({addNewPoem}) {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",

  })
  const handleForm = (e) => {
    e.preventDefault()
    fetch("http://localhost:8004/poems", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => addNewPoem(data))
    } 
  
  return (
    <form onSubmit={handleForm}className="new-poem-form">
      <input 
      type="text"
      name="title"
      placeholder="Title"
      value={formData.title}
      onChange={(e) => setFormData({
        ...formData, title: e.target.value
      })}
         />
      <input 
      type="text"
      name="author"
      placeholder="Author"
      value={formData.author}
      onChange={(e) => setFormData({
        ...formData, author: e.target.value
      })}
         />
          <textarea 
      type="text"
      name="content"
      placeholder="Write your masterpiece here..."
      rows={10}
      value={formData.content}
      onChange={(e) => setFormData({
        ...formData, content: e.target.value
      })}
         />
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;
