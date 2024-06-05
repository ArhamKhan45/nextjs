import React from "react";

async function page({ params }) {
  console.log(params);
  return <h1> chaloooo {params.user}</h1>;
}

export default page;
