"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I'm currently pursuing a <span className="font-bold">Bachelor's Degree</span> in Computer Science and System Engineering (<span className="font-bold">CSSE</span>) at kalinga institute of industrial technology (<span className="font-bold">KIIT</span>) University,Bhubaneswar, India.{" "}
        <span className="font-medium">I'm Full-Stack Web Developer and i can Develop Android Apps in Flutter </span>.{" "}
        <span className="underline"></span> 
        My core stack is{" "}
        <span className="font-bold">
          Flutter, React, Next.js, Node.js, AWS, Docker, Kubernates
        </span>
        . I am also familiar with Android(Kotlin)(Coroutins and Livedata), Prisma, TypeScript. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-bold">Full-Time Position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy Learing
        Spanish, watching moviesI also enjoy{" "}
        <span className="font-bold">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-bold">history of computer and technology</span>. I also
        want to learn how to play the guitar.
      </p>
    </motion.section>
  );
}
