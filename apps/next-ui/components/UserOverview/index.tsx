"use client";
import { useQuery } from "@tanstack/react-query";

function UserOverview() {
  const query = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const userResponse = await fetch("http://localhost:8080/user/3");
      const user = await userResponse.json();
      return user;
    },
  });
  return (
    <>
      <div>{JSON.stringify(query.data)}</div>
      <button className="bg-black">This is a button</button>
    </>
  );
}

export default UserOverview;
