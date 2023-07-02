import { createContext, useEffect, useState } from 'react'
import './App.css'
import { Search } from './components/Users/Search'
import { UserTable } from './components/Users/Table'
import { By, UserContext } from './interfaces'
import users from './mock/users.json'

export const Context = createContext<UserContext | null>(null)

function App() {
  const [modifiedUsers, setModifiedUsers] = useState(users)
  const [sortOption, setSortOption] = useState<By>('No sort')

  useEffect(() => {
    sortUsers(sortOption)
  }, [sortOption])

  const changeSortOption = (option: By) => {
    setSortOption(option)
  }

  const deleteUser = (id: number) => {
    setModifiedUsers(prevUsers => prevUsers.filter(user => user.id !== id))
  }

  const sortUsers = (by: By) => {
    if (by === 'No sort') return

    setModifiedUsers(prevUsers => {
      switch (by) {
        case 'firstName':
          return [...prevUsers].sort((a, b) =>
            a.first_name.localeCompare(b.first_name),
          )
        case 'lastName':
          return [...prevUsers].sort((a, b) =>
            a.last_name.localeCompare(b.last_name),
          )
        case 'position':
          return [...prevUsers].sort((a, b) =>
            a.position.localeCompare(b.position),
          )
        default:
          return prevUsers
      }
    })
  }

  const doSearch = (search: string) => {
    if (!search) setModifiedUsers(users)
    setModifiedUsers(prevUsers =>
      prevUsers.filter(user =>
        `${user.first_name} ${user.last_name}`
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase()),
      ),
    )
  }

  return (
    <Context.Provider
      value={{
        users: modifiedUsers,
        deleteUser,
        changeSortOption,
        doSearch,
      }}
    >
      <Search />
      <UserTable />
    </Context.Provider>
  )
}

export default App
