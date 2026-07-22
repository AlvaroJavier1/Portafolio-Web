import FadeIn from "../components/FadeIn"

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <FadeIn>
        <p className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-4">
          Frontend Developer Junior
        </p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
          Hola, soy <br /> Javier García.
        </h1>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p className="text-lg text-gray-500 max-w-xl mb-10">
          Estudiante de Ingeniería en Sistemas, enfocado en Front-End.
          Tranformo ideas en interfaces web atractivas y funcionales.
        </p>
      </FadeIn>
      <FadeIn delay={0.3}>
        <a href="#projects" className="bg-gray-900 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors">
            Ver proyectos
        </a>
      </FadeIn>
    </section>
  )
}

export default Hero