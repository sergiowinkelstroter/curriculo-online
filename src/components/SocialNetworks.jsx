import "../styles/components/socialnetworks.sass";

import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const socialNetworks = [
  {
    name: "linkedin",
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/sergio-winkelstroter/",
  },
  {
    name: "github",
    icon: <FaGithub />,
    href: "https://github.com/sergiowinkelstroter",
  },
  {
    name: "instagram",
    icon: <FaInstagram />,
    href: "https://www.instagram.com/winkelstrotersergio/",
  },
];

export const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          href={network.href}
          className="social-btn"
          id={network.name}
          key={network.name}
          target="_blank"
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};
