import { FC, Fragment, useContext, useState } from 'react'
import { Context } from '../../App'
import { User, UserContext } from '../../interfaces'

interface Props {
  user: User
}

export const TableRecord: FC<Props> = ({ user }) => {
  const [activeUserId, setActiveUserId] = useState<number | null>(null)

  const { deleteUser } = useContext(Context) as UserContext

  const toggleAccordion = (id: number) => {
    setActiveUserId(prevId => (prevId === id ? null : id))
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
              <button onClick={() => deleteUser(user.id)}>Delete User</button>
            </td>
          </tr>
        )}
      </Fragment>
    </>
  )
}
