import Link from "next/link";
import React from "react";

const DataFetcher = async () => {
  let data, err;
  try {
    const res = await fetch("https://dummyjson.com/users", {
      cache: "no-cache",
    });
    data = await res.json();
  } catch (error) {
    err = new Error("Failed to fetched data ");
  }

  let showUserData;

  if (data)
    return (showUserData =
      data &&
      data.users &&
      data.users.map((item) => {
        return (
          <div key={item.id}>
            <p>
              <Link href={`/ssr/${item.firstName}`}>
                {item.firstName} {item.maidenName} {item.lastName}
              </Link>
            </p>
          </div>
        );
      }));
  else {
    console.log(err);
    return (showUserData = err.message);
  }
};

async function page() {
  const showUserData = await DataFetcher();
  return (
    <div>
      <h1>Fetching data by Server side Rendering</h1>
      {showUserData}
    </div>
  );
}

export default page;
