import { createContext, useState } from 'react'
import './App.css'
import { UserTable } from './components/Users/Table'
import { UserContext } from './interfaces'
import users from './mock/users.json'

export const Context = createContext<UserContext | null>(null)

function App() {
  const [modifiedUsers, setModifiedUsers] = useState(users)

  const deleteUser = (id: number) => {
    setModifiedUsers(prevUsers => prevUsers.filter(user => user.id !== id))
  }

  return (
    <Context.Provider
      value={{
        users: modifiedUsers,
        deleteUser,
      }}
    >
      <UserTable />
    </Context.Provider>
  )
}

export default App
