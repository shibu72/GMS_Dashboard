
import React from "react";
import DeleteCard from "./deleteCard";

export default async function Page() {
  const call = await fetch("http://localhost:5000/api/product/getAll");
  const res = await call.json();
  const data = res.data;
  console.log(data[0].name);

  return (
    <div>
      <DeleteCard data={data}/>
    </div>
  );
}
