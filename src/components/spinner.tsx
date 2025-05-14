import { Loader2Icon } from "lucide-react";
import React from "react";

const Spinner = ({ label }: { label?: string }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Loader2Icon className="h-8 w-8 animate-spin text-primary" />
      {label && <p className="text-muted-foreground">{label}</p>}
    </div>
  );
};

export default Spinner;
