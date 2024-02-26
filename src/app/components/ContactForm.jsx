"use client";
import { Roboto_Flex } from "next/font/google";

const roboto = Roboto_Flex({
  subsets: ["latin"],
});

export const ContactForm = () => {
  return (
    <form className="flex flex-col">
      <input
        className={`${roboto.className} mb-5 w-full rounded-xl p-2 sm:max-w-md`}
        type="text"
        placeholder="Your email address"
      />
      <textarea
        className={`${roboto.className} mb-5 w-full rounded-xl p-2 sm:max-w-md`}
        placeholder="Your message"
      ></textarea>
      <input
        className={`${roboto.className} mb-5 w-full cursor-pointer rounded-xl bg-orange-500 p-2 text-white sm:max-w-56`}
        type="submit"
        value="Send"
        onClick={(e) => {
          e.preventDefault();
          console.log("clicked");
        }}
      />
    </form>
  );
};
