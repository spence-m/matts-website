import { JobCard } from "./JobCard";

// Harrods // Sigma
// Lush    // Sigma
// GoCo    // GD
// Box

// TODO: Make this responsive.
export const JobCards = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-4 gap-x-20 gap-y-11 sm:grid-cols-2">
      <JobCard
        jobTitle="Digital Developer"
        company="Harrods"
        startEnd="May 2023 - Present"
        imgSrc="/images/harrods_logo.jpg"
        imgAlt="Harrods, the luxury brand, logo"
      />
      <JobCard
        jobTitle="Software Developer"
        company="Sigma Systems"
        startEnd="Mar 2017 - Nov 2017"
        imgSrc="/images/sigma_systems_logo.jpg"
        imgAlt="Sigma System's logo"
      />
      <JobCard
        jobTitle="Web Engineer"
        company="LUSH Digital"
        startEnd="Jul 2021 - Apr 2023"
        imgSrc="/images/lush_digital_logo.jpg"
        imgAlt="Lush, the inventors of the bathbomb, logo"
      />
      <JobCard
        jobTitle="Junior Software Developer"
        company="Sigma Systems"
        startEnd="Nov 2015 - Mar 2017"
        imgSrc="/images/sigma_systems_logo.jpg"
        imgAlt="Sigma System's logo"
      />
      <JobCard
        jobTitle="Software Engineer"
        company="GoCompare"
        startEnd="Jun 2020 - Jun 2021"
        imgSrc="/images/gocompare_logo.jpg"
        imgAlt="GoCompare, the insurance broker with the annoying operatic singer, logo"
      />
      <JobCard
        jobTitle="Junior Software Engineer"
        company="General Dynamics"
        startEnd="Sep 2014 - Nov 2015"
        imgSrc="/images/general_dynamics_logo.jpg"
        imgAlt="General Dynamics' logo"
        last
      />
      <JobCard
        jobTitle="Software Engineer"
        company="Box UK"
        startEnd="Nov 2017 - Mar 2020"
        imgSrc="/images/box_uk_logo.jpg"
        imgAlt="Box UK, a digital agency based in Cardiff, logo"
        lastOnColumn
      />
    </div>
  );
};
