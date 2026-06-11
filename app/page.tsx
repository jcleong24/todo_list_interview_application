"use client";

import { useState } from "react";
// Clean sub-component imports
import { DashboardHeader } from "./components/dashboard/DashboardHeader";
import { TodoControls } from "./components/dashboard/TodoControls";
import { TodoList } from "./components/dashboard/TodoList";
import { todoItems } from "./data/dummy_todos";
import { Category } from "./types/todo";

type AddTodoInput = {
  title: string;
  description: string;
  category: Category;
};

export default function TodoDashboard() {
  const [todos, setTodos] = useState(todoItems);

  function handleToggleTodo(todoId: string) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === todoId
          ? {
              ...todo,
              status: todo.status === "completed" ? "pending" : "completed",
            }
          : todo,
      ),
    );
  }

  function handleDeleteTodo(todoId: string) {
    setTodos((currentTodo) => currentTodo.filter((todo) => todo.id !== todoId));
  }

  function handleAddTodo(todoInput: AddTodoInput) {
    const newTodo = {
      id: crypto.randomUUID(),
      title: todoInput.title,
      description: todoInput.description,
      category: todoInput.category,
      createdAt: new Date().toLocaleString(),
      status: "pending" as const,
    };

    setTodos((currentTodos) => [newTodo, ...currentTodos]);
  }

  return (
    <main className="min-h-screen bg-muted/40 px-4 py-10">
      <section className="mx-auto flex max-w-3xl flex-col gap-6">
        <DashboardHeader />
        <TodoControls onAddTodo={handleAddTodo} />
        <TodoList
          todos={todos}
          onToggleTodo={handleToggleTodo}
          onDeleteTodo={handleDeleteTodo}
        />
      </section>
    </main>
  );
}
