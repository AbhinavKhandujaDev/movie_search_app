import Spinner from "@/components/spinner";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Spinner label="Getting results..." />
    </div>
  );
}
