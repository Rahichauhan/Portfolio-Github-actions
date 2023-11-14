import React from "react";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";
const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justify-between "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize "
          >
            @{company}
          </a>
        </h3>
        <span className=" capitalize font-medium text-dark/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark origin-top dark:bg-light"
        ></motion.div>
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Web Developer"
            company="LIFES"
            // companyLink="www.google.com"
            time="2023-Present "
            // address="Mountain View, CA"
            work="
            During my enriching internship at Life's Startup, a trailblazing provider of ambulance services, I assumed the role of a Full Stack Web Developer. In this dynamic environment, I collaborated closely with the development team, actively contributing to the evolution of the company's web platform. 
            "
          />

          <Details
            position="AWS Academy Intern"
            company="AICTE"
            // companyLink="www.google.com"
            time="2023-Present "
            // address="Mountain View, CA"
            work="As a dedicated intern at the AWS Academy of Foundation and Architecture, facilitated by AICTE, I delved into the realm of cloud computing and infrastructure. This transformative experience allowed me to translate theoretical knowledge into practical skills, working on tangible projects that showcased the power and versatility of AWS services. "
/>
          <Details
            position="Marketing Contributor"
            company="Blockchain Club"
            // companyLink="www.google.com"
            time="2023-Present "
            address="RCOEM Nagpur"
            work="In my role as a Marketing Contributor for the Blockchain Club, I embraced a multifaceted approach to elevate the club's influence within the student community. Spearheading comprehensive marketing strategies, I played a pivotal role in expanding club membership and significantly increasing attendance at our blockchain-related events."

           /> 
        </ul>
      </div>
    </div>
  );
};

export default Experience;
