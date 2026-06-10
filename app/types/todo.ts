export type Category = 'Work' | 'Personal' | 'Urgent' | 'General';

export interface TodoItem {
    id: string;
    title: string;
    description: string; 
    isCompleted: boolean;
    dueDate: string;
    category: Category;
    createdAt: string;
}