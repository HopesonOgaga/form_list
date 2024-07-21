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
  function handleClearList() {
    setItems([]);
  }
  return (
    <div>
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onClearList={handleClearList}
      />
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
function PackingList({ items, onDeleteItem , onClearList}) {
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
// list rendering
function Item({ items, onDeleteItem }) {
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
// footer section
function Stats() {
  return (
    <footer className="stats">
      <em>💼 you have x items on your list and you already packed x (%)</em>
    </footer>
  );
}
