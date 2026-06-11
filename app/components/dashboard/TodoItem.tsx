import { Pencil, Trash2 } from "lucide-react";
import type { TodoItem as Todo } from "@/app/types/todo";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

type TodoItemProps = {
  todo: Todo;
  onToggleTodo: (todoId: string) => void;
  onDeleteTodo: (todoId: string) => void;
};

export function TodoItem({ todo, onToggleTodo, onDeleteTodo }: TodoItemProps) {
  const isCompleted = todo.status === "completed";

  return (
    <div className="flex items-center justify-between gap-4 rounded-lg bg-background p-4">
      <div className="flex items-center gap-3">
        <Checkbox
          checked={isCompleted}
          onCheckedChange={() => onToggleTodo(todo.id)}
        />

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <p
              className={
                isCompleted
                  ? "font-medium line-through text-muted-foreground"
                  : "font-medium"
              }
            >
              {todo.title}
            </p>

            <Badge variant="outline">{todo.category}</Badge>
          </div>

          {todo.description && (
            <p className="mt-1 text-sm text-muted-foreground">
              {todo.description}
            </p>
          )}
          
          <p className="text-sm text-muted-foreground">{todo.createdAt}</p>
        </div>
      </div>

      <div className="flex gap-2">
        <Button
          size="icon"
          variant="secondary"
          onClick={() => onDeleteTodo(todo.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>

        <Button size="icon" variant="secondary">
          <Pencil className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
