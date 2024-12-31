import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

interface Contact {
  id: number;
  link: string;
  icon: FontAwesomeIconProps;
}

const Sidebar = () => {
  const contacts = [
    {
      id: 0,
      link: "https://www.linkedin.com/in/ledaniel-leung",
      icon: faLinkedinIn,
    },
    {
      id: 1,
      link: "https://github.com/Asianu",
      icon: faGithub,
    },
    {
      id: 2,
      link: "mailto: ledaniel.leung@gmail.com",
      icon: faEnvelope,
    },
  ];

  return (
    <div id="Contacts">
      {contacts.map(({ link, icon }) => (
        <a href={link} target="_blank">
          <FontAwesomeIcon icon={icon} />
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
