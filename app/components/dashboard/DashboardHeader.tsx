import { Button } from "@/components/ui/button";
import { Download, Upload } from "lucide-react";

export function DashboardHeader() {
  return (
    <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Todo List Dashboard
        </h1>
        <p className="text-sm text-muted-foreground">
          Manage your tasks, deadlines, and priorities.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button variant="outline">
          <Upload className="h-4 w-4" />
          Import CSV
        </Button>

        <Button>
          <Download className="h-4 w-4" />
          Export Excel
        </Button>
      </div>
    </header>
  );
}
