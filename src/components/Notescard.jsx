import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import { X } from 'lucide-react'
import { Save } from 'lucide-react'
import { Link } from 'react-router-dom'

const Notes = () => {
  const [input, setinput] = useState("")
  const [text, settext] = useState("")
  const [date, setdate] = useState("")
  const [time, settime] = useState("")


 const [Task, setTask] = useState(
  JSON.parse(localStorage.getItem("NewTask")) || []
)

  function submitform(e) {
    e.preventDefault();
    const copytask = [...Task]
    copytask.push({input,text,date,time,completed:false})
    setTask(copytask)

    setinput("")
    settext("")
    setdate("")
    settime("")

  }
  localStorage.setItem("NewTask",JSON.stringify(Task))

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-emerald-400/20 rounded-3xl shadow-[0_0_60px_rgba(16,185,129,0.15)]  mx-20 my-15 h-150 px-10 p-5 text-white ">
      {/* top part */}
      <div className='flex justify-between gap-5 items-center mb-5'>
        <div className='flex items-center gap-5 justify-start'>
          <Plus size={40} className='bg-white/5 backdrop-blur-xl border border-emerald-400/20 rounded-xl shadow-[0_0_60px_rgba(16,185,129,0.15)] p-2 ' />
          <h3 className='flex gap-2 font-bold text-2xl'>Add new <p className='text-green-600'>to-do</p></h3>
        </div>
        
        <Link to="/" className='active:scale-95'>< X size={40} className='p-2 text-emerald-500' /></Link>
      </div>

      {/* LIne code */}
      <div className="w-full h-px bg-emerald-400/20 shadow-[0_0_10px_rgba(16,185,129,0.3)] mb-8"></div>


      {/* Body Part */}
      <div className='mb-10'>
        <form onSubmit={(e) => {
          submitform(e)
        }}>
          <div className='flex mb-10'>
            <h4 className='w-1/5 font-semibold text-2xl'>Task:</h4>
            <input value={input} onChange={(e) => {
              setinput(e.target.value)
            }} type="text" required placeholder='Heading of Task' className='p-2 bg-white/5 backdrop-blur-xl border border-emerald-400/20 rounded shadow-[0_0_60px_rgba(16,185,129,0.15)] w-4/5' />
          </div>
          <div className='flex justify-between mb-10'>
            <h4 className='1/5 font-semibold text-2xl'>Description:</h4>
            <textarea value={text} onChange={(e) => {
              settext(e.target.value)
            }} required className='p-2 py-10 w-4/5  bg-white/5 backdrop-blur-xl border border-emerald-400/20 rounded shadow-[0_0_60px_rgba(16,185,129,0.15)]' placeholder='Enter Task Description...'></textarea>
          </div>
          <div className='flex justify-between mb-10'>
            <h4 className='1/5 font-semibold text-2xl'>Date:</h4>
            <input value={date} onChange={(e) => {
              setdate(e.target.value)
            }} type="date" className='p-2 w-4/5  bg-white/5 backdrop-blur-xl border border-emerald-400/20 rounded shadow-[0_0_60px_rgba(16,185,129,0.15)] text-gray-400' />
          </div>
          <div className='flex justify-between mb-10'>
            <h4 className='1/5 font-semibold text-2xl'>Time:</h4>
            <input value={time} onChange={(e) => {
              settime(e.target.value)
            }} type="time" className='p-2 w-4/5  bg-white/5 backdrop-blur-xl border border-emerald-400/20 rounded shadow-[0_0_60px_rgba(16,185,129,0.15)] text-gray-400' />
          </div>
          <div className='flex justify-center  gap-10'>
            <button className=' w-80 active:scale-95 px-6 bg-emerald-900 backdrop-blur-xl border border-emerald-400/20 rounded-xl shadow-[0_0_60px_rgba(16,185,129,0.15)] text-2xl font-semibold p-2 flex justify-center items-center gap-2'> <Save /> Save</button>
          </div>
        </form>


      </div>
      {/* Bottom Part */}
      

    </div>
  )
}

export default Notes