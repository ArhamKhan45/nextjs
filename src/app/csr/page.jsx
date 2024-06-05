import Link from "next/link";

function page() {
  return (
    <div>
      <h1>
        <Link href={`/csr/useeffectbasic`}>Use Effect Basic</Link>
      </h1>

      <h1>
        <Link href={`/csr/useeffectnewcheck`}>Use Effect new check</Link>
      </h1>
      <h1>
        <Link href={`/csr/swr`}>SWR </Link>
      </h1>
    </div>
  );
}

export default page;
