import React from 'react';
import PropTypes from 'prop-types';
import { withUserback } from '@userback/react';
import reactLogo from './react.svg';

// @TODO: Fix Typescript prop types and count prop
// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    increment() {
        this.setState((prev) => ({ count: prev.count + 1 }));
    }

    render() {
        const { count } = this.state;
        const { userback } = this.props;
        return (
            <div className="App">
                <div>
                    <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <h1>Vite + React Class</h1>
                <div className="card">
                    <button type="button" onClick={this.increment}>
                        <span>count is: </span>
                        {count}
                    </button>
                    <hr />
                    <button type="button" onClick={() => userback.open('bug')}>Open Bugs</button>
                    <button type="button" onClick={() => userback.open('general', 'screenshot')}>Screenshot me!</button>
                    <hr />
                    <button type="button" onClick={userback.hide}>Hide</button>
                    <button type="button" onClick={userback.show}>Show</button>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    userback: PropTypes.instanceOf(Object),
};

App.defaultProps = {
    userback: {},
};

export default withUserback(App);
