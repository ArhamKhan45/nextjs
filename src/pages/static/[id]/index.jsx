import React from "react";

function index(props) {
  console.log(props.data);
  return (
    <div className="p-5">
      <h1>hello world</h1>
      <h3>
        {props.data.id} {props.data.firstName} {props.data.lastName}
      </h3>
    </div>
  );
}
export const getStaticPaths = async () => {
  const res = await fetch(`https://dummyjson.com/users`);
  let data = await res.json();

  const allUserId = data.users.map((user) => user.id);
  //   console.log(allUserId);
  return {
    paths: allUserId.map((user_id) => {
      return {
        params: {
          id: `${user_id}`,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async (params) => {
  const id = params.params.id;
  console.log(id);
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  let data = await res.json();

  return {
    props: { data },
  };
};

export default index;
