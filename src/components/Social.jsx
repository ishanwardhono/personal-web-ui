import React from "react";

const SocialShare = [
  {
    iconName: "linkedin",
    link: "https://linkedin.com/in/ishanwardhono/"
  },
  {
    iconName: "github",
    link: "https://github.com/ishanwardhono/",
  },
  {
    iconName: "instagram",
    link: "https://www.instagram.com/ishanwardhono/",
  },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/assets/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
