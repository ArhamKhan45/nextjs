"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import "../scss/swrData.scss";
function SwrDataFetcher({ id, url, myclass, linkaddress }) {
  const datafetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(url, datafetcher);
  let showData;

  let userData = data && data.users;
  console.log(userData);

  if (userData) {
    showData = userData.map((item) => {
      if (item.id == id) {
        return (
          <div>
            <Link href={`${linkaddress}`}>
              {item.firstName} {item.lastName}
            </Link>
            <p>{item.age}</p>
            <p>{item.gender}</p>
            <p>{item.email}</p>
            <p>{item.phone}</p>
            <p>{item.username}</p>
            <p>{item.password}</p>
            <p>{item.birthDate}</p>
            <Image
              src={item.image}
              width={0}
              height={0}
              sizes={"100vw"}
              quality={75}
              className="userImg"
            />
          </div>
        );
      }
    });
  }

  if (error) showData = "Failed to load data";
  if (isLoading) showData = <div> loading...</div>;

  return <div className={myclass}>{showData}</div>;
}

export default SwrDataFetcher;
