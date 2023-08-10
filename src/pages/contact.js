import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  container,
  siteTitle,
  contactItem,
  contactTitle,
  skylineImages,
  header,
} from "../components/layout.module.css";
import Header from "../components/header";

// markup
const IntroPage = () => {
  return (
    <div className={container}>
      <Header text="Home" link="/"></Header>
      <hr />
      <p className={siteTitle}>Contact Me</p>
      <hr />
      <div>
          <div className={contactTitle}>Vineet Nadella</div>
          <div className={contactItem}>nadella.vineet@gmail.com</div>
          <div className={contactItem}>(862) 346-7356</div>
      </div>
      <StaticImage
        alt="skyline"
        src="../images/city.jpg"
        className={skylineImages}
      />
      <div
        style={{
          borderBottom: "1px solid #ccc",
          width: "95%",
          marginLeft: "2.5%",
        }}
      ></div>
    </div>
  );
};

export default IntroPage;
