import React, { useState } from "react";

const AddForm = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);


  const handleAdd = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newItem = {
      id: Date.now(),
      value: text
    };

    setItems(prev => [...prev, newItem]);
    setText("");
  };


  const handleDelete = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl mb-4 font-bold">Todo List</h2>

      <form onSubmit={handleAdd}>
        <input
          className="border rounded-lg px-4 py-2 w-64"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter task"
        />
        <button
          className="border rounded-lg cursor-pointer ml-2 bg-blue-400 p-1 hover:bg-blue-500"
          type="submit"
        >
          Add
        </button>
      </form>

      <ul className="mt-5">
        {items.map((item) => (
          <li
            key={item.id}
            className="my-2 flex justify-center items-center gap-3"
          >
            {item.value}

            <button
              className="border rounded-lg bg-red-500 hover:bg-red-600 px-2 py-1 cursor-pointer text-white"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddForm;
