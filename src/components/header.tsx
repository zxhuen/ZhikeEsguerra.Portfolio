import "./header.css";
import { motion } from "motion/react";

const Navigation = () => {
  return (
    <>
      <div
        className="w-full max-w-screen-xl mx-auto mt-2 mb-2 px-4 sm:px-6 lg:px-8"
        id="HeaderContainer"
      >
        <nav
          className="flex items-center justify-between sm:text-center"
          id="HeaderName"
        >
          <motion.div
            id="Name"
            className="font-semibold"
            initial={{
              x: -50,
              y: -50,
              opacity: 0,
            }}
            animate={{
              x: 0,
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              type: "spring",
            }}
            whileHover={{
              scale: 1.1,
              rotate: -10,
              color: "#3B82F6",
            }}
          >
            Zhike Esguerra
          </motion.div>
          <div className="text-base ">
            <motion.a href="#projects" id="Projects">
              <motion.p
                initial={{
                  x: 50,
                  y: -50,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: -350,
                  color: "#3B82F6",
                }}
              >
                Projects
              </motion.p>
            </motion.a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
