import { createContext, useEffect, useState } from 'react'
import './App.css'
import { Search } from './components/Users/Search'
import { UserTable } from './components/Users/Table'
import { By, UserContext } from './interfaces'
import users from './mock/users.json'
import { keepSortingAndSearch } from './utils/utils'

export const Context = createContext<UserContext | null>(null)

function App() {
  const [rootUsers, setRootUsers] = useState(users)
  const [modifiedUsers, setModifiedUsers] = useState(users)
  const [sortOption, setSortOption] = useState<By>('No sort')
  const [search, setSearch] = useState('')

  useEffect(() => {
    sortUsers(sortOption)
  }, [sortOption])

  useEffect(() => {
    doSearch(search)
  }, [search])

  const changeSortOption = (option: By) => {
    setSortOption(option)
  }

  const changeSearchText = (search: string) => {
    setSearch(search)
  }

  const deleteUser = (id: number) => {
    setRootUsers(prevUsers => prevUsers.filter(user => user.id !== id))
    setModifiedUsers(prevUsers =>
      keepSortingAndSearch(
        prevUsers.filter(user => user.id !== id),
        search,
        sortOption,
      ),
    )
  }

  const sortUsers = (by: By) => {
    setModifiedUsers(prevUsers =>
      keepSortingAndSearch(
        by === 'No sort' ? rootUsers : prevUsers,
        search,
        by,
      ),
    )
  }

  const doSearch = (search: string) => {
    setModifiedUsers(prevUsers =>
      keepSortingAndSearch(search ? prevUsers : rootUsers, search, sortOption),
    )
  }

  return (
    <Context.Provider
      value={{
        users: modifiedUsers,
        deleteUser,
        changeSortOption,
        changeSearchText,
      }}
    >
      <Search />
      <UserTable />
    </Context.Provider>
  )
}

export default App
