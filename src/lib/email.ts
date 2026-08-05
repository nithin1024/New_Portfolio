"use client";

import emailjs from "@emailjs/browser";
import type { ContactFormData } from "@/types";

export async function sendContactEmail(data: ContactFormData) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    // Dev / demo fallback when EmailJS is not configured
    await new Promise((resolve) => setTimeout(resolve, 900));
    console.info("[Contact] EmailJS not configured. Message captured locally:", data);
    return { success: true, demo: true as const };
  }

  await emailjs.send(
    serviceId,
    templateId,
    {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      to_name: "Bandaru Nithinkumar",
    },
    publicKey
  );

  return { success: true, demo: false as const };
}
