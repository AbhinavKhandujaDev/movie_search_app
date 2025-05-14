import Search from "@/components/search";
import { Button } from "@/components/ui/button";
import { navigateToResults } from "@/server-actions/movie";
import { FilmIcon, HeartIcon } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="w-screen h-screen grid place-items-center">
      <div className="w-96 flex gap-3 flex-col px-3">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <FilmIcon className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Movie Search</h1>
          <p className="text-muted-foreground">
            Search for movies using the OMDb API
          </p>
        </div>
        <Search
          className="h-[45px] rounded-s-[inherit]"
          required
          onAction={navigateToResults}
        />
        <div className="flex justify-center mt-8">
          <Link href="/favourites">
            <Button variant="outline">
              <HeartIcon className="text-red-700 fill-current" />
              View Favorites
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
