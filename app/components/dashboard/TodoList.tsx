import { TodoItem } from "./TodoItem";

export function TodoList() {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-muted p-4">
      <TodoItem title="Create a React project" time="5:23 AM, 01/06/2022" />
      <TodoItem title="Learn React" time="5:22 AM, 01/06/2022" />
      <TodoItem title="Create a Todo App" time="5:21 AM, 01/06/2022" completed />
    </div>
  );
}