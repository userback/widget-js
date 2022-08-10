import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { useUserback } from '@userback/react';

function App() {
    const [count, setCount] = useState(0);
    // Get Userback hooks
    const { show, hide, open } = useUserback()

    return (
        <div className="App">
            <div>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                <hr />
                <button onClick={() => open('bug')}>Open Bugs</button>
                <button onClick={() => open('general', 'screenshot')}>Screenshot me!</button>
                <p>Edit <code>src/App.tsx</code> and save to test HMR</p>
            </div>
        </div>
    );
}

export default App;
