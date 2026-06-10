"use client";

import React from "react";

import { useTodos } from "./hooks/useTodos";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, Upload } from 'lucide-react';

// Clean sub-component imports
import TaskForm from "./components/dashboard/TaskForm";
import FilterToolbar from "./components/dashboard/FilterToolbar";
import TaskTable from "./components/dashboard/TaskTable";

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
    <main className="min-h-screen bg-muted/40 p-4 md:p-6">
      <Card>
        <CardContent className="flex flex-col gap-4 p-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Task Dashboard
            </h1>
            <p className="text-sm text-muted-foreground">
              Manage your tasks, priorities, and deadlines.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button variant="outline">
              <Upload className="mr-2 h-4 w-4" />
              Import CSV
            </Button>

            <Button>
              <Download className="mr-2 h-4 w-4" />
              Export Excel
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
