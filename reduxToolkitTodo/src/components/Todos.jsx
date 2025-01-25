import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, editTodo } from '../features/todo/todoSlice';

function Todos() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleSave = (id) => {
    dispatch(editTodo({ id, text: editText }));
    setEditId(null);
    setEditText('');
  };

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editId === todo.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="text-pink-400 px-2 py-1 rounded"
              />
            ) : (
              <div className='text-white'>{todo.text}</div>
            )}
            <div>
              {editId === todo.id ? (
                <button
                  onClick={() => handleSave(todo.id)}
                  className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md mr-2"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(todo)}
                  className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md mr-2"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
