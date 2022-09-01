import { DiHtml5, DiCss3, DiJsBadge, DiReact } from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  {
    id: "html",
    name: "HTML5",
    icon: <DiHtml5 />,
    description:
      "HTML é uma linguagem de marcação utilizada na construção de páginas na Web.",
  },
  {
    id: "css",
    name: "CSS3",
    icon: <DiCss3 />,
    description:
      "Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web.",
  },
  {
    id: "js",
    name: "JavaScript",
    icon: <DiJsBadge />,
    description:
      "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.",
  },
  {
    id: "react",
    name: "React",
    icon: <DiReact />,
    description:
      "O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
  },
];
export const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => {
          return (
            <div className="technology-card" id={tech.id} key={tech.id}>
              {tech.icon}
              <div className="technology-info">
                <h3>{tech.name}</h3>
                <p>{tech.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
