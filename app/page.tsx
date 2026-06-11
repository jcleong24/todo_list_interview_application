"use client";

import React from "react";

import { useTodos } from "./hooks/useTodos";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Upload } from "lucide-react";

// Clean sub-component imports
import TaskForm from "./components/dashboard/TaskForm";
import { DashboardHeader } from "./components/dashboard/DashboardHeader";
import { TaskSummary } from "./components/dashboard/TaskSummary";
import { TaskFilters } from "./components/dashboard/TaskFilters";
import { TaskList } from "./components/dashboard/TaskList";
import { TodoControls } from "./components/dashboard/TodoControls";
import { TodoList } from "./components/dashboard/TodoList";
import { todoItems } from "./data/dummy_todos";

export default function TodoDashboard() {
  const {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    editTodo,
    searchQuery,
    setSearchQuery,
    statusFilter,
    setStatusFilter,
    sortOrder,
    setSortOrder,
    importCSV,
    exportToExcel,
  } = useTodos();

  return (
    <main className="min-h-screen bg-muted/40 px-4 py-10">
      <section className="mx-auto flex max-w-3xl flex-col gap-6">
        <DashboardHeader />
        <TodoControls />
        <TodoList todos={todoItems} />
      </section>
    </main>
  );
}
