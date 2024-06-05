import Link from "next/link";
import React from "react";

function notfound() {
  return (
    <div>
      PAGE NHI H, BHG JA YAAHA SA
      <center>
        <p>Error : 404 Page not found</p>
        <div>
          <Link href={"/"}> Go back home</Link>
        </div>
      </center>
    </div>
  );
}

export default notfound;
