import Navbar from "@/components/navbar";
import { PaginatedList } from "@/components/paginated-list";
import Search from "@/components/search";
import { navigateToResults } from "@/server-actions/movie";

export default async function Results({ params }: { params: Promise<any> }) {
  const { query } = await params;
  return (
    <div className="w-screen flex flex-col items-center gap-3">
      <Navbar>
        <Search
          className="h-[45px] rounded-s-[inherit] flex-1"
          required
          onAction={navigateToResults}
          defaultValue={decodeURIComponent(query)}
        />
      </Navbar>
      <PaginatedList query={query} />
    </div>
  );
}
