"use client";
import withError from "@/components/with-error";

export default withError({
  title: "Error while fetching movies",
  retry: true,
});
