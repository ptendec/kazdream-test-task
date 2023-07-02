import { FC, useContext, useEffect, useState } from 'react'
import { Context } from '../../App'
import { By, SortByOptions, UserContext } from '../../interfaces'
import { TableRecord } from './TableRecord'

const sortByOptions: SortByOptions[] = [
  {
    id: 0,
    by: 'No sort',
    name: 'No sort',
  },
  {
    id: 1,
    by: 'firstName',
    name: 'First Name',
  },
  {
    id: 2,
    by: 'lastName',
    name: 'Last Name',
  },
  {
    id: 3,
    by: 'position',
    name: 'Position',
  },
]

export const UserTable: FC = () => {
  const { users, changeSortOption } = useContext(Context) as UserContext

  const [selectedOption, setSelectedOption] = useState(sortByOptions[0].by)

  useEffect(() => {
    changeSortOption(selectedOption)
  }, [selectedOption])

  return (
    <div className='user-table'>
      <label>
        Sort by
        <select
          value={selectedOption}
          onChange={event => setSelectedOption(event.target.value as By)}
        >
          {sortByOptions.map(option => (
            <option key={option.id} value={option.by}>
              {option.name}
            </option>
          ))}
        </select>
      </label>
      <table className='user-table__table'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <TableRecord key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
