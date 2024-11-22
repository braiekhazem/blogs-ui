import { api } from '@src/modules/shared/services/api'

export interface ITodo {
  id: string
  title: string
  completed: boolean
}

export const TodoApi = api.injectEndpoints({
  endpoints: (build) => ({
    getTodos: build.query({
      query: (params) => {
        return {
          url: `/todos`,
          params,
        }
      },

      transformResponse: (response: ITodo[]): ITodo[] => {
        return response
      },

      providesTags: (result: any) => {
        return [
          result?.map(({ _id: id }: { _id: string }) => ({ type: 'TODO', id })),
          { type: 'TODO', id: 'ITEM' },
        ]
      },
    }),

    createTodo: build.mutation({
      query: (body) => {
        return {
          url: `todos`,
          method: 'POST',
          body,
        }
      },
      invalidatesTags: [{ type: 'TODO', id: 'TODO' }] as any,
    }),

    updateTodo: build.mutation({
      query: ({ id, ...body }) => {
        return {
          url: `todos/${id}`,
          method: 'PUT',
          body,
        }
      },
      invalidatesTags: () => [{ type: 'TODO', id: 'ITEM' }] as any,
    }),

    deleteTodo: build.mutation({
      query: (id) => {
        return {
          url: `todos/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: () => [{ type: 'TODO', id: 'TODO' }] as any,
    }),
  }),
})

export const {
  useGetTodosQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = TodoApi
