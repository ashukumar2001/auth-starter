import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Link } from "@tanstack/react-router";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import authClient from "@/lib/auth-client";
import { getFullURL } from "@/lib/get-full-url";
const formSchema = z.object({
  name: z.string().min(3).max(40),
  email: z.string().email(),
  password: z.string().min(8).max(16),
});
export default function SignupForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    const { data, error } = await authClient.signUp.email(
      {
        ...values,
        callbackURL: getFullURL("/dashboard"),
      },
      {
        onRequest: (ctx) => {
          //show loading
          console.log(ctx);
        },
        onSuccess: (ctx) => {
          //redirect to the dashboard or sign in page
          console.log(ctx);
        },
        onError: (ctx) => {
          // display the error message
          alert(ctx.error.message);
        },
      }
    );
    console.log(data, error);
  }
  return (
    <Card className="w-[350px]">
      <CardHeader className="text-center">
        <CardTitle>Sign up to Auth Starter</CardTitle>
        <CardDescription>
          We just need a few details to get you started.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email address"
                        {...field}
                      />
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
                      <Input placeholder="Enter your password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full">
              Sign up
            </Button>
          </form>
        </Form>
        <p className="text-center text-xs text-muted-foreground mt-5">
          Already have an acccount?&nbsp;
          <Link
            className="underline hover:no-underline text-primary"
            to="/auth/login"
          >
            Sign in
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
