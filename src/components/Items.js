import React from "react";
import { useState } from "react";

// list rendering
export default function Item({ items, onDeleteItem }) {
  return (
    <li>
      <input type="checkbox" value={items.packed} onChange={() => {}}></input>
      <span
        className=""
        style={items.packed ? { textDecoration: "line-through" } : {}}
      >
        {items.quantity} {items.description}
      </span>
      <button onClick={() => onDeleteItem(items.id)}>❌</button>
    </li>
  );
}
