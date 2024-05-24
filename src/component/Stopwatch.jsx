// import React, { useState } from 'react'
// import '../component/Css.css'

// const Stopwatch = () => {
//     const [time, setTime] = useState(0)
//     let [timer, setTimer] = useState(true)
//     let timerstore;


//     const startfun = () => {
//         timerstore = setInterval(() => {
//             setTime((prevTime) => prevTime + 1)
//         }, 500)
//     }

//     const pausefun = () => {
//         clearInterval(timer)
//         setTime(time)
//     }

//     const resetfun = () => {
//         setTime(0)
//     }

//     return (
//         <div className='stopwatchcontainer'>
//             <div className='stopwatch'>
//                 <div className='circle'>
//                     <div className='content'>
//                         <h1>{time}</h1>
//                         <div className='btn'>
//                             <button onClick={startfun}>start</button>
//                             <button onClick={pausefun}>pause</button>
//                             <button onClick={resetfun}>reset</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Stopwatch






import React, { useEffect, useState } from 'react';
import '../Todotaskfil/Todocss.css';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Todotaskfi = () => {
    let [inputto, setInput] = useState('');
    let [todos, setTodos] = useState([
        { task: 'reading', date: new Date() },
        { task: 'working', date: new Date() }
    ]);
    let [search, setSearch] = useState('');
    let [zoomlevel, setZoomlevel] = useState(1);
    let [startDate, setStartDate] = useState(null);

    let zoomlevelin = () => {
        console.log("Zoom in");
        setZoomlevel(zoom => Math.min(zoom + 0.1, 3));
    };

    let zoomlevelout = () => {
        console.log("Zoom out");
        setZoomlevel(zoom => Math.min(zoom - 0.1, 5));
    };

    useEffect(() => {
        document.body.style.transform = `scale(${zoomlevel})`;
        document.body.style.transformOrigin = 'center';
        document.body.style.transition = 'transform 0.2s ease-out';
    }, [zoomlevel]);

    let addTodo = (e) => {
        e.preventDefault();
        if(inputto.trim() !== ''){
            setTodos([...todos, { task: inputto, date: new Date() }]);
            setInput('');
        }
    };

    let deleteTodo = index => setTodos(todos.filter((val, i) => i !== index));

    let getSearch = (e) => {
        setSearch(e.target.value);
    };

    let filteredTodos = todos.filter(todo =>
        todo.task.toLowerCase().includes(search.toLowerCase()) &&
        (!startDate || (startDate && todo.date.toDateString() === startDate.toDateString()))
    );

    return (
        <>
            <form className='todoform'>
                <div className='todolist'>
                    <div className='inputposition'>
                        <div className='inputfun'>
                            <div className='zoomheading'>
                                <div className='zoomin' onClick={zoomlevelin}>+</div>
                                <h1 className='h1tag'>Todo List</h1>
                                <div className='zoomout' onClick={zoomlevelout}>-</div>
                            </div>
                            <input className='inputtagtodo' type="text" placeholder="Add todo task" value={inputto} onChange={(e) => setInput(e.target.value)} />
                            <button className='addbtn' onClick={addTodo}>Add</button>
                        </div>
                        <div className='searchfun'>
                            <input className='inputtagsearch' type="text" placeholder="Search" value={search} onChange={getSearch} />
                            <ReactDatePicker
                                className='selecttask'
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                                withPortal
                                dropdownMode='select'
                                isClearable
                            />
                        </div>
                    </div>
                    <div>
                        <div className='headingtodo'>
                            <h3>  s.no </h3>
                            <h3> Task </h3>
                            <h3> Date </h3>
                            <h3> Action </h3>
                        </div>
                        <hr />
                        {(filteredTodos).map((todo, index) => {
                            let marktodo = (e) => {
                                e.preventDefault();
                                if (e.target.innerText === 'pending') {
                                    e.target.innerText = 'completed';
                                    e.target.style.background = '#097969';
                                    e.target.style.color = 'white';
                                    e.target.style.border = 'none';
                                    e.target.style.padding = '4px';
                                    e.target.style.borderRadius = '4px';
                                }
                                else if (e.target.innerText === 'completed') {
                                    e.target.innerText = 'pending';
                                    e.target.style.background = 'red';
                                    e.target.style.padding = '4px 6px';
                                }
                            };

                            return (
                                <div key={index} className='contenttodo'>
                                    <span className='indexvalue'>{index}</span>
                                    <span className='todotext'>{todo.task}</span>
                                    <span className='tododate'>{todo.date.toDateString()}</span>
                                    <span className='spanpending'>
                                        <button className='pendingtask' onClick={marktodo}>pending</button>
                                    </span>
                                    <span>
                                        <button className='cancelbtn' onClick={() => { deleteTodo(index) }}>X</button>
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </form>
        </>
    );
};

export default Todotaskfi;
