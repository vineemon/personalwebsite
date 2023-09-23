import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  container,
  siteTitle,
  profileDesc,
  skylineImages,
} from "../components/layout.module.css";
import Header from "../components/header";

const WorkPage = () => {
  return (
    <div className={container}>
      <Header text="Home" link="/"></Header>
      <hr />
      <p className={siteTitle}>Work</p>
      <hr />
      <StaticImage
        alt="skyline"
        src="../images/city.jpg"
        className={skylineImages}
      />
      <p className={siteTitle}>Software Engineer based in New York City</p>
      <p className={profileDesc}>
        I’m currently a software engineer at Amazon Ads in NYC. Prior to my
        professional career, I earned my Master’s in Computer and Electrical
        Engineering at Georgia Tech in Atlanta. Go Jackets!
      </p>
    </div>
  );
};

export default WorkPage;
