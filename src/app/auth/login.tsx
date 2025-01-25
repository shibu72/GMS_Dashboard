// "use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(50),
});

function Login() {
  const [, setCookie] = useCookies(["token"]);
  const navig = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Submitting form values:", values);

    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        body: JSON.stringify({
          email: values.email,
          password: values.password,
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

      const data = await response.json();
      setCookie("token", data.token);
      navig.push("/dashboard");
      console.log("Login successful:", data);

      // Handle successful login (e.g., redirect or store token)
    } catch (error) {
      console.error("An error occurred during login:", error);
      // Display a generic error message to the user
      alert("An unexpected error occurred. Please try again later.");
    }
  }

  return (
    <div className="w-96 m-auto border p-4 rounded-lg absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h1 className="text-center m-auto flex justify-center text-2xl font-semibold">
        Login to GMS
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="password here" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Login</Button>
        </form>
      </Form>
    </div>
  );
}

export default Login;
