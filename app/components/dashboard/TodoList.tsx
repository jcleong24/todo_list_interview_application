import type { TodoItem as Todo } from "@/app/types/todo";
import { TodoItem } from "./TodoItem";
import { todo } from "node:test";

type TodoListProps = {
  todos: Todo[];
};

export function TodoList({ todos }: TodoListProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-muted p-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
