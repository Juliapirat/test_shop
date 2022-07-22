import React, { useState } from "react";
import uuid from "react-uuid";
import ItemList from "./ItemsList.js";
import AddItem from "./AddItem.js";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState();
  const [desc, setDesc] = useState();

  const canSubmit = !!name && !!desc;

  function handleSubmit(e) {
    e.preventDefault();
    const info = { name, desc, id: uuid() };
    setItems([...items, info]);
    setName("");
    setDesc("");
  }

  function handleDeleteItem(id) {
    setItems((new_items) => {
      const idx = new_items.findIndex((item) => item.id === id);
      return [...new_items.slice(0, idx, ...new_items.slice(idx + 1))];
    });
  }

  function firstItem() {
    if (items.length === 0) {
      return (
        <div>
          <p className="ui-title">Добавьте первый товар</p>
        </div>
      );
    }
  }

  return (
    <>
      <AddItem
        onSubmitItem={handleSubmit}
        name={name}
        desc={desc}
        setName={setName}
        setDesc={setDesc}
        canSubmit={canSubmit}
      />
      {firstItem()}
      <ItemList items={items} OnDeleteItem={handleDeleteItem} />
    </>
  );
}
