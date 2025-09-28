import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import netflixUI from '../assets/icons/netflixUI.png'
import blinkitUI from '../assets/icons/blinkitUI.png'
import weather from '../assets/icons/weather.png'
import auth from '../assets/icons/auth.png'
import graph from '../assets/graph.png'
import cgg from '../assets/icons/cgg.png'
import rbc from '../assets/icons/rbc.png'
import leetvision from "../assets/icons/leetvision.png"
import chatbotLogo from "../assets/icons/chatbotLogo.png"
import algoLogo from "../assets/icons/algoLogo.png"
import {useInView} from 'react-intersection-observer'
import {motion} from 'framer-motion'

const projects = {
  practise: [
    {
      name: "Authentication-System",
      description:
        "A basic authentication system that allows users to register and log in using browser local storage.",
      image: auth,
      tag: "practise",
      rootDirectory:
        "https://github.com/Mohitgoswami18/Basic-Frontend-Project/tree/main/Authentication-System",
      link: "https://basic-authentication-two.vercel.app",
      skillTag: ["HTML", "TailwindCss", "JS"],
    },
    {
      name: "ColorGuessingGame",
      description:
        "A fun browser-based game that tests your color recognition skills. with simple DOM manipulation and internal scoring logic.",
      image: cgg,
      tag: "practise",
      rootDirectory:
        "https://github.com/Mohitgoswami18/Basic-Frontend-Project/tree/main/ColorGuessingGame",
      link: "https://basic-frontend-project-mohit-goswamis-projects.vercel.app",
      skillTag: ["HTML", "CSS", "JS"],
    },
    {
      name: "backgroundChangerProject",
      description:
        " small React project demonstrating the use of hooks to dynamically change background colors with user interactions.",
      image: rbc,
      tag: "practise",
      rootDirectory:
        "https://github.com/Mohitgoswami18/Basic-Frontend-Project/tree/main/backgroundChangerProject",
      link: "https://basic-frontend-project-1c83.vercel.app",
      skillTag: ["React", "TailwindCss"],
    },
    {
      name: "blinkit-Clone",
      description:
        "A responsive UI clone of the Blinkit website showcasing frontend layout and design skills using HTML and CSS.",
      image: blinkitUI,
      tag: "Basic",
      rootDirectory:
        "https://github.com/Mohitgoswami18/Basic-Frontend-Project/tree/main/blinkit-Clone",
      link: "https://basic-frontend-project-pot3.vercel.app",
      skillTag: ["HTML", "CSS"],
    },
    {
      name: "Netflix_UIClone",
      description:
        "A responsive UI clone of the Netflix website showcasing frontend layout and design skills using HTML and TAILWIND CSS.",
      image: netflixUI,
      tag: "Basic",
      rootDirectory:
        "https://github.com/Mohitgoswami18/Basic-Frontend-Project/tree/main/Netflix_UIClone",
      link: "https://basic-frontend-project-ia5d.vercel.app",
      skillTag: ["HTML", "TailwindCss"],
    },
    {
      name: "WeatherForcast",
      description:
        "A simple weather web application that displays current weather data like temperature, humidity... using the OpenWeather API.",
      image: weather,
      tag: "Basic",
      rootDirectory:
        "https://github.com/Mohitgoswami18/Basic-Frontend-Project/tree/main/WeatherForcast",
      link: "https://basic-frontend-project-ya7w.vercel.app/",
      skillTag: ["HTML", "CSS", "JS"],
    },
  ],
  sideProjects: [
    {
      name: "Graph-Library",
      description:
        "A C++ based graph library implementing various algorithms like BFS, DFS, Dijkstra, and Kruskal, built as part of a DSA learning project.",
      image: graph,
      tag: "Advanced",
      rootDirectory: "https://github.com/Mohitgoswami18/Graph-Library",
      skillTag: ["C++", "DSA", "Graph"],
    },
    {
      name: "LeetVision",
      description:
        "A chrome extension asims at assisting leetcoders by providing hints, complexity analysis and integrated chatbot support at one place in leetcode itself",
      image: leetvision,
      tag: "sideProject",
      rootDirectory: "https://github.com/Mohitgoswami18/LeetVision",
      skillTag: ["react", "tailwind"],
    },
    {
      name: "404-ChatBot",
      description:
        "An AI-chatbot replicating a friend that you can talk and enjoy with",
      image: chatbotLogo,
      tag: "sideProject",
      rootDirectory: "https://github.com/Mohitgoswami18/404-ChatBot",
      skillTag: ["react", "tailwind", "express"],
    },
  ],
  majourProjects: [
    {
      name: "AlgoSprint",
      description:
        "A Gamified Coding and Learning platform where you cam compete with your friend in intense and thrilling coding battles",
      image: algoLogo,
      tag: "Advanced",
      rootDirectory: "https://github.com/Mohitgoswami18/AlgoSprint",
      link: "https://algo-sprint.vercel.app/",
      skillTag: [
        "react",
        "shadcn UI",
        "tailwind",
        "webhooks",
        "CRON jobs",
        "express",
        "mongoDB",
        "socket.io",
      ],
    },
  ],
};

const ProjectSection = () => {
  const {ref, inView} = useInView({
    triggerOnce:true,
    threshold:0
  });
  const [activeTab, setActiveTab] = useState("majourProjects");

  return (
    <div ref={ref} div className="font-[Poppins] md:ml-10 px-4">
      <div className=" mt-20 lg:mt-60  font-[Poppins] w-full">
        <motion.h1
          initial={{ opacity: 0, scale: 0.99, y: -10 }}
          animate={inView ? { opacity: 1, scale: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="lg:ml-[-110px] lg:pb-4 text-center font-bold text-5xl text-blue-500"
        >
          Projects
        </motion.h1>
      </div>
      <div className="text-white mt-2 mx-auto ml-2">
        <div className="flex gap-4 items-center lg:mr-30 justify-center mb-6">
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 1 }}
            onClick={() => setActiveTab("practise")}
            className={`px-2 py-2 text-sm rounded ${
              activeTab === "practise"
                ? "bg-blue-600 shadow-lg"
                : "bg-gray-800 hover:bg-blue-500 transition"
            }`}
          >
            Practise Projects
          </motion.button>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 1 }}
            onClick={() => setActiveTab("majourProjects")}
            className={`px-2 py-2 rounded text-sm ${
              activeTab === "majourProjects"
                ? "bg-blue-600 shadow-lg"
                : "bg-gray-800 hover:bg-blue-500 transition"
            }`}
          >
            Majour Projects
          </motion.button>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 1 }}
            onClick={() => setActiveTab("sideProjects")}
            className={`px-2 py-2 text-sm rounded ${
              activeTab === "sideProjects"
                ? "bg-blue-600 shadow-lg"
                : "bg-gray-800 hover:bg-blue-500 transition"
            }`}
          >
            Side Projects
          </motion.button>
        </div>

        <div className="grid  grid-cols-1 md:mr-[10px] md:grid-cols-3 place-items-center pt-4 mt-5 gap-2">
          {projects[activeTab]?.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default ProjectSection;
