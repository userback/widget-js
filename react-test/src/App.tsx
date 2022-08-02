import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Userback from 'userback-react'

function App() {
  const [count, setCount] = useState(0)
  const token = import.meta.env.VITE_UB_TOKEN
  const domain = import.meta.env.VITE_UB_DOMAIN
  return (
    <div className="App">
      <Userback token={token} domain={domain} />
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
