import { FC, Fragment, useState } from 'react'
import { User } from '../../interfaces'

interface Props {
  user: User
}

export const TableRecord: FC<Props> = ({ user }) => {
  const [activeUserId, setActiveUserId] = useState<number | null>(null)

  const toggleAccordion = (userId: number) => {
    setActiveUserId(prevId => (prevId === userId ? null : userId))
  }

  return (
    <>
      <Fragment key={user.id}>
        <tr
          className={`user-table__row ${
            activeUserId === user.id ? 'user-table__row--active' : ''
          }`}
          onClick={() => toggleAccordion(user.id)}
        >
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
        </tr>
        {activeUserId === user.id && (
          <tr className='user-table__details'>
            <td colSpan={2}>
              <div>
                <strong>Email:</strong> {user.email}
              </div>
              <div>
                <strong>Gender:</strong> {user.gender}
              </div>
              <div>
                <strong>Position:</strong> {user.position}
              </div>
            </td>
          </tr>
        )}
      </Fragment>
    </>
  )
}
