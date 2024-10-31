import React from "react";

type User = {
  id: number;
  name: string;
};

async function UsersPage() {
  await new Promise((resolve)=>setTimeout(resolve, 4000));
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  // giving wrong URL for checking error page
  // const response = await fetch("https://jsonplaceholder.typicode.com/users1234");

  const users = await response.json();
  console.log(users);

  return (
    <div className="container flex flex-col gap-2 mx-auto pt-4">
        <h2 className="text-2xl font-bold">Users Details</h2>
      {users.map((user: User) => {
        return (
          <div key={user.id}>
            <p className="text-xl">ID : {user.id}</p>
            <p className="text-xl">Name : {user.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default UsersPage;