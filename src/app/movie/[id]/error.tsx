"use client";
import withError from "@/components/with-error";

export default withError({
  title: "Error while fetching movie detail",
  retry: true,
});
