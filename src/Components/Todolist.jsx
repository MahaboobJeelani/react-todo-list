// import React, { useState } from 'react'
// import './Todocss.css'

// const Todolist = () => {
//     let [input, setInput] = useState('')

//     let [todolist, setTodolist] = useState(["Reading Books daily 30 min", 'Morning Walk 15min'])

//     let addtodolist = () => {
//         setTodolist([...todolist, input])
//         setInput('')
//     }

//     const deleteTodo = (index) => {
//         const newTodolist = todolist.filter((val, i) => i !== index);
//         setTodolist(newTodolist);
//     };

//     return (
//         <div className='container'>
//             <div className='todolistcontainer'>

//                 <h1 className='header'>Todo List</h1>

//                 <div className='inputtag'>
//                     <input type="text" value={input} onChange={(e) => { setInput(e.target.value); }} placeholder='Enter todo' />
//                     <button className='btn' onClick={addtodolist}>Add</button>
//                 </div>


//                 <div>
//                     {todolist.map((item, index) => {
//                         return (
//                             <div key={index} className='list'>
//                                 <div><p className='para'>{item}</p></div>
//                                 <p><button className='delete' onClick={() => deleteTodo(index)}>x</button></p>
//                             </div>
//                         )
//                     })}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Todolist
