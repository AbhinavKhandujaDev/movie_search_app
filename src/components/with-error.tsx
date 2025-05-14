import { CircleAlertIcon } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const withError =
  ({
    title = "Something went wrong!",
    description,
    retry = true,
    containerClass,
  }: {
    title?: string;
    description?: string;
    retry?: boolean;
    containerClass?: string;
  }) =>
  ({ reset }: { reset?: () => void }) => {
    return (
      <div
        className={cn(
          "w-full h-full grid place-items-center",
          "text-2xl",
          containerClass
        )}
      >
        <div className="bg-background z-50 max-w-[400px] rounded-md border p-4 shadow-lg">
          <div className="flex gap-2">
            <div className="flex grow gap-3">
              <CircleAlertIcon
                className="mt-0.5 shrink-0 text-red-500 text-md"
                aria-hidden="true"
              />
              <div className="flex grow flex-col gap-3">
                <div className="space-y-1">
                  <p className="text-md font-medium">{title}</p>
                  <p className="text-muted-foreground text-md">{description}</p>
                </div>
                {retry && (
                  <div className="flex gap-2">
                    <Button size="sm" onClick={reset}>
                      Try again
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default withError;
