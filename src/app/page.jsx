import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <h1>main page</h1>
      <h4>
        <p>
          1. <Link href={"/csr"}> CSR</Link>
        </p>
        <p>
          2. <Link href={"/ssr"}> SSR</Link>
        </p>
        <p>
          3. <Link href={"/register"}> Register</Link>
        </p>
        <p>
          3. <Link href={"/gsap"}> GSAP</Link>
        </p>
      </h4>
    </div>
  );
}

export default page;
