"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

// Sub-component imports
import type { Category } from "@/app/types/todo";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type AddTodoInput = {
  title: string;
  description: string;
  category: Category;
};

type TodoControlsProps = {
  onAddTodo: (todo: AddTodoInput) => void;
};

export function TodoControls({ onAddTodo }: TodoControlsProps) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<Category>("General");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Stop the default browser form submission behavior - stop browser from refreshing the page

    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();

    if (!trimmedTitle) {
      // return if todo is empty
      return;
    }

    onAddTodo({
      title: trimmedTitle,
      description: trimmedDescription,
      category,
    }); // Send the cleaned title back to the parent so it can create a new todo.
    setTitle("");
    setDescription("");
    setCategory("General");
    setOpen(false);
  }

  return (
    <div className="flex items-center justify-between gap-4">
      {/* <Button size="lg" >Add Task</Button> */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>
            <Plus className="h-4 w-4"></Plus>
            Add Task
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Task</DialogTitle>
          </DialogHeader>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Task title</label>
              <Input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="e.g. Prepare interview project"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Description</label>
              <Textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Add extra details..."
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Category</label>
              <Select
                value={category}
                onValueChange={(value) => setCategory(value as Category)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="General">General</SelectItem>
                  <SelectItem value="Work">Work</SelectItem>
                  <SelectItem value="Personal">Personal</SelectItem>
                  <SelectItem value="Urgent">Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit">Create Task</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
