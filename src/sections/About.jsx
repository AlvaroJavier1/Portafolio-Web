import FadeIn from "../components/FadeIn"

function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Texto */}
        <FadeIn>
        <div>
          <p className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-4">
            Sobre mí
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Apasionado por crear experiencias web de calidad.
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Estudiante de Ingeniería en Sistemas en quinto año, con enfoque en el desarrollo Front-end. 
            Me apasiona transformar ideas en experiencias web atractivas y funcionales. Estoy en búsqueda 
            de oportunidades donde pueda aplicar y seguir desarrollando mis habilidades en la creación 
            de sitios e interfaces web de calidad.
          </p>
        </div>
        </FadeIn>

        {/* Placeholder foto */}
        <FadeIn delay={0.1}>
        <div className="w-full aspect-square rounded-3xl bg-gray-100 flex items-center justify-center">
          <span className="text-gray-300 text-sm">Foto próximamente</span>
        </div>
        </FadeIn>

      </div>
    </section>
  )
}

export default About