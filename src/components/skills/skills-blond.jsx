import React from "react";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import SectionEducation from "../../pages/section-education";

const iconFlextion = () => {
  return (
    <HowToRegIcon
      className="mr-auto mb-2"
      style={{ fontSize: 35, color: "#88DC65" }}
    />
  );
};

export const SkillsBlond = () => {
  return (
    <>
      <section
        className="bg-[#161513] max-[550px]:h-auto min-[550px]:mt-[100px] max-[750px]:mt-[5rem]"
        id="routerContact"
      >
        <div className="container px-6 py-10 mx-auto max-[1200px]:text-[13px]">
          <h2 className="text-3xl mb-6 text-center sm:text-4xl lg:text-5xl font-extrabold text-white">
            Soft Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center">
            <div className="flex flex-col items-center bg-[#232323] rounded-xl shadow-lg p-4 w-full max-w-[180px] min-h-[120px] justify-center">
              <span className="text-2xl font-semibold text-white flex items-center">{iconFlextion()}<span className="ml-2">Adaptabilidad</span></span>
            </div>
            <div className="flex flex-col items-center bg-[#232323] rounded-xl shadow-lg p-4 w-full max-w-[180px] min-h-[120px] justify-center">
              <span className="text-2xl font-semibold text-white flex items-center">{iconFlextion()}<span className="ml-2">Capacidad de aprendizaje</span></span>
            </div>
            <div className="flex flex-col items-center bg-[#232323] rounded-xl shadow-lg p-4 w-full max-w-[180px] min-h-[120px] justify-center">
              <span className="text-2xl font-semibold text-white flex items-center">{iconFlextion()}<span className="ml-2">Trabajo en equipo</span></span>
            </div>
            <div className="flex flex-col items-center bg-[#232323] rounded-xl shadow-lg p-4 w-full max-w-[180px] min-h-[120px] justify-center">
              <span className="text-2xl font-semibold text-white flex items-center">{iconFlextion()}<span className="ml-2">Creatividad</span></span>
            </div>
            <div className="flex flex-col items-center bg-[#232323] rounded-xl shadow-lg p-4 w-full max-w-[180px] min-h-[120px] justify-center">
              <span className="text-2xl font-semibold text-white flex items-center">{iconFlextion()}<span className="ml-2">Ética laboral</span></span>
            </div>
          </div>
        </div>
      </section>
      <SectionEducation />
    </>
  );
};