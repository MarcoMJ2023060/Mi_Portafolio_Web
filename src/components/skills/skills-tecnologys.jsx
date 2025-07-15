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

export const Skills = () => {
  const skills = [
    {
      name: "JavaScript",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHnJDLOcdm_0b6N6kNj-1OvO9KhKYgqIy0w&s",
      size: "w-20 h-20",
    },
    {
      name: "HTML",
      url: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
      size: "w-20 h-20",
    },
    {
      name: "CSS",
      url: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
      size: "w-20 h-20",
    },
    {
      name: "React",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      size: "w-24 h-24",
    },
    {
      name: "NodeJs",
      url: "https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png",
      size: "w-20 h-20",
    },
    {
      name: "taiwlind",
      url: "https://cdn3d.iconscout.com/3d/free/thumb/free-tailwind-css-3d-icon-download-in-png-blend-fbx-gltf-file-formats--open-source-framework-code-logos-and-brands-pack-icons-9325303.png",
      size: "w-24 h-24",
    },
    {
      name: "Boostrap",
      url: "https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png",
      size: "w-28 h-24",
    },
    {
      name: "MySQL",
      url: "https://www.ovhcloud.com/sites/default/files/styles/large_screens_1x/public/2021-09/ECX-1909_Hero_MySQL_600x400%402x-1.png",
      size: "w-20 h-20",
    },
    {
      name: "SQL",
      url: "https://www.techmonitor.ai/wp-content/uploads/sites/29/2016/06/SQL.png",
      size: "w-20 h-20",
    },
    {
      name: "MONGO DB",
      url: "https://e1.pxfuel.com/desktop-wallpaper/35/74/desktop-wallpaper-mongodb-replication-in-ubuntu-mongodb.jpg",
      size: "w-20 h-20",
    },
    {
      name: "VERCEL",
      url: "https://images.ctfassets.net/crb83veve8xb/2YfNwMlyl1U0DLVXRgL8TB/9e8474e083f2ba01a296343d84f2282d/vercel_thumbnail.webp",
      size: "w-20 h-20",
    },
    {
      name: "AWS",
      url: "https://cdn.iconscout.com/icon/free/png-256/free-aws-logo-icon-download-in-svg-png-gif-file-formats--cloud-computing-network-server-database-brand-pack-logos-icons-1583149.png?f=webp&w=256",
      size: "w-20 h-20",
    },
    {
      name: "HTML5",
      url: "https://img.icons8.com/m_sharp/200/FFFFFF/github.png",
      size: "w-24 h-24",
    },
    {
      name: "GitHub",
      url: "https://img.icons8.com/color/480/github--v1.png",
      size: "w-24 h-24",
    },
    {
      name: "Git",
      url: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      size: "w-20 h-20",
    },
  ];

  const skillsLearning = [
    {
      name: "Netlify",
      url: "https://www.rlogical.com/wp-content/uploads/2023/03/31d.webp",
      size: "w-20 h-20",
    },
  ];
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#161513"
          fill-opacity="1"
          d="M0,160L80,176C160,192,320,224,480,208C640,192,800,128,960,112C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div className="relative bg-[#161513] mt-[-2rem] max-[1000px]:mt-[-1.5rem]">
        <div className="mx-auto mt-[1rem]">
          <div>
            <h2 className="text-3xl mb-6 text-center sm:text-4xl lg:text-5xl font-extrabold text-white">
              Skills
            </h2>
            <div className="flex justify-center items-center gap-6 max-[1000px]:flex-wrap">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`flex items-center justify-center ${skill.size}`}
                >
                  <img
                    src={skill.url}
                    alt={skill.name}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/** */}
          <div className="mt-[5rem] mx-3">
            <h2 className="text-3xl mb-6 text-center sm:text-4xl lg:text-5xl font-extrabold text-white">
              Learning Skills
            </h2>
            <div className="flex justify-center items-center gap-6 max-[1000px]:flex-wrap">
              {skillsLearning.map((skill) => (
                <div
                  key={skill.name}
                  className={`flex items-center justify-center ${skill.size}`}
                >
                  <img
                    src={skill.url}
                    alt={skill.name}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SectionEducation />
    </>
  );
};