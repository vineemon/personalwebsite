import * as React from "react";
import { useMediaQuery } from 'react-responsive'
import { StaticImage } from "gatsby-plugin-image";
import {
  container,
  siteTitle,
  images,
} from "../components/layout.module.css";
import Header from "../components/header";

// markup
const IndexPage = () => {
  return (
    <div className={container}>
      <Header text="Contact Me" link="/contact"></Header>
      <hr />
      <p className={siteTitle}>Vineet Nadella</p>
      <hr />
      <StaticImage
        alt="vineet"
        src="../images/home_photo.jpeg"
        style={{ display: "block" }}
        className={images}
      />
    </div>
  );
};

export default IndexPage;
