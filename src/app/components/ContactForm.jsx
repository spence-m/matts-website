"use client";

import { Roboto_Flex } from "next/font/google";
import { forwardRef, useState } from "react";

const roboto = Roboto_Flex({
  subsets: ["latin"],
});

export const ContactForm = forwardRef(({ }, ref) => {
  const [loading, setLoading] = useState(false);
  const [sendText, setSendText] = useState("Send");

  const handleFormSubmit = async (event) => {
    try {
      event.preventDefault();
      setLoading(true);
      const formData = new FormData(event.target);
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      event.target.reset();
      setSendText("Sent!");
      setTimeout(() => {
        setSendText("Send");
      }, 2000);
    } catch (e) {
      setSendText("Please try again shortly");
      setTimeout(() => {
        setSendText("Send");
      }, 2000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col items-center" name="contact" method="POST" onSubmit={handleFormSubmit} ref={ref}>
      <input type="hidden" name="form-name" value="contact" />
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
      <button className={`${roboto.className} mb-5 w-full cursor-pointer rounded-xl bg-orange-500 p-2 text-white sm:max-w-56 flex justify-center items-center h-[40px]`} type="submit">
        {loading && <span class="loader"></span>}
        {!loading && <span className={sendText === "Sent!" ? "text-sky-950" : sendText === "Please try again shortly" ? "text-sky-950" : ""}>{sendText}</span>}
      </button>
    </form>
  );
});
