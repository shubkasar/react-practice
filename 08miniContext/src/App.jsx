import './App.css'
import UserContextProvider from './context/UserContextProvider'
import {Login, Profile} from './components/index'

function App() {

  return (
    <UserContextProvider>
      <h1>React with Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
