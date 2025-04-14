"use client";

import { Roboto_Flex } from "next/font/google";

const roboto = Roboto_Flex({
  subsets: ["latin"],
});

export const ContactForm = () => {
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });
    // Success and error handling ...
  };

  return (
    <form className="flex flex-col" name="contact" method="POST" data-netlify="true" onSubmit={handleFormSubmit}>
      <input
        name="email"
        className={`${roboto.className} mb-5 w-full rounded-xl p-2 sm:max-w-md`}
        type="email"
        placeholder="Your email address"
        required
      />
      <textarea
        name="message"
        className={`${roboto.className} mb-5 w-full rounded-xl p-2 sm:max-w-md`}
        placeholder="Your message"
        required
      ></textarea>
      <input
        className={`${roboto.className} mb-5 w-full cursor-pointer rounded-xl bg-orange-500 p-2 text-white sm:max-w-56`}
        type="submit"
        value="Send"
      />
    </form>
  );
};
