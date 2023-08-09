import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import {
  container,
  siteTitle,
  images,
  profileDesc,
  profileTitle,
  profileImages,
} from "../components/layout.module.css";
import { StyledButton, CenterButton } from "../components/styles";
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
      <p className={siteTitle}>Software Engineer based in New York City</p>
      <p className={profileDesc}>
        I’m currently a software engineer at Amazon Ads in NYC. Prior to my professional career,
        I earned my Master’s in Computer and Electrical Engineering at Georgia Tech in Atlanta. Go Jackets!
      </p>
      <StaticImage
        alt="vineet"
        src="../images/synergy.jpeg"
        className={profileImages}
        style={{ objectFit: "contain" }}
      />
      <p className={profileDesc}>
        IEEE International Symposium on High-Performance Computer Architecture
        (HPCA) 2020 presented Best Paper Award to SIGMA: A Spare and Irregular
        Accelerator with Flexible Interconnects for DNN Training.
      </p>
      <CenterButton
              href="https://www.intel.com/content/www/us/en/artificial-intelligence/posts/introducing-sigma.html"
              variant="contained"
              color="primary"
              style={{
              }}
            >
              SIGMA
            </CenterButton>
      <StaticImage
        alt="scale-sim"
        src="../images/scalesim.png"
        className={profileImages}
        style={{ objectFit: "contain" }}
      />
      <p className={profileDesc}>
        SCALE Sim is a simulator for systolic array based accelerators for
        Convolution, Feed Forward, and any layer that uses GEMMs. This is a
        refreshed version of the simulator with feature enhancements,
        restructured code to aid feature additions, and ease of distribution.
      </p>
      <CenterButton className={profileDesc}
              href="https://github.com/scalesim-project/scale-sim-v2"
              variant="contained"
              color="primary"
              style={{
              }}
            >
              SCALE Sim
            </CenterButton>
      <StaticImage
        alt="skyline"
        src="../images/thesis.png"
        className={profileImages}
        style={{ objectFit: "contain" }}
      />
      <p className={profileDesc}>
        Thesis on Investigating Opportunities and Challenges in Modeling and
        Designing Scale-Out DNN Accelerators
      </p>
      <CenterButton
              href="https://smartech.gatech.edu/handle/1853/64650"
              variant="contained"
              color="primary"
              style={{
              }}
            >
              Thesis
            </CenterButton>
    </div>
  );
};

export default IndexPage;
