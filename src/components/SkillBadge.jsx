import { motion } from "framer-motion"

function SkillBadge({ name }) {
  return (
    <motion.div
      whileHover={{ scale: 1.07, y: -4 }}
      className="
        px-5 py-3
        rounded-2xl
        bg-white/5
        border border-white/10
        backdrop-blur-sm
        hover:border-purple-400/40
        transition
      "
    >
      <span className="text-gray-200 font-medium">
        {name}
      </span>
    </motion.div>
  )
}

export default SkillBadge