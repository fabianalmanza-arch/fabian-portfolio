import { motion } from "framer-motion"

function StatCard({ number, text }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.03
      }}
      className="
        bg-white/5
        border border-white/10
        rounded-3xl
        p-8
        text-center
        backdrop-blur-sm
      "
    >

      <h3 className="
        text-4xl
        font-bold
        text-purple-400
        mb-3
      ">
        {number}
      </h3>

      <p className="text-gray-400">
        {text}
      </p>

    </motion.div>
  )
}

export default StatCard