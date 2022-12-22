# @userback/react
The official NPM module for embedding the [Userback.io](https://userback.io) widget into your React application.

[![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/userback-react-example-yl9q7z)

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
    </React.StrictMode>
  )
)
```

With a valid token provided, the Userback Widget will automatically load and be ready to use!

### Options
Along with `token`, you can also provide an `options` prop:

``` jsx
const {email, name} = getUserDetails()
const ubOptions = { email, name, priority: 'high', autohide: true }
return (
  <UserbackProvider token={USERBACK_TOKEN} options={ubOptions} >
    <App />
  </UserbackProvider>)
```


### Hooks
You can access Userback hooks in child components of the `<UserbackProvider>` with `useUserback()`:

``` jsx
import { useUserback } from '@userback/react'

function App() {
  const { open, hide, show } = useUserback()
  return (
    <div id="app">
      <button type="button" onClick={() => open('general', 'screenshot')}>Take a screenshot</button>
      <button type="button" onClick={show}>Show Userback</button>
      <button type="button" onClick={hide}>Hide me :(</button>
    </div>
  )
}

export default App
```

### Class based components
If you are using class based components and need an alternative to hooks, you can use the `withUserback` Higher Order Component:

``` jsx
import { withUserback } from '@userback/react'

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <button type="button" onClick={() => this.props.userback.open('general', 'screenshot')}>Take a screenshot</button>
        <button type="button" onClick={() => this.props.userback.hide()}>Hide me :(</button>
      </div>
    )
  }
}

export default withUserback(App)
```


For more information about available configuration settings and and functions available, see our [Javascript API](https://support.userback.io/en/articles/5209252-javascript-api)
