import { By, User } from '../interfaces'

export const keepSortingAndSearch = (
  users: User[],
  search?: string,
  sortBy?: By,
) => {
  let formattedUsers = [...users]

  if (sortBy && sortBy !== 'No sort') {
    switch (sortBy) {
      case 'firstName':
        formattedUsers.sort((a, b) => a.first_name.localeCompare(b.first_name))
        break
      case 'lastName':
        formattedUsers.sort((a, b) => a.last_name.localeCompare(b.last_name))
        break
      case 'position':
        formattedUsers.sort((a, b) => a.position.localeCompare(b.position))
        break
    }
  }
  if (search)
    formattedUsers = formattedUsers.filter(user =>
      `${user.first_name} ${user.last_name}`
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase()),
    )

  return formattedUsers
}
