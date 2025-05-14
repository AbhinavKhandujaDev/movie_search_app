import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const query = req.nextUrl.search.slice(1); // Removing "?" from http:...?p1=abc
  const url = `${process.env.MOVIE_API}&${query}&type=movie`;
  try {
    const data = await fetch(url).then((res) => res.json());
    const response = NextResponse.json(data);
    response.headers.set("Cache-Control", "public, max-age=3600"); // Caching result to avoid server hit on every reload
    return response;
  } catch (error) {
    return NextResponse.json({}, { status: 400 });
  }
}
