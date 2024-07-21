import React from "react";
import { useState } from "react";
import Item from "./Items";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  //  handles data colection

  // handles submission of form
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    setDescription("");
    setQuantity(1);
    onAddItems(newItem);
    console.log(newItem);
  }

  return (
    <div className="add-form">
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>what do you need for your trip 😎</h3>
        <select onChange={(e) => setQuantity(e.target.value)} value={quantity}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option key={num}>{num}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item ..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <button>add text</button>
      </form>
    </div>
  );
}
