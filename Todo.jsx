import React, { useState } from 'react'

const Todo = () => {
  const[notes,setNotes]=useState([]);
  const[input,setInput]=useState("");

  const addNote = () => {
    if(input.trim()==="")return;
    setNotes([...notes,{text:input, completed:false}]);
    setInput("");
  }

  const deleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index,1);
    setNotes(newNotes)
  }

  const CompleteTask = (index) => {
    const updatedNotes = [...notes];
    updatedNotes[index].completed = !updatedNotes[index].completed;
    setNotes(updatedNotes);
  }

  const editNote = (index) => {
    const newText = prompt("edit your text:", notes[index].text);
    if(newText !== null && newText !== ""){
      const updatedNotes = [...notes];
      updatedNotes[index].text = newText;
      setNotes(updatedNotes);
    }


  }
  return (
    <div className='bg-indigo-300 min-h-screen p-8'>
      <div className='bg-white max-w-xl p-5 mx-auto rounded-md'>
        <h1 className='text-center text-3xl font-bold'>Todo App</h1>
        <div className='flex gap-2'>
          <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} className='mt-5 w-full p-2 border border-black' />
          <button onClick={addNote} className='bg-green-700 p-2 text-md text-white font-bold rounded-xl w-12 mt-5'>Add</button>
        </div>
      </div>

      {notes.length > 0 && (
        <div>
          {notes.map((note,index) => (
            <div key={index} className='bg-white max-w-xl mx-auto rounded-md p-5 flex justify-between items-center'>
              <span className={note.completed ? 'line-through text-gray-500' : ""}>{note.text}</span>
              <div className='space-x-2'>
              <button onClick={()=>CompleteTask(index)} className='bg-black text-white p-2 rounded-md'>Completed</button>
              <button onClick={()=>editNote(index)} className='bg-blue-700 text-white p-2 rounded-md'>Edit</button>
              <button onClick={()=>deleteNote(index)} className='bg-red-600 text-white p-2 rounded-md'>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}

      
    </div>
  )
}

export default Todo

