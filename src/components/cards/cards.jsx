import React from "react";
import { Skills } from "../skills/skills-tecnologys";

const Cards = () => {
  const cards = [
    {
      img: [
        "https://www.pdatungsteno.com/images/uploads/schedule-planner-task-agenda-checklist-concept.jpg",
      ],
      name: "Agenda Web",
      description:
        "Para el desarrollo de esta agenda web utilicé tecnologías básicas como HTML, CSS y JavaScript.",
      url: "https://github.com/MarcoMJ2023060/LABORATORIO-PRACTICA-SUPERVISADA-IN6BM.git",
    },
  ];
  return (
    <>
      <div className="m-auto px-[2rem] py-8 sm:px-6 lg:px-8 max-w-8xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                {/* Renderiza la descripción con dangerouslySetInnerHTML para interpretar el HTML del enlace */}
                <p
                  className="text-sm text-gray-700 mb-4"
                  dangerouslySetInnerHTML={{ __html: card.description }}
                />
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
                      className="text-blue-600 hover:text-blue-800 font-medium hover:underline"
                    >
                      VER CÓDIGO
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*Tecnologys */}
      <Skills />
    </>
  );
};

export default Cards;