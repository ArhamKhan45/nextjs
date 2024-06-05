import React from "react";

function index(props) {
  return (
    <div>
      <h1 className=" text-2xl font-bold ">
        SSG ( STATIC SITE GENERATION ) --- ( STATIC GENERATION )
      </h1>
      <h4 className=" text-lg font-bold "> getServerSideProps()</h4>
      <div>
        {props.data.map((user) => {
          return (
            <p key={user.id}>
              {user.id} {user.firstName} {user.lastName}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  try {
    const res = await fetch("https://dummyjson.com/users");
    let data = await res.json();
    data = data.users;
    return {
      props: { data },
    };
  } catch (err) {
    return console.log(err);
  }
};

export default index;
