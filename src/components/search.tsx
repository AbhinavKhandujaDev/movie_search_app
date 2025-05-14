import { FormEvent, useId } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export default function Search({
  label,
  className,
  onAction,
  ...inpProps
}: {
  label?: string;
  onAction?: (e: FormData) => void;
} & React.ComponentProps<"input">) {
  const id = useId();
  return (
    <div className="*:not-first:mt-2 w-full">
      {label && <Label htmlFor={id}>{label}</Label>}
      <form action={onAction} className="flex rounded-xl shadow-xs w-[inherit]">
        <Input
          id={id}
          className={cn(
            "-me-px flex-1 rounded-e-none shadow-none focus-visible:z-10",
            className
          )}
          placeholder="Search movie"
          type="search"
          name="search"
          {...inpProps}
        />
        <button className="border-input bg-background text-foreground hover:bg-accent hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 inline-flex items-center rounded-e-[inherit] border px-3 text-sm font-medium transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50">
          Search
        </button>
      </form>
    </div>
  );
}
