import React from "react";
import { Skills } from "../skills/skills-tecnologys";

const Cards = () => {
  const cards = [
     {
      img: [
        "https://i.postimg.cc/W1swwD2j/imagen-2025-07-17-175620941.png",
      ],
      name: "XMARCS-STUDIO",
      description:
        "Pagina web que simula la pagina de electronic arts(EA)",
      url: "https://github.com/MarcoMJ2023060/XMARCS-STUDIO.git",
      technologies: ["HTML", "CSS"]
    },
    {
      img: [
        "https://i.postimg.cc/g2RqpvNv/imagen-2025-07-17-193656621.png",
      ],
      name: "Pagina web y rediseño de Kinal",
      description:
        "Para el desarrollo de esta pagina web y rediseño del sitio web KINAL utilicé tecnologías básicas como HTML, CSS y JavaScript.",
      url: "https://github.com/MarcoMJ2023060/LABORATORIO1IN6BM.git",
      technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
      img: [
        "https://i.postimg.cc/pTWxJJmx/imagen-2025-07-17-170717799.png",
      ],
      name: "Agenda Web",
      description:
        "Para el desarrollo de esta agenda web utilicé tecnologías básicas como HTML, CSS y JavaScript.",
      url: "https://github.com/MarcoMJ2023060/LABORATORIO-PRACTICA-SUPERVISADA-IN6BM.git",
      technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
      img: [
        "https://i.postimg.cc/SN6h3Pcq/imagen-2025-07-17-171840684.png",
      ],
      name: "Blog React",
      description:
        "Blog web enfocado en el Frontend desarrollado principalmente utilizando el framework de React para el diseño en componentes.",
      url: "https://github.com/MarcoMJ2023060/REACT_BLOG_APRENDIZAJE.git",
      technologies: ["React", "JavaScript"]
    },
    {
      img: [
        "https://i.postimg.cc/63J4WSbc/imagen-2025-07-17-170140798.png",
      ],
      name: "Mi Portafolio Web",
      description:
        "En este apartado podrás encontrar el código de este mismo proyecto donde utilicé principalmente React y Tailwind.",
      url: "https://github.com/MarcoMJ2023060/Mi_Portafolio_Web.git",
      technologies: ["React", "Tailwind CSS", "JavaScript"]
    },
  ];
  return (
    <>
      <section className="bg-[#161513] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Vista de Mis Proyectos
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#00CED1] to-[#0E3386] mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Explora una selección de mis proyectos con interfaz gráfica, donde he utilizado diferentes tecnologías
              patrones de diseño, metodologías de desarrollo para crear soluciones innovadoras.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white shadow-2xl overflow-hidden rounded-lg hover:transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={card.img[0]}
                  alt={card.name}
                  className="w-full h-[12rem] object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {card.name}
                  </h3>
                  <p className="text-sm text-gray-700 mb-4 text-justify">
                    {card.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-600 mb-2">Tecnologías:</h4>
                    <div className="flex flex-wrap gap-2">
                      {card.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {card.url && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          className="w-8 h-8 rounded-full mr-3"
                          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                          alt="GitHub"
                        />
                        <a
                          href={card.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 font-medium hover:underline text-sm"
                        >
                          VER CÓDIGO
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Skills />
    </>
  );
};

export default Cards;