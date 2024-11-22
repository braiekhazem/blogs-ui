export interface ITodo {
  id?: number
  title: string
  completed?: boolean
}

export interface ITodoCreate {
  title: string
}

export interface ITodoUpdate {
  id: number
  body: {
    title: string
    completed: boolean
  }
}

export interface ITodoDelete {
  id: number
}
