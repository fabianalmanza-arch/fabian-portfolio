import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

import StatCard from "../components/StatCard"

function Timeline() {

  const { t } = useTranslation()

  const timeline = t("timeline.items", {
    returnObjects: true
  })

  return (
    <section className="py-32 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="
          grid
          grid-cols-2
          lg:grid-cols-4
          gap-6
          mb-24
        ">

          <StatCard
            number="2+"
            text={t("timeline.stats.projects")}
          />

          <StatCard
            number="5+"
            text={t("timeline.stats.tech")}
          />

          <StatCard
            number="6+"
            text={t("timeline.stats.years")}
          />

          <StatCard
            number="100%"
            text={t("timeline.stats.focus")}
          />

        </div>

        <div>

          <p className="text-purple-400 mb-4 font-semibold">
            {t("timeline.subtitle")}
          </p>

          <h2 className="
            text-5xl
            font-bold
            mb-16
          ">
            {t("timeline.title")}
          </h2>

          <div className="relative border-l border-white/10 ml-4">

            {timeline.map((item, index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -30
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
                className="
                  mb-14
                  ml-8
                  relative
                "
              >

                <div className="
                  absolute
                  -left-[42px]
                  top-2
                  w-4
                  h-4
                  rounded-full
                  bg-purple-400
                " />

                <p className="
                  text-sm
                  text-purple-400
                  mb-2
                ">
                  {item.year}
                </p>

                <h3 className="
                  text-2xl
                  font-bold
                  mb-3
                ">
                  {item.title}
                </h3>

                <p className="
                  text-gray-400
                  leading-relaxed
                ">
                  {item.description}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  )
}

export default Timeline