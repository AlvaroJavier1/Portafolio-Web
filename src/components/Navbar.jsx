import { useState } from "react"

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-semibold text-gray-900">Javier García</span>

        {/* Links desktop */}
        <ul className="hidden md:flex gap-8 text-sm text-gray-500">
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>

        {/* Botón hamburguesa móvil */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
        >
          <span className={`block w-6 h-0.5 bg-gray-900 transition-all ${open ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-900 transition-all ${open ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-900 transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-6 py-6">
          <ul className="flex flex-col gap-6 text-sm text-gray-500">
            <li><a href="#about" onClick={() => setOpen(false)}>Sobre mí</a></li>
            <li><a href="#projects" onClick={() => setOpen(false)}>Proyectos</a></li>
            <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)}>Contacto</a></li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar