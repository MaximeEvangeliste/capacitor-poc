import create from 'zustand';

export type TodoProps = {
  id: string;
  description: string;
  completed: boolean;
};

type TodoState = {
  todos: TodoProps[];
  getCompletedTodos: () => TodoProps[];
  getIncompleteTodos: () => TodoProps[];
  addTodo: (description: string) => void;
  removeTodo: (id: string) => void;
  toggleCompletedState: (id: string) => void;
};

export const useTodoStore = create<TodoState>((set, get) => ({
  todos: [],
  getCompletedTodos: () => get().todos.filter((t) => t.completed),
  getIncompleteTodos: () => get().todos.filter((t) => !t.completed),
  addTodo: (description: string) => {
    if (!!description.trim()) {
      set((state) => ({
        todos: [
          ...state.todos,
          {
            id: String(Math.round(Math.random() * 100000000000)),
            description,
            completed: false,
          } as TodoProps,
        ],
      }));
    }
  },
  removeTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },
  toggleCompletedState: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? ({ ...todo, completed: !todo.completed } as TodoProps) : todo
      ),
    }));
  },
}));
