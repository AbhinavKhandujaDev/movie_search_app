"use client";

import { MovieListItem } from "@/types/movie";
import Spinner from "./spinner";
import { useEffect, useRef, useState } from "react";
import CardList from "./card-list";

export const PaginatedList = ({ query }: { query: string }) => {
  const pageRef = useRef(1);
  const totalMovies = useRef(1);

  const [list, setList] = useState<MovieListItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loaderRef = useRef<HTMLDivElement | null>(null);

  const showLoader = list.length < totalMovies.current;

  const fetchList = () => {
    if (isLoading) return;
    setIsLoading(true);
    fetch(`/api/movies?s=${query}&page=${pageRef.current}`)
      .then((res) => res.json())
      .then(({ Search, totalResults }) => {
        setIsLoading(false);
        setList((prev) => [...prev, ...(Search || [])]);
        pageRef.current += 1;
        totalMovies.current = Number(totalResults);
      });
  };

  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || isLoading) return;
        fetchList();
      },
      { threshold: 1.0 }
    );

    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <CardList data={list} />
      {!list?.length && !showLoader && (
        <span className="text-muted text-4xl pt-20">No movies found</span>
      )}
      {showLoader && (
        <div
          ref={loaderRef}
          className="min-h-[45px] py-5 grid place-items-center"
        >
          <Spinner />
        </div>
      )}
    </>
  );
};
