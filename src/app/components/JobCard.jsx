import { Roboto_Flex } from "next/font/google";
import { useState } from "react";

const roboto = Roboto_Flex({
  subsets: ["latin"],
});

export const JobCard = ({
  jobTitle,
  company,
  startEnd,
  imgSrc,
  imgAlt,
  last,
  lastOnColumn,
}) => {
  const [spin, setSpin] = useState(false);

  return (
    <article className="relative">
      <div className="absolute -left-11 top-0 hidden h-4 w-4 rounded-full bg-green-600 md:block"></div>
      {!last && (
        <div
          className={`absolute -left-10 top-7 hidden ${lastOnColumn ? "h-12" : "h-24"} w-1.5 rounded-full bg-green-600 md:block`}
        ></div>
      )}
      <div className="flex flex-row justify-between">
        <div>
          <h1 className={`${roboto.className} mb-2.5 text-base text-white`}>
            {jobTitle}
          </h1>
          <h2 className={`${roboto.className} mb-2.5 text-base text-white`}>
            {company}
          </h2>
          <h3 className={`${roboto.className} text-sm uppercase text-white`}>
            {startEnd}
          </h3>
        </div>
        <div>
          <img src={imgSrc} alt={imgAlt} className={`w-20 rounded-xl cursor-pointer ${spin ? "spin" : ""}`} onClick={() => {
            if (spin) return;

            setSpin(true);
            setTimeout(() => {
              setSpin(false);
            }, 1000);
          }} />
        </div>
      </div>
    </article>
  );
};
