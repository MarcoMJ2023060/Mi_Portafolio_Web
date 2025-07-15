import React from "react";
import NavbarNavigate from "../components/navbarNavigate/navbarNavigate";
const Proyects = () => {
  const cards = [
    {
      img: [
        "https://phoenixnap.com/glossary/wp-content/uploads/2024/06/what-is-java.jpg",
      ],
      name: "VIdeojuego luchas",
      description:
        "Este proyecto se basa en un videojuego de luchas donde se puede jugar con dos jugadores y se desarrollo utilizando POO con java",
      url: "https://github.com/MarcoMJ2023060/VIDEOJUEGO_PELEAS_BIM1_2024.git",
    },
    {
      img: [
        "https://phoenixnap.com/glossary/wp-content/uploads/2024/06/what-is-java.jpg",
      ],
      name: "Encriptador",
      description:
        "Este proyecto se basa en un encriptador a base de matrices desarrollado con java",
      url: "https://github.com/MarcoMJ2023060/ENCRIPTADORPROJECT.git",
    },
    {
      img: [
        "https://bambu-mobile.com/wp-content/uploads/2022/07/Tipos-de-datos-MySQL-datos-que-almacenan-los-gestores-de-bases-de-datos-datos-numericos-fechas-Bambu-Mobile.png",
      ],
      name: "XMARCSMINISUPERMARKET MySQL-Java",
      description:
        "Este proyecto se basa en un sistema de control en ventas de comida donde puedo considerar un gran trabajo la base de datos mi utilizando en  mi caso una Db relacional como en este caso MySQL",
      url: "https://github.com/MarcoMJ2023060/XMARCSMINISUPERMARKTX.git",
    },
    {
      img: [
        "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
      ],
      name: "Blog NodeJs",
      description:
        "Este proyecto se basa en un blog web enfocado por la parte del backend desarrollado principalmente utilizando javaScript y NodeJs",
      url: "https://github.com/MarcoMJ2023060/NODEJS_BLOG_APRENDIZAJE.git",
    },
    {
      img: [
        "https://www.tatvasoft.com/blog/wp-content/uploads/2022/07/Why-Use-React.jpg",
      ],
      name: "Blog React",
      description:
        "Este proyecto se basa en un blog web enfocado por la parte del Frontend desarrollado principalmente utilizando el fremwork de React para el diseño en componentes",
      url: "https://github.com/MarcoMJ2023060/REACT_BLOG_APRENDIZAJE.git",
    },
    {
      img: [
        "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
      ],
      name: "Gestor opiniones",
      description:
        "Este proyecto fue desarrollado en la parte Backend sin interfaz y se basa en un gestor de opiniones de usuario, se desarrollo con NodeJs y javaScript",
      url: "https://github.com/MarcoMJ2023060/PS_GESTOR_OPINIONES.git",
    },
    {
      img: [
        "https://crehana-blog.imgix.net/media/filer_public/76/e0/76e09e74-c3bc-436e-8dd1-218d70842551/blog.jpg",
      ],
      name: "Pagina web",
      description:
        "Aca encontraras una pagina Web desarrollado con html5 y css fue uno de los primeros proyectos de practica web incluyendo un rediseño al sitio web de Kinal",
      url: "https://github.com/MarcoMJ2023060/LABORATORIO1IN6BM.git",
    },

    {
      img: [
        "https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto",
      ],
      name: "ControlAcademico",
      description:
        "Este proyecto de igual manera se basa por el lado del backend y se desarrollo utilizando NodeJs y javaScript",
      url: "https://github.com/MarcoMJ2023060/Gestion_Academica_PS.git",
    },
    {
      img: [
        "https://blog.interfell.com/hubfs/HTML%2c%20CSS%20y%20JS%20la%20combinacion%20para%20el%20desarrollo%20web.jpg",
      ],
      name: "Agenda Web",
      description:
        "Para el desarrollo de esta agenda web utilize tecnologias como Html5, Css3 y JavaScript",
      url: "https://github.com/MarcoMJ2023060/LABORATORIO-PRACTICA-SUPERVISADA-IN6BM.git",
    },
    {
      img: ["https://img-c.udemycdn.com/course/750x422/4022172_e570_3.jpg"],
      name: "Gestor inventario",
      description:
        "Este proyecto se basa del lado del backend de un gestor de inventario se desarrollo utilizando Node js, Mongo db y express",
      url: "https://github.com/MarcoMJ2023060/PROYECTO_BIMESTRAL_6TO.git",
    },
    {
      img: ["https://tailwindcss.com/_next/static/media/card.9e9b9cc2.jpg"],
      name: "Mi portafolio web",
      description:
        "En este apartado podras encontrar el codigo de este mismo proyecto donde utilicé principalmente React y Tailwind",
      url: "",
    },
  ];
  return (
    <>
      <NavbarNavigate />
      <div className="m-auto px-[2rem] py-8 sm:px-6 lg:px-8 max-w-8xl bg-[#161513] ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-[3rem]">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-2xl overflow-hidden rounded-lg"
            >
              <img
                src={card.img[0]}
                alt={card.name}
                className="w-full sm:h-[20rem] object-cover object-center"
              />
              <div className="p-6 sm:p-8 lg:p-10">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {card.name}
                </h2>
                <p className="text-sm text-gray-700 mb-4">{card.description}</p>
                {card.url && (
                  <div className="flex items-center">
                    <img
                      className="w-10 h-10 rounded-full mr-4"
                      src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                      alt="avatar"
                    />
                    <a
                      href={card.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:underline"
                    >
                      VER CODIGO
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Proyects;