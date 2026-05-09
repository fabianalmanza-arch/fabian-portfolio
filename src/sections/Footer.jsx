function Footer() {
  return (
    <footer
      id="contacto"
      className="
        py-20 px-6
        border-t border-white/10
        mt-20
      "
    >

      <div className="max-w-7xl mx-auto">

        <div className="
          flex flex-col lg:flex-row
          justify-between
          gap-12
        ">

          <div>

            <h2 className="text-3xl font-bold mb-4">
              Fabian.dev
            </h2>

            <p className="
              text-gray-400
              max-w-md
              leading-relaxed
            ">

              Desarrollador enfocado en crear aplicaciones web modernas,
              backend robusto y experiencias digitales funcionales.

            </p>

          </div>

          <div>

            <h3 className="font-semibold mb-4">
              Contacto
            </h3>

            <div className="
              flex flex-col gap-3
              text-gray-400
            ">

              <a
                href="mailto:fabianalmanzap@gmail.com"
                className="hover:text-purple-400 transition"
              >
                fabianalmanzap@gmail.com
              </a>

              <a
                href="https://github.com/fabianalmanza-arch"
                className="hover:text-purple-400 transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/fabian-andres-ba50511a3?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                className="hover:text-purple-400 transition"
              >
                LinkedIn
              </a>

            </div>

          </div>

        </div>

        <div className="
          mt-16 pt-6
          border-t border-white/10
          text-gray-500 text-sm
        ">

          © 2026 Fabian Almanza — Portfolio Developer

        </div>

      </div>

    </footer>
  )
}

export default Footer