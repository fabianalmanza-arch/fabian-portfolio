import { useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    {
      name: "Inicio",
      href: "#inicio"
    },

    {
      name: "Sobre mí",
      href: "#sobre-mi"
    },

    {
      name: "Proyectos",
      href: "#proyectos"
    },

    {
      name: "Contacto",
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

        </div>

      )}

    </nav>
  )
}

export default Navbar