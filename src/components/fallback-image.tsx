"use client";

import Image, { ImageProps } from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import { cn } from "@/lib/utils";

export function FallbackImage({
  fallbackSrc,
  src,
  className,
  ...rest
}: ImageProps & { fallbackSrc: string }) {
  const [imageSrc, setImageSrc] = useState(src === "N/A" ? fallbackSrc : src);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = useCallback(() => {
    setImageSrc(fallbackSrc || "/");
  }, []);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-foreground">
          <Skeleton className="w-full h-full" />
        </div>
      )}

      <Image
        src={imageSrc}
        onError={handleError}
        onLoadingComplete={handleLoad}
        className={cn(className, "bg-muted-foreground")}
        {...rest}
      />
    </div>
  );
}
