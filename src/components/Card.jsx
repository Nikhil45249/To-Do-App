import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Trash2, Circle, CircleCheckBig } from "lucide-react";
const Card = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("NewTask")) || []
  );

  const [filter, setFilter] = useState("all");  /////

  // console.log(tasks)
  function toggleComplete(index) {
    const updatedTasks = [...tasks];

    updatedTasks[index].completed = !updatedTasks[index].completed;

    setTasks(updatedTasks);

    localStorage.setItem(
      "NewTask",
      JSON.stringify(updatedTasks)
    );
  }
  function deleteTask(index) {    ///////
    const updatedTasks = tasks.filter(
      (_, i) => i !== index
    );

    setTasks(updatedTasks);

    localStorage.setItem(
      "NewTask",
      JSON.stringify(updatedTasks)
    );
  }
  const filteredTasks =
    filter === "all"
      ? tasks
      : tasks.filter(task => task.completed);  ////////

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-emerald-400/20 rounded-3xl shadow-[0_0_60px_rgba(16,185,129,0.15)] mx-20 my-15 h-150 px-10 p-5 ">

      <div className='flex gap-1 justify-center mb-5'>
        <h1 className='text-green-600 font-bold text-xl '>TO-DO</h1>
        <h1 className='text-white font-bold text-xl'>App</h1>
      </div>

      <div className='text-white'>

        <div className='flex justify-between gap-5 mb-10'>

          <div className='w-4/5 flex  p-2 bg-white/5 backdrop-blur-xl border border-emerald-400/20 rounded-3xl shadow-[0_0_60px_rgba(16,185,129,0.15)]'>
            <Link to="/Notes" className='active:scale-95 flex justify-center items-center gap-5 font-semibold text-2xl'>
              <Plus
                size={40}
                className='bg-white/5 backdrop-blur-xl border border-emerald-400/20 rounded-xl shadow-[0_0_60px_rgba(16,185,129,0.15)] p-2 text-white'
              />
              <p className='flex gap-1'>
                Add new
                <p className='text-green-600'>to-do</p>
              </p>

            </Link>
          </div>

          <div className='w-1/5 p-2 gap-2 flex justify-between bg-white/5 backdrop-blur-xl border border-emerald-400/20 rounded-2xl shadow-[0_0_60px_rgba(16,185,129,0.15)]'>

            <button    //////
              onClick={() => setFilter("all")}
              className='active:bg-emerald-900 active:scale-95 w-1/2 bg-emerald-400/5 backdrop-blur-xl border border-emerald-400/20 rounded-xl shadow-[0_0_60px_rgba(16,185,129,0.15)] text-xl font-semibold'
            >
              All
            </button>

            <button    ///////
              onClick={() => setFilter("completed")}
              className='active:bg-emerald-900 active:scale-95 w-1/2 bg-emerald-400/5 backdrop-blur-xl border border-emerald-400/20 rounded-xl shadow-[0_0_60px_rgba(16,185,129,0.15)] text-xl font-semibold'
            >
              Completed
            </button>

          </div>

        </div>

        {/* BODY OF CARD */}
        <div className='bg-white/5 backdrop-blur-xl border border-emerald-400/20 rounded-xl shadow-[0_0_60px_rgba(16,185,129,0.15)] h-100 overflow-y-auto hide-scrollbar relative'>
          <div className="  sticky top-0 z-10 bg-[#1f3f38] grid grid-cols-[2fr_3fr_1.5fr_1.5fr_1fr_1fr] gap-6 p-4 border-b border-emerald-400/20 font-bold">
            <p>Task</p>
            <p>Description</p>
            <p>Date</p>
            <p>Time</p>
            <p className="text-center">Completed</p>
            <p className="text-center">Delete</p>
          </div>
          {filteredTasks.map((task, index) => (
            <div
              key={index}
              className="grid grid-cols-[2fr_3fr_1.5fr_1.5fr_1fr_1fr] gap-6 p-5 border-b border-emerald-400/10 items-center"
            >
              <p className="break-words">{task.input}</p>

              <p className="break-words">{task.text}</p>

              <p>{task.date}</p>

              <p>{task.time}</p>

              <div
                className="flex justify-center items-center cursor-pointer"
                onClick={() => toggleComplete(index)}
              >
                {
                  task.completed ? (
                    <CircleCheckBig
                      size={24}
                      className="text-emerald-400"
                    />
                  ) : (
                    <Circle
                      size={24}
                      className="text-emerald-400/40"
                    />
                  )
                }
              </div>

              <div className="flex justify-center">
                <button onClick={() => deleteTask(index)}>
                  <Trash2 size={20} className="text-red-500" />
                </button>
              </div>
            </div>
          ))}

        </div>

      </div>

    </div>
  )
}

export default Card