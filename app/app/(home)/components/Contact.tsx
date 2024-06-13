"use client";

import CardWrapper from "@/components/utilsComp/card-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { LoginSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useState } from "react";
import Title from "./Title";
import emailjs from 'emailjs-com';

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      company: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    setLoading(true);

    const templateParams = {
      company: data.company,
      message: data.message,
    };

    // EmailJS integration
    emailjs.send(
      'service_f6gqw1o', // Your EmailJS service ID
      'template_3x0v6a7', // Your EmailJS template ID
      templateParams,
      'GTyIEXjFer54a9cXI' // Your EmailJS public key
    )
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      setLoading(false);
    })
    .catch((error) => {
      console.error('Failed to send email.', error);
      setLoading(false);
    });
  };

  return (
    <div className="w-full flex flex-col items-center p-20 space-y-8" id="contact">
      <Title text="Contact Us" />
      <CardWrapper
        label="Let's make some magic!"
        title="Your Idea"
        backButtonHref="/auth/register"
        backButtonLabel=""
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="company name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea {...field} placeholder="Your message" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Loading..." : "Contact"}
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </div>
  );
};

export default LoginForm;
