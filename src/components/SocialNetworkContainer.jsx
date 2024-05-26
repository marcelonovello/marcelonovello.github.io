import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = {
  linkedin: { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/marcelo-novello/" },
  github: { icon: <FaGithub />, url: "https://github.com/marcelonovello" },
  instagram: { icon: <FaInstagram />, url: "https://www.instagram.com/cemarnov/" },
};

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {Object.keys(socialNetworks).map((name) => (
        <a href={socialNetworks[name].url} className="social-btn" id={name} key={name}>
          {socialNetworks[name].icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;

