import React, { useState } from 'react';
import { useUserback } from '@userback/react';
import reactLogo from './react.svg';

function App() {
    const [count, setCount] = useState(0);
    // Get Userback hooks
    const { show, hide, open } = useUserback();

    return (
        <div className="App">
            <div>
                <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button type="button" onClick={() => setCount((c) => c + 1)}>
                    <span>count is: </span>
                    {count}
                </button>
                <hr />
                <button type="button" onClick={() => open('bug')}>Open Bugs</button>
                <button type="button" onClick={() => open('general', 'screenshot')}>Screenshot me!</button>
                <hr />
                <button type="button" onClick={() => hide()}>Hide</button>
                <button type="button" onClick={() => show()}>Show</button>
            </div>
        </div>
    );
}

export default App;
