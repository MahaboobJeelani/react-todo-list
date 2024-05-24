import React, { useState } from 'react'
import Html from './Html'
import Css from './Css'




const Tabs = () => {
    let [state, setState] = useState('html')

    const multitabs = () => {
        switch (state) {
            case 'html':
                return (
                    <div>
                        <p>HTML CONTENT</p>
                    </div>
                )
            case 'css':
                return (
                    <div>
                        <p>This CSS Content</p>
                    </div>
                )
            case 'javascript':
                return (
                    <div>
                        <p>This is JavaScript Content</p>
                    </div>
                )
            default:
                return null
        }
    }
    return (
        <div>
            {/* Using switch case */}
            <h1>{multitabs()}</h1>

            <button onClick={() => { setState('html') }}>HTML</button>
            <button onClick={() => { setState('css') }}>CSS</button>
            <button onClick={() => { setState('javascript') }}>JavaScript</button>
            <button onClick={() => { setState('') }}>no Content </button>
        </div>
    )
}

export default Tabs
