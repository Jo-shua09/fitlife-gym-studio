import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black to-gray-900">
      <div className="relative">
        <motion.div
          className="w-32 h-32 border-4 border-orange-600/50 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            borderRadius: ["50%", "30%", "50%"],
            borderColor: [
              "rgb(234 88 12 / 0.5)",
              "rgb(234 88 12 / 1)",
              "rgb(234 88 12 / 0.5)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 w-32 h-32 border-4 border-t-orange-600 rounded-full"
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.img
            src="/logo.jpg"
            alt="FitLife Logo"
            className="w-16 h-16 rounded-full shadow-lg shadow-orange-600/50"
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, -360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <motion.div
          className="absolute -inset-2 border-2 border-orange-600/20 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [-360, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      <motion.h2
        className="absolute bottom-[20%] text-4xl font-bold text-orange-600"
        animate={{
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Loading...
      </motion.h2>
    </div>
  );
};

export default Loader;