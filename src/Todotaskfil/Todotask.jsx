import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const Todotask = () => {
    let [inputo, setInputo] = useState('')
    let [todolist, setTodolist] = useState([
        { task: "reading", date: new Date() },
        { task: 'walking', date: new Date() }
    ])
    let [searchfil, setSearchfil] = useState('')

    let [datetodo, setDatetodo] = useState()




    let addTodo = (e) => {
        e.preventDefault()
        setTodolist([...todolist, { task: inputo, date: new Date() }])
        setInputo('')

    }

    let deleteTodo = (index) => {
        let newTodo = todolist.filter((val, i) => i !== index)
        setTodolist(newTodo)
    }

    let filterfun = todolist.filter(todo => todo.task.toLowerCase().includes(searchfil.toLowerCase() && (!datetodo || (datetodo.date.toDateString() === datetodo.toDateString())) ))

    let dateHandle = (e)=>{
        setDatetodo(e.target.value)
    }

    return (
        <div>
            <input type="text" value={inputo} onChange={e => setInputo(e.target.value)} />
            <button onClick={addTodo}>Add</button>

            <input type="text" value={searchfil} onChange={(e)=> setSearchfil(e.target.value)} />


            <ReactDatePicker withPortal isClearable selected={datetodo} value={datetodo}  onChange={date => setDatetodo(date)} />


            <div>
                {filterfun.map((x, index) => {
                    return (
                        <div>
                            <div>{x.task}</div>
                            <button onClick={() => deleteTodo(index)}>Delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Todotask
