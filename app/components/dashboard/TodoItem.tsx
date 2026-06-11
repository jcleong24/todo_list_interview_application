import { Pencil, Trash2 } from "lucide-react";
import type { TodoItem as Todo } from "@/app/types/todo";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";


type TodoItemProps = {
  todo: Todo;
};

export function TodoItem({ todo }: TodoItemProps) {
  const isCompleted = todo.status === "completed";

  return (
    <div className="flex items-center justify-between gap-4 rounded-lg bg-background p-4">
      <div className="flex items-center gap-3">
        <Checkbox checked={isCompleted} />

        <div>
          <p className={isCompleted ? "font-medium line-through text-muted-foreground" : "font-medium"}>
            {todo.title}
          </p>
          <p className="text-sm text-muted-foreground">
            {todo.createdAt}
          </p>
        </div>
      </div>

      <div className="flex gap-2">
        <Button size="icon" variant="secondary">
          <Trash2 className="h-4 w-4" />
        </Button>

        <Button size="icon" variant="secondary">
          <Pencil className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}