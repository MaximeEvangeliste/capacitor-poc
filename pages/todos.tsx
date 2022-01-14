import { Button } from 'components/Button';
import { BaseLayout } from 'components/Layout/BaseLayout';
import { TodoProps, useTodoStore } from 'hooks/stores/useTodoStore';
import { useRef, useState } from 'react';

export default function TodosPage() {
  const state = useTodoStore((s) => s);

  return (
    <BaseLayout>
      <div className="w-full h-full flex items-center justify-center flex-row">
        <div className="block p-8 max-w-lg w-full bg-white rounded-lg border border-gray-200 shadow-md relative -top-1/4">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600">Zustand TODOS</h5>
          <TodoInput />
          <Todos />
        </div>
        <pre className="absolute bottom-5 h-60 overflow-y-auto shadow-2xl border border-gray-200 rounded-xl p-5 bg-white w-11/12">
          {JSON.stringify(state, null, 2)}
        </pre>
      </div>
    </BaseLayout>
  );
}

function TodoInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const addTodo = useTodoStore((s) => s.addTodo);
  const [description, setDescription] = useState<string>('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(description);
        setDescription('');
        inputRef.current && inputRef.current.focus();
      }}
      className="mb-3">
      <input
        ref={inputRef}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-3"
        type="text"
        value={description}
        placeholder="What do you need to do today?"
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button type="submit" className="w-full">
        Add Todo
      </Button>
    </form>
  );
}

function Todos() {
  const incomplete = useTodoStore((s) => s.getIncompleteTodos());
  const completed = useTodoStore((s) => s.getCompletedTodos());
  return (
    <div>
      <h2 className="text-xl font-bold">Todo</h2>
      {incomplete.map((t) => (
        <Todo {...t} key={t.id} />
      ))}

      <h2 className="text-xl font-bold">Completed</h2>
      {completed.map((t) => (
        <Todo {...t} key={t.id} />
      ))}
    </div>
  );
}

function Todo(props: TodoProps) {
  const removeTodo = useTodoStore((s) => s.removeTodo);
  const toggleCompleted = useTodoStore((s) => s.toggleCompletedState);

  return (
    <div className="flex items-center justify-between mb-1" {...props}>
      <p>{props.description}</p>
      <div className="todo_actions">
        <Button onClick={() => removeTodo(props.id)} className="bg-red-500 hover:bg-red-600 mr-1 py-1 px3">
          Delete
        </Button>
        <Button onClick={() => toggleCompleted(props.id)} className="bg-green-500 hover:bg-green-600 py-1 px3">
          Complete
        </Button>
      </div>
    </div>
  );
}
