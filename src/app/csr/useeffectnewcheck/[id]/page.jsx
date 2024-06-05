"use client";

import { useParams } from "next/navigation";
import React, { useState, useMemo, useEffect } from "react";
function page(params) {
  // console.log(useParams());

  const [data, setData] = useState([]);
  // const url_id = params.params.id;
  const url_id = useParams().id;

  useEffect(() => {
    const userDatafetcher = async () => {
      // console.log(url_id);
      try {
        // console.log(`https://dummyjson.com/users/${url_id}`);
        const res = await fetch(`https://dummyjson.com/users/${url_id}`);
        setData(await res.json());
      } catch (error) {
        console.log(error);
      }
    };
    userDatafetcher();
  }, []);

  // console.log(data);
  let dataarray;
  if (data) {
    dataarray = [data].flat().map((i, index) => {
      // console.log(i);
      return (
        <p key={index}>
          {i.firstName} {i.lastName}
        </p>
      );
    });
  } else {
    dataarray = "";
  }
  // console.log(dataarray);
  return (
    <div>
      {/* {data.firstName} {data.lastName} */}
      {dataarray}
      {/* <div>{dataarray}</div> */}
    </div>
  );
}

export default page;
