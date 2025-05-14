"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { MoveLeftIcon } from "lucide-react";

export function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    window.history.length ? router.back() : router.push("/");
  };

  return (
    <Button variant="ghost" onClick={handleBack}>
      <MoveLeftIcon /> Back
    </Button>
  );
}
