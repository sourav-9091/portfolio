import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import bugFlow from "@/public/bugFlow.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Android Developer",
    location: "Bhubaneswar, Odisha",
    description:
      "I worked as an android developer building Human Resource Management System (HRMS) using Flutter and BLOC",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
] as const;

export const projectsData = [
  {
    title: "BugFlow",
    description:
      "I worked as a full-stack developer on this project. Here Users can track there Issues with a Clean UI",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Radix UI"],
    imageUrl: bugFlow,
  },
  {
    title: "BLogly",
    description:
      "App To Create Blogs with simple and minimilist UI with proper State Management",
    tags: ["Dart", "Flutter", "BLoC", "Supabase", "Git"],
    imageUrl: rmtdevImg,
  },
  {
    title: "CloudCart",
    description:
      "App To Create Blogs with simple and minimilist UI with proper State Management",
    tags: ["Dart", "Flutter", "BLoC", "Supabase", "Git"],
    imageUrl: rmtdevImg,
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Flutter",
  "Coroutins",
  "Express",
  "PostgreSQL",
  "Python",
  "Machine Learning",
] as const;
