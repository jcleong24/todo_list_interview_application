import { Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";


type TodoItemProps = {
  title: string;
  time: string;
  completed?: boolean;
};

export function TodoItem({ title, time, completed }: TodoItemProps) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-lg bg-background p-4">
      <div className="flex items-center gap-3">
        <Checkbox checked={completed} />

        <div>
          <p className={completed ? "font-medium line-through text-muted-foreground" : "font-medium"}>
            {title}
          </p>
          <p className="text-sm text-muted-foreground">
            {time}
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