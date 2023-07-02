import { FC, useContext } from 'react'
import { Context } from '../../App'
import { UserContext } from '../../interfaces'
import { TableRecord } from './TableRecord'

export const UserTable: FC = () => {
  const { users } = useContext(Context) as UserContext

  return (
    <div className='user-table'>
      <table className='user-table__table'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <TableRecord user={user} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
