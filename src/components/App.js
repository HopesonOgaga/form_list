import { useState } from "react";
import Logo from "./logo";
import Form from "./form";
import PackingList from "./packingList";


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
    const confirmed = window.confirm(
      "are you sure you want to delete all items"
    );

    if (confirmed) setItems([]);
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

// footer section
function Stats() {
  return (
    <footer className="stats">
      <em>💼 you have x items on your list and you already packed x (%)</em>
    </footer>
  );
}
