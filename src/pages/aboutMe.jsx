import React, { useState, useEffect } from "react";
import Cards from "../components/cards/cards";

const AboutMe = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    "https://images.unsplash.com/photo-1516101922849-2bf0be616449?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );

  useEffect(() => {
    const updateBackground = () => {
      if (window.innerWidth <= 768) {
        setBackgroundImage("https://i.postimg.cc/pLTyG5WH/img-Fond-Marco1.jpg"); // Imagen para móviles
      } else {
        setBackgroundImage(
          "https://images.unsplash.com/photo-1516101922849-2bf0be616449?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ); // Imagen para escritorio
      }
    };
    // Ejecuta la función al cargar el componente
    updateBackground();
    // Agrega un event listener para detectar cambios de tamaño de pantalla
    window.addEventListener("resize", updateBackground);
    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", updateBackground);
    };
  }, []);
  return (
    <>
      <section id="aboutMe" className="sm:p-10 lg:p-20 p-5 aboutMe">
        <div className="container mx-auto mt-[1rem]">
          <div className="flex justify-center">
            <div className="sm:p-10 p-5 bg-white sm:me-5 mb-10 rounded-md shadow-md h-[auto] max-w-4xl w-full">
              <h3 className="text-2xl mb-5 font-bold text-center">📌Frase📌</h3>
              <p className="leading-10 text-gray-500 text-2xl max-[750px]:text-[17px] text-justify">
                <span className="font-bold text-gray-800">
                 ➤ "Ningún sueño es tan grande, ni ningún soñador tan pequeño."
                </span>
                <br />
                <br />
              </p>
              <h3 className="text-2xl mb-5 font-bold text-center">
               🧐 ¿Qué significa? 🧐
              </h3>
              <p className="leading-10 text-gray-500 text-2xl max-[750px]:text-[17px] text-justify">
                <span className="font-bold text-gray-800">
                 ➤ Significa que no existe ningún sueño tan grande que sea imposible de conseguir, ni ningún soñador tan pequeño; nos habla acerca de que todos tenemos la capacidad de alcanzar los sueños "grandes".
                </span>
                <br />
                <br />
              </p>
              <h3 className="text-2xl mb-5 font-bold text-gray-800 text-center">
               🙋🏻‍♂️ Acerca de mí 🙋🏻‍♂️
              </h3>
              <p className="leading-10 text-gray-500 text-2xl max-[750px]:text-[17px] text-justify">
                <span className="font-bold text-gray-800">
                ➤  ¡Hola! Soy Marco José Bolaños, desarrollador junior. Actualmente tengo 18 años y soy un apasionado por la tecnología.
                </span>
                <br />
                <br />
                <span className="font-bold text-gray-800">
                 ➤ Desde pequeño he sido muy curioso y me ha fascinado aprender constantemente y descubrir cómo funcionan las cosas. Me considero un joven entusiasta, siempre en busca de mejorar día a día.
                </span>
                <br /> <br />
                <span className="font-bold text-gray-800">
                 ➤ Actualmente soy estudiante de la Universidad Mariano Galvez de Guatemala.
                </span>
                <br /> <br />
                <span className="font-bold text-gray-800">
                 ➤ Actualmente curso Ingenieria en Sistemas y soy Perito en Informática egresado de Kinal combino los conocimientos adquiridos durante estos dos años y siete meses de carrera.
                </span>
                <br /> <br />
                <span className="font-bold text-gray-800">
                 ➤ Poseo experiencia en el desarrollo de aplicaciones utilizando React para el frontend y Node.js para el backend.
                </span>
                <br /> <br />
                <span className="font-bold text-gray-800">
                ➤  Experiencia en accesibilidad web y en experiencia de usuario (UX).
                  (Ui)
                </span>
                <br /> <br />
                <span className="font-bold text-gray-800">
                ➤  Mentalidad positiva, minimalista, sobre todo escalable.
                </span>
                <br /> <br />
                <span className="font-bold text-gray-800">
                ➤  Años desarrollando: 3 años🛠️
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        className="relative w-full h-[50vh] bg-fixed bg-cover bg-center mt-[-2rem]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 h-full w-full bg-black/40"></div>
        <div className="relative p-[3rem] min-[1200px]:p-[12rem] text-center max-[1000px]:pt-[4.5rem] "></div>
      </div>
      <Cards />
    </>
  );
};

export default AboutMe;