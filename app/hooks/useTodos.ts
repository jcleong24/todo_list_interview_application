'use client';

import { useState } from 'react';
import type { TodoItem } from '../types/todo';

export function useTodos() {
    const [todos] = useState<TodoItem[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [sortOrder, setSortOrder] = useState('newest');

    return {
        todos,
        addTodo: () => {},
        deleteTodo: () => {},
        toggleTodo: () => {},
        editTodo: () => {},
        searchQuery: () => {},
        setSearchQuery: () => {},
        statusFilter: () => {},
        setStatusFilter: () => {},
        sortOrder: () => {},
        setSortOrder: () => {},
        importCSV: () => {},
        exportToExcel: () => {},
    };
}