export interface User {
  id: number
  first_name: string
  last_name: string
  email: string
  gender: string
  position: string
}

export interface UserContext {
  users: User[]
  deleteUser: (id: number) => void
  changeSortOption: (by: By) => void
  changeSearchText: (search: string) => void
}

export interface SortByOptions {
  id: number
  by: By
  name: string
}

export type By = 'firstName' | 'lastName' | 'position' | 'No sort'
