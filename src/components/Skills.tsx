const skills = [
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "Reactjs" },
  { name: "Nextjs" },
  { name: "EJS" },
  { name: "Vitest" },
  { name: "Git" },
  { name: "HTML" },
  { name: "CSS" },
  { name: "Tailwindcss" },
  { name: "Sass" },
  { name: "Figma" },
  { name: "SEO" },
  { name: "OPP" },
];
const Skills = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="border-2 border-gray-300 bg-orange-50 hover:bg-orange-200 transition ease-in-out p-4 md:p-6 lg:p-8 xl:p-10"
        >
          <h3 className="font-extrabold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black">
            {skill.name}
          </h3>
        </span>
      ))}
    </div>
  );
};

export default Skills;
