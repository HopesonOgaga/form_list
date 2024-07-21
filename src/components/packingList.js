import React from "react";
import { useState } from "react";
import Item from "./Items";

// renders props
export default function PackingList({ items, onDeleteItem, onClearList }) {
    const [sort, setSortBy] = useState("input");
    const [clear, setClear] = useState("");
  
    let sortedItems;
  
    if (sort === "input") sortedItems = items;
  
    if (sort === "description")
      sortedItems = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
  
    if (sort === "packed")
      sortedItems = items
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));
    return (
      <div className="list">
        <ul className="">
          {sortedItems.map((items) => (
            <Item items={items} onDeleteItem={onDeleteItem} key={items.id} />
          ))}
        </ul>
        <div className="actions">
          <select
            value={sort}
            onChange={(e) => {
              setSortBy(e.target.value);
            }}
          >
            <option value="input">sort by input order </option>
            <option value="description">sort by description</option>
            <option value="packed ">sort by packed status</option>
          </select>
          <button className="" onClick={onClearList}>
            clear list
          </button>
        </div>
      </div>
    );
  }