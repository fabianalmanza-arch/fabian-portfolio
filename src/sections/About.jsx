import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

import SkillBadge from "../components/SkillBadge"

function About() {

  const { t } = useTranslation()

  const skills = [
    "React",
    "FastAPI",
    "Python",
    "Java",
    "PostgreSQL",
    "MySQL",
    "Bootstrap",
    "Git",
    "GitHub",
    "Power BI"
  ]

  return (
    <section id="sobre-mi" className="py-32 px-6">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <p className="text-purple-400 mb-4 font-semibold">
            {t("about.subtitle")}
          </p>

          <h2 className="text-5xl font-bold leading-tight mb-8">
            {t("about.title")}
          </h2>

          <p className="text-gray-400 leading-relaxed text-lg">
            {t("about.description")}
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >

          {skills.map((skill, index) => (
            <SkillBadge
              key={index}
              name={skill}
            />
          ))}

        </motion.div>

      </div>

    </section>
  )
}

export default About