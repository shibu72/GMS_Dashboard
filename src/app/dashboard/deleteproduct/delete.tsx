import { Button } from "@/components/ui/button";
import React from "react";

interface ProductId {
  productId: string;
}

export default function Delete({ productId }: ProductId) {
  const handelDelete = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:5000/api/product/${productId}`, {
      method: "DELETE",
    });
    const del = res.json();
    console.log(del);
  };
  return (
    <div>
      <Button onClick={handelDelete}>Delete</Button>
    </div>
  );
}
