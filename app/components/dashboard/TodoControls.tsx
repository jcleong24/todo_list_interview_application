import { Button } from "@/components/ui/button";

export function TodoControls() {
  return (
    <div className="flex items-center justify-between gap-4">
      <Button size="lg">
        Add Task
      </Button>

      <select className="h-11 rounded-md border bg-background px-4 text-sm">
        <option>All</option>
        <option>Pending</option>
        <option>Completed</option>
      </select>
    </div>
  );
}