"use client";
import {} from "@/utils/impfunc";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";

function Useeffectnewcheck() {
  const [data, setdata] = useState([]);
  console.log(data);
  useEffect(() => {
    const datafetcher = async () => {
      const res = await fetch("https://dummyjson.com/users");
      setdata(await res.json());
    };
    datafetcher();
  }, []);

  return (
    <div>
      <h1>CSR Way</h1>
      {data &&
        data.users &&
        data.users.map((user) => {
          return (
            <h5 key={user.id}>
              <Link href={`/csr/useeffectnewcheck/${user.id}`}>
                {user.firstName}
              </Link>
            </h5>
          );
        })}
    </div>
  );
}

export default Useeffectnewcheck;
