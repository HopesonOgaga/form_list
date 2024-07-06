import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "shoe", quantity: 12, packed: false },
  { id: 4, description: "necklace", quantity: 12, packed: false },
  { id: 5, description: "books", quantity: 12, packed: true },
];

export default function App() {
  const [items, setItems] = useState([]);
  function handleItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div>
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <div>
      <h1 className=""> 🌴 far away 🌴</h1>
    </div>
  );
}

function Form({ onAddItems }) {
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
// renders props
function PackingList({ items, onDeleteItem }) {
  return (
    <div className="list">
      <ul className="">
        {items.map((items) => (
          <Item items={items} onDeleteItem={onDeleteItem} key={items.id} />
        ))}
      </ul>
    </div>
  );
}
// list rendering
function Item({ items, onDeleteItem }) {
  return (
    <li>
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
// footer section
function Stats() {
  return (
    <footer className="stats">
      <em>💼 you have x items on your list and you already packed x (%)</em>
    </footer>
  );
}
