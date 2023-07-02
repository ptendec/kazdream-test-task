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
}
