import { useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"
import { useTranslation } from "react-i18next"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()

  const navItems = [
    {
      name: t("navbar.home"),
      href: "#inicio"
    },

    {
      name: t("navbar.about"),
      href: "#sobre-mi"
    },

    {
      name: t("navbar.projects"),
      href: "#proyectos"
    },

    {
      name: t("navbar.contact"),
      href: "#contacto"
    }
  ]

  return (
    <nav className="
      fixed top-0 w-full z-50
      bg-[#050816]/70
      backdrop-blur-xl
      border-b border-white/10
    ">

      <div className="
        max-w-7xl mx-auto
        px-6 py-4
        flex justify-between items-center
      ">

        <h1 className="text-2xl font-bold tracking-wide">
          Fabian.dev
        </h1>

        {/* Desktop Menu */}

        <ul className="hidden md:flex gap-8">

          {navItems.map((item, index) => (
            <li key={index}>

              <a
                href={item.href}
                className="
                  text-gray-300
                  hover:text-purple-400
                  transition
                  duration-300
                "
              >
                {item.name}
              </a>

            </li>
          ))}

        </ul>

        <div className="hidden md:flex gap-3">

            <button
                onClick={() => i18n.changeLanguage("es")}
                className="
                text-sm
                hover:text-purple-400
                transition
                "
            >
                ES
            </button>

            <button
                onClick={() => i18n.changeLanguage("en")}
                className="
                text-sm
                hover:text-purple-400
                transition
                "
            >
                EN
            </button>

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl"
        >

          {menuOpen ? <HiX /> : <HiMenu />}

        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="
          md:hidden
          px-6 pb-6
          bg-[#050816]/95
          backdrop-blur-xl
        ">

          <ul className="flex flex-col gap-6">

            {navItems.map((item, index) => (
              <li key={index}>

                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="
                    text-gray-300
                    hover:text-purple-400
                    transition
                    text-lg
                  "
                >
                  {item.name}
                </a>

              </li>
            ))}

          </ul>

          <div className="hidden md:flex gap-3">

            <button
                onClick={() => i18n.changeLanguage("es")}
                className="
                text-sm
                hover:text-purple-400
                transition
                "
            >
                ES
            </button>

            <button
                onClick={() => i18n.changeLanguage("en")}
                className="
                text-sm
                hover:text-purple-400
                transition
                "
            >
                EN
            </button>

            </div>

        </div>

      )}

    </nav>
  )
}

export default Navbar