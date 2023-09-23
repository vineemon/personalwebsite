import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  container,
  container2,
  siteTitle,
  contact,
  contactItem,
  contactTitle,
  skylineImages,
} from "../components/layout.module.css";
import Header from "../components/header";
import initials from "../images/home_photo.jpeg";

// markup
const IntroPage = () => {
  return (
    <div className={container} border-radius="1000px">
      <Header text="Home" link="/"></Header>
      <hr />
      <p className={siteTitle}>Contact Me</p>
      <hr />

      <div>
        <img className={contact} alt="vineet" src={initials} width="50%"></img>

        <p  style={{paddingTop:"25%"}}>
          <a className={contactTitle}>Vineet Nadella</a> <br />
          <a className={contactItem}>nadella.vineet@gmail.com</a> <br />
          <a className={contactItem}>(862) 346-7356</a>
        </p>
      </div>
    </div>
  );
};

export default IntroPage;
