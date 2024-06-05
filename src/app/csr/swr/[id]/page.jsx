import SwrDataFetcher from "@/components/swrDataFetcher";
import Link from "next/link";
import React from "react";

function page(params) {
  console.log(params.params.id);
  return (
    <div>
      <h1> SWR module User</h1>
      <div>
        <SwrDataFetcher
          id={params.params.id}
          url={`https://dummyjson.com/users`}
          linkaddress={`/csr/swr/${params.params.id}`}
        />
      </div>

      <div>
        <button>
          <Link href={"/csr/swr/"}>Go back</Link>
        </button>
      </div>
    </div>
  );
}

export default page;
