"use server";

import { redirect } from "next/navigation";

export async function navigateToResults(data: FormData) {
  const search = (data.get("search") || "") as string;
  redirect(`/search/${encodeURIComponent(search)}`);
}
