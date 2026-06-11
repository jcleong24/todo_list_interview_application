"use client";

import { useState } from "react";
import { useTodos } from "./hooks/useTodos";

// Clean sub-component imports
import { DashboardHeader } from "./components/dashboard/DashboardHeader";
import { TodoControls } from "./components/dashboard/TodoControls";
import { TodoList } from "./components/dashboard/TodoList";
import { todoItems } from "./data/dummy_todos";

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

  return (
    <main className="min-h-screen bg-muted/40 px-4 py-10">
      <section className="mx-auto flex max-w-3xl flex-col gap-6">
        <DashboardHeader />
        <TodoControls />
        <TodoList
          todos={todos}
          onToggleTodo={handleToggleTodo}
          onDeleteTodo={handleDeleteTodo}
        />
      </section>
    </main>
  );
}
