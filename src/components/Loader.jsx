import { motion } from "framer-motion"

function Loader() {
  return (
    <div className="
      fixed inset-0
      flex items-center justify-center
      bg-[#050816]
      z-[999]
    ">

      <div className="text-center">

        <motion.div
          animate={{
            rotate: 360
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "linear"
          }}
          className="
            w-16 h-16
            border-4
            border-purple-500/30
            border-t-purple-400
            rounded-full
            mx-auto
          "
        />

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.2
          }}
          className="
            mt-6
            text-xl
            font-semibold
            tracking-widest
            text-purple-300
          "
        >

          FABIAN.DEV

        </motion.h2>

      </div>

    </div>
  )
}

export default Loader