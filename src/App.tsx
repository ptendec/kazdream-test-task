import './App.css'
import { UserTable } from './components/Users/Table'
import users from './mock/users.json'

function App() {
  return (
    <>
      <UserTable users={users} />
    </>
  )
}

export default App
