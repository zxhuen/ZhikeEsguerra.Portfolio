import { useState } from "react";
import "./Projects.css";
import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const [hov, onHov] = useState(false);

  const [click, onClick] = useState(false);
  const handleClick = () => {
    onClick((prev) => !prev);
  };

  const [PicClick, onPicClick] = useState(false);
  const handlePicClick = () => {
    onPicClick((prev) => !prev);
  };

  const getX = () => {
    if (!click) return -1000;
    if (PicClick) return -600;
    return -580;
  };

  const Rotate = () => {
    if (!click) return -20;
    if (PicClick) return 0;
    return 4;
  };

  const Zoom = () => {
    if (!click) return 0.1;
    if (PicClick) return 0.7;
    return 0.53;
  };

  const getY = () => {
    if (!click) return 0;
    if (PicClick) return -264;
    return -235;
  };

  return (
    <div
      className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"
      id="ProjectsContainer"
    >
      <h1 id="Proj" className="font-bold">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.button
          className="absolute top-1 left-4 z-20 text-white text-2xl
          
          "
          id="backBut"
          initial={{
            display: "none",
            opacity: 0,
            top: 0,
            x: 0,
            rotate: 180,
          }}
          animate={{
            display: click ? "block" : "none",
            opacity: click ? 0.9 : 0,
            top: click ? 20 : 0,
            x: click ? 200 : 0,
            rotate: click ? 366 : 180,
          }}
          transition={{
            type: "spring",
            duration: 1,
          }}
          whileHover={{
            scale: 1.2,
            rotate: 5,
            color: "#ff6863",
            transition: {
              type: "spring",
              stiffness: 100,
            },
          }}
          style={{
            perspective: 100,
            transformStyle: "preserve-3d",
            transform: "translateZ(-200px)",
          }}
          onClick={handleClick}
        >
          ←
        </motion.button>

        <motion.div
          id="frame1"
          initial={{
            display: "none",
            opacity: 0,
            x: 0,
            rotate: 0,
            height: 0,
            width: 0,
          }}
          animate={{
            display: click ? "block" : "none",
            opacity: click ? 0.9 : 0,
            x: click ? -120 : -500,
            rotate: click ? -10 : 20,
            height: click ? 630 : 0,
            width: click ? 970 : 0,
          }}
          transition={{
            type: "spring",
            duration: 1.2,
          }}
        >
          <img src="public/indexcard.jpg" alt="" width={1000} />
        </motion.div>

        <motion.video
          src={`${import.meta.env.BASE_URL}2025-07-22 02-39-59.mp4`}
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          id="pic1"
          initial={{
            display: "none",
            opacity: 0,
            x: 0,
            rotate: 0,

            scale: 0,
            y: 0,
          }}
          animate={{
            display: click ? "block" : "none",
            opacity: click ? 1 : 0,
            x: getX(),
            y: getY(),
            rotate: Rotate(),
            scale: Zoom(),
          }}
          transition={{
            type: "spring",
            duration: 1.3,
          }}
          whileHover={{
            transition: {
              type: "spring",
              duration: 0.8,
            },
          }}
          onClick={handlePicClick}
        />

        <motion.div
          id="bgs"
          initial={{
            display: "none",
            opacity: 0,
          }}
          animate={{
            display: click ? "block" : "none",
            opacity: click ? 0.9 : 0,
          }}
        >
          {" "}
        </motion.div>

        <motion.p
          id="GITHUB"
          initial={{
            x: 1700,
            rotate: 100,
          }}
          animate={{
            x: click ? 1100 : 1700,
            rotate: click ? -5 : 100,
          }}
          transition={{
            type: "spring",
            duration: 1,
          }}
          whileHover={{
            scale: 1.1,
            rotate: 344,
            color: "#3B82F6",
          }}
          onHoverStart={() => {
            onHov(true);
          }}
          onHoverEnd={() => {
            onHov(false);
          }}
        >
          <FaGithub />
        </motion.p>
        <motion.p
          id="GITHUBTEXT"
          initial={{
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            opacity: hov ? 1 : 0,
            rotate: hov ? 6 : 0,
          }}
          transition={{
            type: "spring",
            duration: 1,
          }}
        >
          Open in github ?
        </motion.p>

        {/* ------------------------------------------------------------------------------------------------- */}

        <motion.div
          className="relative aspect-[3/4] w-full max-w-sm  p-6 rounded-lg shadow-md bg-center bg-cover bg-no-repeat text-white"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}hutato.jpg)`,
          }}
          initial={{
            y: 80,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            duration: 0.8,
          }}
          whileHover={{
            scale: 1.1,
            rotate: -5,
          }}
          onClick={handleClick}
          id="MainCon"
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg z-0"></div>
          <div
            className="absolute inset-0 bg-black opacity-100 rounded-lg "
            id="bg"
          ></div>

          {/* Content aligned to bottom */}
          <div className="relative z-10 flex flex-col justify-end h-full text-center">
            {/* Tech Tags */}
            <div className="flex justify-center flex-wrap gap-2 mb-2">
              <span className="bg-gray-200 text-xs font-semibold text-black px-3 py-1 rounded">
                HTML
              </span>
              <span className="bg-gray-200 text-xs font-semibold text-black px-3 py-1 rounded">
                CSS
              </span>
              <span className="bg-gray-200 text-xs font-semibold text-black px-3 py-1 rounded">
                TypeScript
              </span>
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold mb-1">Sample Portfolio</h2>

            {/* Description */}
            <p className="text-sm text-gray-200 mb-2">
              A sample portfolio site designed with smooth animations and full
              responsiveness across devices.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
