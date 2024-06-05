"use client";
import {} from "@/utils/impfunc";
import React, { useEffect, useState } from "react";

function Useeffectbasic() {
  const [data, setdata] = useState([]);
  const datafetcher = async () => {
    try {
      const res = await fetch("https://dummyjson.com/users", {
        cache: "no-cache",
      });
      const jsondata = await res.json();
      // console.log(jsondata.users);
      setdata(() => {
        return jsondata.users;
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    datafetcher();
  }, []);

  // console.log(data);
  let showdata;
  if (data) {
    showdata = data.map((item) => {
      return <h3 key={item.id}> {item.firstName}</h3>;
    });
  } else {
    showdata = "";
  }
  return (
    <div>
      <h1>CSR Old method / Way</h1>
      {showdata}
    </div>
  );
}

export default Useeffectbasic;
