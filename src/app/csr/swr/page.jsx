"use client";
import Link from "next/link";
import React from "react";
import useSWR from "swr";

function page() {
  const datafetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://dummyjson.com/users",
    datafetcher
  );
  let showdata;
  if (error) {
    showdata = <div> failed to load data </div>;
  } else if (isLoading) {
    showdata = <div> Loading heheheh</div>;
  } else {
    showdata =
      data &&
      data.users.map((i) => {
        return (
          <div key={i.id}>
            <Link href={`/csr/swr/${i.id}`}>
              {i.firstName} {i.lastName}
            </Link>
          </div>
        );
      });
  }
  return (
    <div>
      <h1> SWR module</h1>
      <div>{showdata}</div>
    </div>
  );
}

export default page;
