import React, { useState } from 'react';
import reactLogo from './react.svg';
import { useUserback } from './UserbackProvider'; // eslint-disable-line import/no-unresolved

const token = import.meta.env?.VITE_UB_TOKEN;
const domain = import.meta.env?.VITE_UB_DOMAIN;

function App() {
    const [count, setCount] = useState(0);
    // Get Userback hooks
    const userback = useUserback();
    if (!userback) {
        return <div>Loading...</div>;
    }
    const {
        init,
        open,
        hideLauncher,
        showLauncher,
        destroy,
    } = userback;

    const handleOpen = function() {
        open();
    };

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
                <button type="button" onClick={handleOpen}>Open Bugs</button>
                <button type="button" onClick={() => open('general', 'screenshot')}>Screenshot me!</button>
                <hr />
                <button type="button" onClick={hideLauncher}>Hide</button>
                <button type="button" onClick={showLauncher}>Show</button>
                <hr />
                <button type="button" onClick={() => init(token, { domain })}>Init</button>
                <button type="button" onClick={destroy}>Destory</button>
            </div>
        </div>
    );
}

export default App;
