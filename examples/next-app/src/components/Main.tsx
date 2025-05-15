'use client';

import React, { useState } from 'react';
import { useUserback } from './UserbackProvider.client'; // eslint-disable-line import/no-unresolved

function Main() {
    const [count, setCount] = useState(0);
    // Get Userback hooks
    const userback = useUserback();
    if (!userback) {
        return <div>Loading...</div>;
    }
    const {
        open,
        hideLauncher,
        showLauncher,
        destroy,
    } = userback;

    return (
        <div className="App">
            <div className="card">
                <button type="button" onClick={() => setCount((c) => c + 1)}>
                    <span>count is: </span>
                    {count}
                </button>
                <hr />
                <button type="button" onClick={() => open('bug')}>Open Bugs</button>
                <button type="button" onClick={() => open('general', 'screenshot')}>Screenshot me!</button>
                <hr />
                <button type="button" onClick={hideLauncher}>Hide</button>
                <button type="button" onClick={showLauncher}>Show</button>
                <hr />
                <button type="button" onClick={destroy}>Destory</button>
            </div>
        </div>
    );
}

export default Main;
