import { useContext, useEffect, useState } from 'react'
import { Context } from '../../App'
import { useDebounce } from '../../hooks/useDebounce'
import { UserContext } from '../../interfaces'

export const Search = () => {
  const { doSearch } = useContext(Context) as UserContext

  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 500)

  useEffect(() => {
    doSearch(debouncedSearch)
  }, [debouncedSearch])

  return (
    <input
      type='text'
      value={search}
      onChange={event => setSearch(event.target.value)}
    />
  )
}
