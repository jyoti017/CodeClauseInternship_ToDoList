"use client"
import React, { useState } from 'react';
const Page = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { task, description }]);
    setTask("");
    setDescription("");
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  const completedHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask[i].completed = true;
    setMainTask(copyTask);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-200">
        <h1 className='bg-gradient-to-r from-pink-600 via-purple-800 to-indigo-900 text-white p-5 text-5xl font-bold text-center'>My To Do List</h1>
        <form className="flex flex-col sm:flex-row justify-center items-center" onSubmit={submitHandler}>
          <input
            type="text"
            className='text-2xl border-none m-5 px-4 py-2 rounded'
            placeholder="Enter your task here"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <input
            type="text"
            className='text-2xl border-none m-5 px-4 py-2 rounded'
            placeholder="Enter description here"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <button
            className="bg-gradient-to-r from-teal-600 via-teal-400 to-teal-600 hover:from-teal-800 hover:via-teal-600 hover:to-teal-800 text-white px-4 py-2 text-2xl font-bold rounded m-5 hover:drop-shadow-xl"
          >
            Add task
          </button>
        </form>

        <div className='p-8 bg-gradient-to-r from-purple-50 via-purple-50 to-purple-50 overflow-x-auto'>
          {mainTask.length > 0 ? (
            <table className="w-full border-separate border-lg rounded-lg">
              <thead>
                <tr>
                  <th className="border-lg rounded-lg p-4 text-xl font-bold text-center bg-gradient-to-r from-indigo-200 via-indigo-100 to-indigo-200 sm:w-1/3">Task</th>
                  <th className="border-lg rounded-lg p-4 text-xl font-bold text-center bg-gradient-to-r from-indigo-200 via-indigo-100 to-indigo-200 sm:w-1/3">Task Description</th>
                  <th className="border-lg rounded-lg p-4 text-xl font-bold text-center bg-gradient-to-r from-indigo-200 via-indigo-100 to-indigo-200 sm:w-1/3">Status</th>
                </tr>
              </thead>
              <tbody>
                {mainTask.map((t, i) => (
                  <tr key={i} className="border-lg rounded-lg text-center h-20">
                    <td className={`border-lg rounded-lg p-4 bg-gradient-to-r from-indigo-200 via-indigo-100 to-indigo-200 ${t.completed ? 'bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 line-through' : ''}`}>{t.task}</td>
                    <td className={`border-lg rounded-lg p-4 bg-gradient-to-r from-indigo-200 via-indigo-100 to-indigo-200 ${t.completed ? 'bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 line-through' : ''}`}>{t.description}</td>
                    <td className="border-lg rounded-lg p-4 bg-gradient-to-r from-indigo-200 via-indigo-100 to-indigo-200">
                      {!t.completed && (
                        <>
                          <button
                            onClick={() => completedHandler(i)}
                            className="bg-gradient-to-r from-green-600 via-green-400 to-green-600 hover:from-green-800 hover:via-green-600 hover:to-green-800 ... px-4 py-2 rounded font-bold text-white mr-2 hover:drop-shadow-xl"
                          >
                            Done
                          </button>
                        </>
                      )}
                      <button
                        onClick={() => deleteHandler(i)}
                        className="bg-gradient-to-r from-red-600 via-red-400 to-red-600 hover:from-red-800 hover:via-red-600 hover:to-red-800 ... px-4 py-2 rounded font-bold text-white hover:drop-shadow-xl"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-xl text-center text-gray-800 font-bold">No Tasks Available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
