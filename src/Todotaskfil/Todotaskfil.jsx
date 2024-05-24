import zoomin from '../Todotaskfil/Zoomin.jpg'
import zoomout from '../Todotaskfil/Zoomout.jpg'
import React, { useEffect, useState } from 'react';
import '../Todotaskfil/Todocss.css';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Todotaskfi = () => {
    const [inputto, setInput] = useState('');
    const [todos, setTodos] = useState([
        { task: 'reading', date: new Date(), status: 'pending' }
        // { task: 'working', date: new Date(), status: 'pending' }
    ]);
    const [search, setSearch] = useState('');
    const [zoomlevel, setZoomlevel] = useState(1);
    const [datetodo, setDatetodo] = useState(new Date());
    const [filter, setFilter] = useState('All');

    // console.log(startDate);
    const zoomlevelin = () => {
        setZoomlevel(zoom => Math.min(zoom + 0.1, 3));
    };

    const zoomlevelout = () => {
        setZoomlevel(zoom => Math.max(zoom - 0.1, 0.5));
    };

    useEffect(() => {
        const zoomdate = document.querySelector('.todoform');
        zoomdate.style.transform = `scale(${zoomlevel})`;
        zoomdate.style.transformOrigin = 'center';
        zoomdate.style.transition = 'transform 0.2s ease-out';
    }, [zoomlevel]);

    const addTodo = (e) => {
        e.preventDefault();
        if (inputto.trim()) {
            setTodos([...todos, { task: inputto, date: datetodo, status: 'pending' }]);
            setInput('');
        }
    };

    const deleteTodo = index => setTodos(todos.filter((val, i) => i !== index));

    const getSearch = (e) => {
        setSearch(e.target.value);
    };

    const FilterChange = (e) => {
        setFilter(e.target.value);
    };

    const filteredTodos = todos.filter(todo => {
        const matchesSearch = todo.task.toLowerCase().includes(search.toLowerCase());
        const matchesDate = !datetodo || (datetodo && todo.date.toDateString() === datetodo.toDateString());
        const matchesStatus = filter === 'All' || todo.status === filter.toLowerCase();

        return matchesSearch && matchesDate && matchesStatus;
    });

    return (
        < >
            <div style={{background: 'rgb(223, 223, 223)', height : '70vh', width:'99vw'}}>
                <div className='zoomheading'>
                    <div className='zoomin' onClick={zoomlevelin}><img src={`${zoomin}`} height='20px' alt="zoom in" /></div>
                    <div className='zoomout' onClick={zoomlevelout}><img src={`${zoomout}`} height='20px' alt="zoom in" /></div>
                </div>

                <form className='todoform'>
                    <div className='todolist'>
                        <div className='inputposition'>
                            <div className='inputfun'>
                                <h1 className='h1tag'>Todo List</h1>
                                <input className='inputtagtodo' type="text" placeholder="Add todo task" value={inputto} onChange={(e) => setInput(e.target.value)} />
                                <button className='addbtn' onClick={addTodo}>Add</button>
                            </div>
                            <div className='searchfun'>

                                <input className='inputtagsearch' type="text" placeholder="Search" value={search} onChange={getSearch} />

                                <select className='addbtn' value={filter} onChange={FilterChange}>
                                    <option>All</option>
                                    <option>Pending</option>
                                    <option>Completed</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <div className='headingtodo'>
                                <h3> s.no </h3>
                                <h3> Task </h3>
                                <h3> Date </h3>
                                <h3> Action </h3>
                            </div>
                            <hr />
                            {filteredTodos.map((todo, index) => {

                                const marktodo = (e) => {
                                    e.preventDefault();
                                    const updatedTodos = todos.map((t, i) => {
                                        if (i === index) {
                                            return { ...t, status: t.status === 'pending' ? 'completed' : 'pending' };
                                        }
                                        return t;
                                    });
                                    setTodos(updatedTodos);
                                };


                                return (
                                    <div key={index} className='contenttodo'>
                                        <span className='indexvalue'>{index}</span>
                                        <span className='todotext'>{todo.task}</span>
                                        <span className='tododate'>{todo.date.toDateString()}</span>
                                        <span className='spanpending'>
                                            <button className='pendingtask' onClick={marktodo}>
                                                {todo.status}
                                            </button>
                                        </span>
                                        <span>
                                            <button className='cancelbtn' onClick={() => deleteTodo(index)}>X</button>
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </form>
                <div className='datepicker'>
                    <ReactDatePicker className='selecttask' placeholderText='date' selected={datetodo} onChange={date => setDatetodo(date)} withPortal dropdownMode='select' />
                </div>
            </div>
        </>
    );
};

export default Todotaskfi;
