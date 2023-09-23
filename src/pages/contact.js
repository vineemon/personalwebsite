import * as React from "react";
import { useMediaQuery } from "react-responsive";
import {
  container,
  siteTitle,
  contact,
  contactMobile,
  contactItem,
  contactTitle,
} from "../components/layout.module.css";
import Header from "../components/header";
import initials from "../images/home_photo.jpeg";

// markup
const IntroPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

  return (
    <div className={container} border-radius="1000px">
      <Header text="Home" link="/"></Header>
      <hr />
      <p className={siteTitle}>Contact Me</p>
      <hr />
      {!isTabletOrMobile && Content()}
      {(isTabletOrMobile || isPortrait) && MobileContent()}
    </div>
  );
};

const Content = () => {
  return (
    <div>
      <img className={contact} alt="vineet" src={initials} width="50%"></img>

      <p style={{ paddingTop: "25%" }}>
        <a className={contactTitle}>Vineet Nadella</a> <br />
        <a className={contactItem}>nadella.vineet@gmail.com</a> <br />
        <a className={contactItem}>(862) 346-7356</a>
      </p>
    </div>
  );
};

const MobileContent = () => {
  return (
    <div>
      <img
        className={contactMobile}
        alt="vineet"
        src={initials}
        width="50%"
      ></img>

      <p>
        <a className={contactTitle}>Vineet Nadella</a> <br />
        <a className={contactItem}>nadella.vineet@gmail.com</a> <br />
        <a className={contactItem}>(862) 346-7356</a>
      </p>
    </div>
  );
};

export default IntroPage;
