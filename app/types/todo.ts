export type Category = 'Work' | 'Personal' | 'Urgent' | 'General';
export type TodoStatus = "pending" | "completed";

export interface TodoItem {
    id: string;
    title: string;
    description: string; 
    isCompleted: boolean;
    category: Category;
    createdAt: string;
    status: TodoStatus;
}