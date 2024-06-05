import React from "react";

function Serverside(props) {
  const showdata = props.data.users.map((item) => {
    return (
      <h5 key={item.id}>
        {item.id}. {item.firstName} {item.lastName}
      </h5>
    );
  });

  return (
    <div className="p-8">
      <h1 className=" text-2xl font-bold ">SSR ( SERVER SIDE RENDERING ) </h1>
      <h4 className=" text-lg font-bold "> getServerSideProps()</h4>
      <div>{showdata}</div>
    </div>
  );
}

// This gets called on every request
export const getServerSideProps = async () => {
  const datafetcher = async () => {
    const res = await fetch("https://dummyjson.com/users");
    return await res.json();
  };

  const data = await datafetcher();
  // console.log(data);
  return {
    props: { data },
  };
};

export default Serverside;
