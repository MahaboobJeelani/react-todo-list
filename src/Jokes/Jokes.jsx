import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../Jokes/Jokes.css'

const Jokes = () => {
    let [input, setInput] = useState('')
    let [jokes, setJokes] = useState([])
    let [btn, setBtn] = useState('')

    useEffect(() => {
        axios.get(`https://api.sampleapis.com/jokes/goodJokes/${btn}`)
            .then((joke) => {
                setJokes(joke.data)
            })
            .catch(error => console.log(error))
    }, [btn])

    let getNumber = (e) => {
        setInput(e.target.value)
    }
    let getJokeData = () => {
        setBtn(input)
    }
    return (
        <div>
            <div className='searchbar'>
                <input className='inputtagjoke' placeholder='Search for joke' type="number" value={input} onChange={getNumber} />
                <button className='btnjoke' onClick={getJokeData}>Get Joke</button>
            </div>
            <div className='jokecontent'>
                <h1 className='headerjoke'>Your Joke : <span>{jokes.setup}</span></h1>
            </div>
        </div>
    )
}

export default Jokes
