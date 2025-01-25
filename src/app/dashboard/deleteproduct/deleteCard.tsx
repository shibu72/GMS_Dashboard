"use client";
import React from "react";
import Delete from "./delete";
interface data {
  _id: string;
  id: string;
  name: string;
  image: string;
  price: string;
  description: string;
}
export default function DeleteCard({ data }: { data: data }) {
  // const handelDelete= async ()=>{

  // }
  console.log(data);

  return (
    <>
      {data.map((item: data) => {
        return (
          <div
            key={item._id}
            className="p-2 w-3/6 m-auto mt-10 border flex justify-between items-center rounded-lg"
          >
            <div className="flex justify-center gap-6 items-center text-base">
              <span>
                <img
                  className="w-20 rounded-lg"
                  src="/fiber laser.jpeg"
                  alt=""
                />
              </span>
              <h1>Name: {item.name}</h1>
              <p>Description: {item.description.slice(0, 20)}</p>
              <p>Price: ${item.price}</p>
            </div>
            <Delete productId={item._id} />
          </div>
        );
      })}
    </>
  );
}
