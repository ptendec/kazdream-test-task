import { FC } from 'react'
import { User } from '../../interfaces'
import { TableRecord } from './TableRecord'

interface Props {
  users: User[]
}

export const UserTable: FC<Props> = ({ users }) => {
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
