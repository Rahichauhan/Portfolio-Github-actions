import Animatedtext from "@/components/Animatedtext";
import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/Rahi.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  //Three hooks provided by framer-motion
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>;
};
const about = () => {
  return (
    <>
      <Head>
        <title>Rahi Chauhan | About page..</title>
        <meta
          name="description"
          content="Passionate web developer with a strong penchant for backend technologies. I thrive on building robust and efficient systems that power the web. Committed to crafting seamless user experiences through cutting-edge server-side solutions. Constantly exploring new technologies and staying ahead in the ever-evolving world of web development"
        ></meta>
      </Head>
      <TransitionEffect/>
      <main className=" flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="">
          <Animatedtext text=" Passion Fuels Purpose!" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />

           <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 ">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="my-4 font-medium">
  &apos;Hello, I&apos;m Rahi Chauhan, a dedicated web developer with a
  passion for crafting the digital world. I specialize in backend
  development, where I thrive on architecting powerful and
  efficient systems that drive the web.&apos;
</p>
<p className="my-4 font-medium">
  &apos;My journey as a web developer is marked by a relentless pursuit
  of excellence. I&apos;m constantly honing my skills and staying at
  the forefront of technology to deliver cutting-edge solutions.&apos;
</p>

              <p className="my-4 font-medium">
               &apos; With a wealth of experience in coding and problem-solving, I&apos;m
                adept at turning concepts into functional, high-performance
                websites and applications. My love for clean, maintainable code
                ensures that every project I touch is not only user-friendly but
                also developer-friendly.&apos;
              </p>
              <p className="my-4 font-medium">
                &apos;Join me in the exciting realm of web development, where I turn
                ideas into reality and shape the online experiences of tomorrow.
                Let&apos;s code the future together.&apos;
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light
             xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light"></div>
              <Image
                src={profilePic}
                alt="RahiChauhan"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
         
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={100} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75  dark:text-light/75
                 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Connections
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={2} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75  dark:text-light/75
                 xl:text-center md:text-lg sm:text-base xs:text-sm">
                 Internship Experience
                </h2>
              </div>
            </div>
          </div>
          <Skills/>
          <Experience/>
          <Education/>
        </Layout>
      </main>
    </>
  );
};

export default about;
