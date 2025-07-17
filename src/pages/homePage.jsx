import { useEffect, useRef, useState } from "react";
import NavbarNavigate from "../components/navbarNavigate/navbarNavigate.jsx";
import AboutMe from "./aboutMe.jsx";
import { Button } from "@mui/material";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import CallIcon from "@mui/icons-material/Call";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import PhonePopup from "./PhonePopup.jsx";

const HomePage = () => {
  const textRef = useRef(null); // Referencia al div para el efecto de escritura
  const homePageRef = useRef(null); // Referencia al inicio de la página
  const [showButton, setShowButton] = useState(false);
  const texto = "Marco José";

  useEffect(() => {
    let intervalId;
    let timeoutId;
    const efectTextTyping = (elemento, text) => {
      let i = 0;
      clearInterval(intervalId);
      clearTimeout(timeoutId);
      intervalId = setInterval(() => {
        if (i < text.length) {
          elemento.textContent += text[i];
          i++;
        } else {
          clearInterval(intervalId);
          timeoutId = setTimeout(() => {
            elemento.textContent = "‎";
            efectTextTyping(elemento, text);
          }, 700);
        }
      }, 100);
    };
    if (textRef.current) {
      efectTextTyping(textRef.current, texto);
    }
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [texto]);
  useEffect(() => {
    const handleScroll = () => {
      // Detecta si el usuario ha hecho scroll
      if (window.innerHeight + window.scrollY >= 950) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Limpia el evento al desmontar
    };
  }, []);
  // Función para hacer el scroll suave para arriba
  const scrollToTop = () => {
    if (homePageRef.current) {
      homePageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <>
      <NavbarNavigate />
      <div
        className="flex flex-col justify-center items-center min-h-screen bg-[#161513]"
        id="idHomePage"
        ref={homePageRef} // Referencia al inicio de la página
      >
        <div className="mx-auto text-center mt-[2rem] sm:mt-[3rem]">
          <div className="mx-auto mb-6 sm:mb-8 h-[12rem] sm:h-[14rem] w-[12rem] sm:w-[14rem] overflow-hidden rounded-full bg-gradient-to-tr from-[#0E3386] to-[#00CED1]">
            <img
              src="/iconMj1.png"
              alt=""
              className="h-[100%] w-[17rem] object-cover"
            />
          </div>
          <div>
            <h1
              ref={textRef}
              className="max-w-screen-md text-[2rem] sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6"
            ></h1>
          </div>
          <div className="mt-[2rem]">
            <div className="flex gap-5 justify-center">
              <a
                href="https://www.linkedin.com/in/marco-martinez-030555285/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon
                  color="secondary"
                  style={{ fontSize: 35, color: "#FFFFFF" }}
                />
              </a>
              <a href="https://github.com/MarcoMJ2023060">
                <GitHubIcon
                  color="secondary"
                  style={{ fontSize: 35, color: "#FFFFFF" }}
                />
              </a>
              <button onClick={handleOpenPopup} className="flex items-center">
                <CallIcon
                  className="text-blue-600"
                  fontSize="large"
                  style={{ fontSize: 35, color: "#FFFFFF" }}
                />
              </button>
              <PhonePopup isOpen={isPopupOpen} onClose={handleClosePopup} />
              {/* Enlace para enviar un correo */}
              <a href="mailto:marcojosepro2007@gmail.com">
                <MarkEmailUnreadIcon
                  color="secondary"
                  style={{ fontSize: 35, color: "#FFFFFF" }}
                />
              </a>
            </div>
          </div>
          <div>
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#00CED1] to-[#0E3386] animate-wave text-[1.9em] sm:text-4xl lg:text-5xl font-extrabold mt-[1.7rem]">
              Junior Developer
            </span>
          </div>
          <div className="flex gap-[2rem] justify-center max-[1000px]:gap-[15px] mt-[2rem] max-[1000px]:mt-[1.5rem]">
            <a href="/CV-MarcoBolanos.pdf" download>
              <Button
                variant="outlined"
                size="medium"
                className="animate-pulse"
              >
                DESCARGA MI CV
              </Button>
            </a>
            <a href="/proyects">
              <Button variant="outlined" size="medium">
                VER MIS PROYECTOS
              </Button>
            </a>
          </div>
          {/* Apartado de Bienvenida */}
          <div className="w-full flex justify-center mt-[3rem]">
            <section className="max-w-4xl w-full bg-[#161513] rounded-lg shadow-2xl p-8 mx-4">
              <div className="text-center mb-6">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2196f3] mb-4">
                  ¡BIENVENID@S A MI PORTAFOLIO!
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#00CED1] to-[#0E3386] mx-auto mb-6"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    🔎¿Qué vas a encontrar aquí?🔍
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-justify">
                    Encontraras mi trayectoria desde 4to perito donde empezaron mis primeros pasos en el desarrollo 
                    web hasta mis proyectos más recientes. Cada trabajo refleja mi pasión por 
                    crear soluciones innovadoras y funcionales.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-3">
                     🎯Mi Enfoque🎯
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-justify">
                    Me especializo en el desarrollo frontend con React y desarrollo backend con Node.js, 
                    siempre buscando las mejores prácticas de desarrollo y tecnologías emergentes para 
                    ofrecer experiencias de usuario excepcionales.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-lg text-[#2196f3] font-medium mb-4">
                  🧐¿Estas listo para conocer mi trabajo?✔️
                </p>
                <div className="flex justify-center">
                  <p className="text-gray-400 text-justify max-w-2xl">
                    Descarga mi CV, explora mis proyectos y descubre cómo puedo aportar 
                    valor a tu equipo o proyectos. ¡Gracias por pasar por este portafolio!
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      {showButton && (
        <div className="flex items-end justify-end fixed bottom-5 right-5 z-10">
          <div>
            <button
              title="Regresar arriba"
              onClick={scrollToTop} // Se llama a la función para hacer scroll suave
              className="block w-[3.5rem] h-[3.5rem] sm:w-[4rem] sm:h-[4rem] lg:w-[5rem] lg:h-[5rem] rounded-full transition-transform
                            transform hover:scale-110 hover:rotate-12"
            >
              <div className="w-full h-full rounded-full bg-blue-500 flex justify-center items-center shadow-lg">
                <KeyboardDoubleArrowUpIcon />
              </div>
            </button>
          </div>
        </div>
      )}
      <AboutMe />
    </>
  );
};

export default HomePage;