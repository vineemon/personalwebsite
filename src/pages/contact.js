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
      <Header text="Back to Home" link="/"></Header>
      <hr />
      <p className={siteTitle}>Contact Info</p>
      <hr />

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
      <div>
        <div className={contactTitle}>Vineet Nadella</div>
        <div className={contactItem}>nadella.vineet@gatech.edu</div>
        <div className={contactItem}>(678) 780 2737</div>
      </div>
    </div>
  );
};

export default IntroPage;
