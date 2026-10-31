"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ArrowRight, LoaderCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  businessName: z.string().trim().optional(),
  service: z.string().min(1, "Please select a service."),
  budget: z.string().optional(),
  message: z
    .string()
    .trim()
    .min(20, "Please share a little more about your project (at least 20 characters)."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const serviceOptions = [
  "Business website",
  "Custom web application",
  "Website redesign and optimization",
  "Website maintenance and support",
  "Not sure yet",
];

const budgetOptions = [
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹2,00,000",
  "₹2,00,000+",
  "Not sure yet",
];

const inputClassName =
  "h-12 rounded-lg border-ink/15 bg-white px-4 text-sm text-ink shadow-none placeholder:text-ink/35 focus-visible:border-brand focus-visible:ring-brand/20";

const labelClassName = "mb-2 block text-sm font-medium text-ink";

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      businessName: "",
      service: "",
      budget: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Unable to submit your enquiry.");
      }

      setSubmitStatus("success");
      reset();
    } catch {
      setSubmitStatus("error");
    }
  }

  return (
    <div className="rounded-xl border border-ink/10 bg-white p-6 sm:p-8 lg:p-9">
      <div className="mb-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          Project enquiry
        </p>

        <h2 className="font-serif text-3xl tracking-[-0.035em] text-ink sm:text-4xl">
          Tell us about your project.
        </h2>

        <p className="mt-3 text-sm leading-7 text-ink/55">
          Share a few details so we can understand what you need and how we
          might help.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClassName}>
              Your name <span className="text-brand">*</span>
            </label>
            <Input
              id="name"
              placeholder="Enter your name"
              className={inputClassName}
              aria-invalid={!!errors.name}
              {...register("name")}
            />
            {errors.name && (
              <p className="mt-1.5 text-xs text-red-600">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className={labelClassName}>
              Email address <span className="text-brand">*</span>
            </label>
            <Input
              id="email"
              type="email"
              placeholder="you@company.com"
              className={inputClassName}
              aria-invalid={!!errors.email}
              {...register("email")}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="businessName" className={labelClassName}>
            Business name <span className="text-ink/40">(Optional)</span>
          </label>
          <Input
            id="businessName"
            placeholder="Your company or business"
            className={inputClassName}
            {...register("businessName")}
          />
        </div>

        <div>
          <label htmlFor="service" className={labelClassName}>
            What do you need help with?{" "}
            <span className="text-brand">*</span>
          </label>

          <select
            id="service"
            className={`${inputClassName} w-full`}
            defaultValue=""
            aria-invalid={!!errors.service}
            {...register("service")}
          >
            <option value="" disabled>
              Select a service
            </option>

            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>

          {errors.service && (
            <p className="mt-1.5 text-xs text-red-600">
              {errors.service.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="budget" className={labelClassName}>
            Estimated project budget{" "}
            <span className="text-ink/40">(Optional)</span>
          </label>

          <select
            id="budget"
            className={`${inputClassName} w-full`}
            defaultValue=""
            {...register("budget")}
          >
            <option value="">Select an approximate budget</option>

            {budgetOptions.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className={labelClassName}>
            Tell us about your project{" "}
            <span className="text-brand">*</span>
          </label>

          <Textarea
            id="message"
            placeholder="What are you trying to build, improve, or solve?"
            rows={5}
            className="min-h-32 resize-y rounded-lg border-ink/15 bg-white px-4 py-3 text-sm leading-6 text-ink shadow-none placeholder:text-ink/35 focus-visible:border-brand focus-visible:ring-brand/20"
            aria-invalid={!!errors.message}
            {...register("message")}
          />

          {errors.message && (
            <p className="mt-1.5 text-xs text-red-600">
              {errors.message.message}
            </p>
          )}
        </div>

        {submitStatus === "success" && (
          <p
            role="status"
            className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700"
          >
            Your enquiry has been submitted successfully. Thank you for
            reaching out!
          </p>
        )}

        {submitStatus === "error" && (
          <p role="alert" className="text-sm text-red-600">
            Something went wrong while submitting your enquiry. Please try
            again or contact us directly.
          </p>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="group h-12 w-full gap-3 rounded-lg bg-brand text-sm font-semibold text-white hover:bg-blue-700"
        >
          {isSubmitting ? (
            <>
              <LoaderCircle size={17} className="animate-spin" />
              Sending enquiry...
            </>
          ) : (
            <>
              Submit project enquiry
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </>
          )}
        </Button>

        <p className="text-center text-xs leading-5 text-ink/45">
          Your information will only be used to understand and respond to your
          enquiry.
        </p>
      </form>
    </div>
  );
}