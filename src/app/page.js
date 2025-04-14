import { Roboto_Flex } from "next/font/google";

import { ContactForm } from "./components/ContactForm";
import { JobCards } from "./components/JobCards";

const roboto = Roboto_Flex({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <header
        className={`${roboto.className} container mx-auto p-4 text-2xl font-bold`}
      >
        <h1 className="text-orange-500">Matt Spencer</h1>
      </header>
      <main>
        <img
          src="/svg/wave.svg"
          className="absolute left-0 right-0 -z-10 mix-blend-overlay"
        />
        <div className="container mx-auto flex flex-col items-center">
          <section className="mb-12 max-w-2xl">
            <img
              className="clear-left mx-auto mb-4 w-48 rounded-xl transition duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 sm:float-left sm:mb-0 sm:mr-6"
              src="/.netlify/images?url=/images/matt-with-cat_fixed.jpg?w=211&h=281&q=100"
              alt="Matt holding his cat, Gizmo."
            />
            <h1 className="mb-6 text-2xl font-bold text-white">
              Hi 👋, I’m Matt, a front-end developer who specialises in React
            </h1>
            <h1 className="text-2xl font-bold text-white">
              I’m currently <span className="text-orange-500">#opentowork</span>
              . You can contact me about remote opportunities
            </h1>
          </section>
          <section className="mb-12 w-full max-w-2xl">
            <h2 className={`${roboto.className} mb-7 text-xl text-green-600 text-center`}>
              Experience
            </h2>
            <JobCards />
          </section>
          <section className="mb-12 w-full max-w-2xl">
            <h2 className={`${roboto.className} mb-7 text-xl text-green-600 text-center`}>
              Get in touch
            </h2>
            <ContactForm />
          </section>
        </div>
      </main>
      <footer>
        <h1
          className={`${roboto.className} text-center text-2xl font-bold text-orange-500`}
        >
          {new Date().getFullYear()}
        </h1>
      </footer>
    </>
  );
}
