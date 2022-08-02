# @userback/react
The official NPM module for embedding the [Userback.io](https://userback.io) widget into your React application.

## Installation
`npm i @userback/react` or `yarn add @userback/react`

## Quickstart
The easiest way to get started with Userback is to simply use the Provider near the top of you React Tree like so:
 
``` jsx
import { UserbackProvider } from '@userback/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  return (
    <React.StrictMode>
      <UserbackProvider token={USERBACK_TOKEN}>
        <App />
      </UserbackProvider>
    </React.StrictMode>)
)
```

With a valid token provided, the Userback Widget will automatically load and be ready to use!

### Hooks
You can access userback hooks in child components of the `UserbackProvider` with `useUserback()`:

``` jsx
import { useUserback } from '@userback/react'

function App() {
  const { open } = useUserback()
  return (
    <div id="app">
      <button type="button" onClick={() => open('general', 'screenshot')}>Take a screenshot</button>
    </div>
  )
}

export default App
```


For more information about available configuration settings and and functions available, see our [Javascript API](https://support.userback.io/en/articles/5209252-javascript-api)
