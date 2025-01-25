"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { CheckCircle } from "lucide-react";


const formSchema = z.object({
  productName: z.string().min(2).max(50),
  productDescription: z.string().min(22).max(500),
  productPrice: z.string().min(1).max(50),
  productImage: z.string(),
  productCatagory: z.string().min(2).max(50),
});

export default function Page() {
  const {toast} = useToast()
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: "",
      productDescription: "",
      productPrice: "",
      productImage: "",
      productCatagory: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const response = await fetch("http://localhost:5000/api/product", {
        method: "POST",
        body: JSON.stringify({
          image: values.productImage,
          name: values.productName,
          price: values.productPrice,
          catagory: values.productCatagory,
          description: values.productDescription,
        }),
        headers: myHeaders,
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Login failed:", errorData);
        // Display error message to the user (e.g., using a toast or alert)
        alert(`Login failed: ${errorData.message || "Unknown error"}`);
        return;
      }
      toast({
        title: `Product Added Successfully`,
        action: <ToastAction className="text-green-500 w-fit rounded-full border-none" altText="sucess"><CheckCircle/> </ToastAction>
      })
      const data = await response.json();
      console.log("data added successfully", data);

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="p-8 w-3/6 m-auto border rounded-lg">
      <Form {...form}>
        <h1 className="text-center m-auto mb-6 flex justify-center text-2xl font-semibold">
          Add new Product
        </h1>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-6 mb-4">
            <FormField
              control={form.control}
              name="productImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Image</FormLabel>
                  <FormControl>
                    <Input
                      className=" file:bg-zinc-500 file:rounded file:border-b file:text-white"
                      type="file"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="productName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input placeholder="product name " {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="productCatagory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Catagory </FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="productPrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Price</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="product price"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="productDescription"
              render={({ field }) => (
                <FormItem className="col-span-2 ">
                  <FormLabel>Product Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="product description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit">Add</Button>
        </form>
      </Form>
    </div>
  );
}
