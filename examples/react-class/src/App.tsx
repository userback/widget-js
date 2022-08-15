import React from 'react';
import { withUserback } from '@userback/react';
import reactLogo from './react.svg';

// @TODO: Fix Typescript prop types and count prop
// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div>
                    <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <h1>Vite + React Class</h1>
                <div className="card">
                    {/* <button type="button" onClick={() => setCount((c) => c + 1)}> */}
                    {/*     <span>count is: </span> */}
                    {/*     {count} */}
                    {/* </button> */}
                    <hr />
                    <button type="button" onClick={() => this.props.userback.open('bug')}>Open Bugs</button>
                    <button type="button" onClick={() => this.props.userback.open('general', 'screenshot')}>Screenshot me!</button>
                    <hr />
                    <button type="button" onClick={() => this.props.userback.hide()}>Hide</button>
                    <button type="button" onClick={() => this.props.userback.show()}>Show</button>
                </div>
            </div>
        );
    }
}

export default withUserback(App);
