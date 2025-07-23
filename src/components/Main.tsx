import "./Main.css";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaPhoneAlt,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Main = () => {
  const Tech = [
    "React",
    "Tailwind",
    "FramerMotion",
    "TypeScript",
    "Vite",
    "HTML",
    "CSS",
    "JavaScript",
    "Java",
    "PHP",
    "AndroidStudio",
    "ASP.NET",
    "MAUI",
    "Jframe",
    "C#",
    "MongoDB",
    "MySQL",
    "SQLite",
  ];

  const [hov, onHov] = useState(false);

  return (
    <>
      <motion.div
        className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-8"
        id="MainContainer"
        style={{
          perspective: 300,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-40  items-center"
          id="formargin"
        >
          <div
            className="flex justify-center items-end space-x-6 mt-12"
            id="leftFrame"
          >
            {/* Left Image Frame */}
            <motion.div
              className="w-54 h-100 border-2 mb-30 border-black overflow-hidden"
              id="left"
              initial={{
                y: -80,
                opacity: 0,
                color: "#3B82F6",
              }}
              animate={{
                y: 0,
                opacity: 1,
                color: "#111827",
                rotate: hov ? -12 : 0,

                rotateY: hov ? -20 : 0,
                rotateX: hov ? -25 : 0,
                scale: hov ? 0.95 : 1,
                transition: {
                  duration: hov ? 1 : 0.8,
                  type: "spring",
                },
              }}
              style={{
                perspective: 100,
              }}
              transition={{
                duration: 0.8,
                type: "spring",
              }}
              whileHover={{
                scale: 1.15,
                transition: {
                  duration: 0.6,
                  type: "spring",
                },
              }}
            >
              <img
                src="hutato.jpg"
                alt="Image 1"
                className="w-full h-full object-cover"
                id="leftFrame"
              />
            </motion.div>

            {/* Middle (Taller) Image Frame */}
            <motion.div
              className="w-74 h-170 border-2 border-black overflow-hidden"
              id="middle"
              initial={{
                y: 80,
                opacity: 0,
                color: "#3B82F6",
                zIndex: 1,
              }}
              animate={{
                y: 0,
                opacity: 1,
                color: "#111827",
                zIndex: 1,
              }}
              transition={{
                duration: 0.8,
                type: "spring",
              }}
              whileHover={{
                rotate: -12,
                scale: 1.05,
              }}
              style={{
                perspective: 100,
              }}
            >
              <motion.img
                src="hutato.jpg"
                alt="Image 2"
                className="w-full h-full object-cover"
                onHoverStart={() => {
                  onHov(true);
                }}
                onHoverEnd={() => {
                  onHov(false);
                }}
              />
            </motion.div>

            {/* Right Image Frame */}
            <motion.div
              className="w-54 h-100 border-2 mb-30 border-black overflow-hidden"
              id="right"
              initial={{
                y: -80,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
                color: "#111827",
                rotate: hov ? 12 : 0,
                rotateY: hov ? 10 : 0,
                rotateX: hov ? -20 : 0,
                scale: hov ? 0.9 : 1,
                transition: {
                  duration: hov ? 1.3 : 0.8,
                  type: "spring",
                },
              }}
              style={{
                perspective: 100,
              }}
              transition={{
                duration: 0.8,
                type: "spring",
              }}
              whileHover={{
                scale: 1.15,

                transition: {
                  scale: {
                    type: "spring",
                    duration: 0.8,
                  },
                },
              }}
            >
              <img
                src="hutato.jpg"
                alt="Image 3"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div
            className="flex flex-col justify-center text-center md:auto"
            id="DetContainer"
          >
            <motion.h1
              className="text-3xl font-bold mb-2"
              initial={{
                x: -80,
                opacity: 0,
                color: "#3B82F6",
              }}
              animate={{
                x: hov ? -30 : 0,
                rotateY: hov ? -40 : 0,
                opacity: 1,
                color: "#111827",
              }}
              transition={{
                duration: hov ? 1.7 : 0.8,
                type: "spring",
              }}
              whileHover={{
                scale: 1.1,
              }}
            >
              Hello, I'm Zhike Esguerra
            </motion.h1>
            <motion.p
              className="text-xl "
              initial={{
                x: 80,
                opacity: 0,
                color: "#3B82F6",
              }}
              animate={{
                x: hov ? 100 : 0,
                rotateY: hov ? 20 : 0,
                rotateX: hov ? 30 : 0,
                rotateZ: hov ? -10 : 0,
                opacity: 1,
                color: "#111827",
              }}
              style={{
                perspective: 100,
              }}
              transition={{
                duration: hov ? 1.5 : 0.8,
                type: "spring",
              }}
              whileHover={{
                scale: 1.1,
              }}
            >
              I'm a frontend developer and I like building clean and responsive
              web interface
            </motion.p>
            <div className="flex flex-col justify-center text-center md:auto items-center">
              <motion.p
                className="mt-3 flex items-center gap-2 "
                initial={{
                  x: -80,
                  opacity: 0,
                  color: "#3B82F6",
                }}
                animate={{
                  x: hov ? -120 : 0,
                  y: hov ? 40 : 0,
                  rotateY: hov ? -40 : 0,
                  rotateX: hov ? 20 : 0,
                  scale: hov ? 1.2 : 1,
                  opacity: 1,
                  color: "#111827",
                }}
                transition={{
                  duration: hov ? 1.3 : 0.8,
                  type: "spring",
                }}
                whileHover={{
                  scale: 1.1,
                }}
              >
                <FaMapMarkerAlt />
                Philippines, Laguna
              </motion.p>
              <motion.p
                className=" flex items-center gap-2 "
                initial={{
                  x: 80,
                  opacity: 0,
                  color: "#3B82F6",
                }}
                animate={{
                  opacity: 1,
                  color: "#111827",
                  x: hov ? 220 : 0,
                  y: hov ? 40 : 0,
                  rotateY: hov ? -40 : 0,
                  rotateX: hov ? -20 : 0,
                  scale: hov ? 1.2 : 1,
                }}
                transition={{
                  duration: hov ? 1.5 : 0.8,
                  type: "spring",
                }}
                whileHover={{
                  scale: 1.1,
                }}
              >
                <SiGmail />
                zxhuen324@gmail.com
              </motion.p>

              <motion.p
                className=" flex items-center gap-2 "
                initial={{
                  x: -80,
                  opacity: 0,
                  color: "#3B82F6",
                }}
                animate={{
                  opacity: 1,
                  color: "#111827",
                  x: hov ? 220 : 0,
                  y: hov ? 40 : 0,
                  rotateY: hov ? -40 : 0,
                  rotateX: hov ? -20 : 0,
                  scale: hov ? 1.2 : 1,
                }}
                transition={{
                  duration: hov ? 1.4 : 0.8,
                  type: "spring",
                }}
                whileHover={{
                  scale: 1.1,
                }}
              >
                <FaPhoneAlt /> 0909 972 3498
              </motion.p>
            </div>
            <div className="flex justify-center text-center md:auto items-center gap-3 mt-5">
              <motion.a
                id="socials"
                initial={{
                  y: -30,
                  opacity: 0,
                  color: "#3B82F6",
                }}
                animate={{
                  opacity: 1,
                  color: "#111827",
                  x: hov ? 30 : 0,
                  y: hov ? -75 : 0,
                  rotate: hov ? 6 : 0,
                }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                }}
                whileHover={{
                  scale: 1.1,
                }}
              >
                <FaFacebookF />
              </motion.a>
              <motion.a
                id="socials"
                initial={{
                  y: 30,
                  opacity: 0,
                  color: "#3B82F6",
                }}
                animate={{
                  opacity: 1,
                  color: "#111827",
                  x: hov ? 37 : 0,
                  y: hov ? -69 : 0,
                  rotate: hov ? 6 : 0,
                }}
                transition={{
                  duration: hov ? 1 : 0.8,
                  type: "spring",
                }}
                whileHover={{
                  scale: 1.1,
                }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                id="socials"
                initial={{
                  y: -30,
                  opacity: 0,
                  color: "#3B82F6",
                }}
                animate={{
                  opacity: 1,
                  color: "#111827",
                  x: hov ? 47 : 0,
                  y: hov ? -60 : 0,
                  rotate: hov ? 6 : 0,
                }}
                transition={{
                  duration: 1.2,
                  type: "spring",
                }}
                whileHover={{
                  scale: 1.1,
                }}
              >
                <FaInstagram />
              </motion.a>
            </div>
            <motion.p
              id="check"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: hov ? 1 : 0,
                y: hov ? -65 : 0,
                x: hov ? 35 : 0,
                rotate: hov ? 9.5 : 0,
              }}
              transition={{
                duration: 1,
                type: "spring",
              }}
            >
              check my socials
            </motion.p>
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: hov ? 1 : 0,
                y: hov ? 20 : 0,
                x: hov ? 150 : 0,
                rotate: hov ? -50 : 0,
                scale: hov ? 1.2 : 1,
              }}
              transition={{
                duration: 1.2,
                type: "spring",
              }}
            >
              contact me here ----
            </motion.p>
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: hov ? 1 : 0,
                y: hov ? 10 : 0,
                x: hov ? 5 : 0,
                rotate: hov ? 50 : 0,
                scale: hov ? 1.2 : 1,
              }}
              transition={{
                duration: 1.3,
                type: "spring",
              }}
            >
              I'm into animatiions as well :D
            </motion.p>
          </div>
        </div>

        <div
          className="flex flex-col justify-center text-center md:auto mt-20"
          id="techs"
        >
          <motion.h1
            className="text-3xl font-bold mb-2"
            id="Tech"
            initial={{
              y: 80,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              type: "spring",
            }}
            whileHover={{
              scale: 1.1,
            }}
            viewport={{
              once: false,
            }}
          >
            My Tech
          </motion.h1>
          <div className="grid grid-cols-2 sm:grid-cols-9 gap-4 mt-4">
            {Tech.map((Tech, index) => (
              <motion.div
                key={index}
                className="p-3 border-1 border-gray-400 rounded-lg shadow-sm text-center text-medium font-small bg-white px-0 w-28"
                initial={{
                  y: 80,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                }}
                whileHover={{
                  scale: 1.1,
                  borderColor: "black",
                }}
                viewport={{
                  once: false,
                }}
              >
                {Tech}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Main;
