"use server";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";
interface itemType {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
}
export default async function Page() {
  const call = await fetch("http://localhost:5000/api/product/getAll");
  const res = await call.json();
  const data = res.data;
  console.log(data[0].name);

  return (
    <div className="flex flex-wrap justify-center items-center space-x-4 space-y-4">
      {data.map((item: itemType,index:number) => {
        // const description = item.description;
        // description.slice
        return (
          <div key={index} className="w-96">
            <Card>
              <CardHeader>
                <CardTitle className="capitalize">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <img src="/fiber laser.jpeg" alt="image" />
                <p className="capitalize">price: ${item.price}</p>
                <CardDescription>{
                  item.description.slice(0,50)
                  }
                  .....</CardDescription>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
