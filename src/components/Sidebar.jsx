import Avatar from "../img/perfil.jpeg";
import CV from "../img/cv.pdf";

import "../styles/components/sidebar.sass";

import { InformationContainer } from "./InformationContainer";
import { SocialNetworks } from "./SocialNetworks";

export const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="" />
      <p className="title">Desenvolvedor Front-end</p>
      <SocialNetworks />
      <InformationContainer />
      <a href={CV} download="" className="btn">
        Download curriculo
      </a>
    </aside>
  );
};
