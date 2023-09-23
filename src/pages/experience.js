import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  container,
  siteTitle,
  profileDesc,
  profileImages,
} from "../components/layout.module.css";
import { CenterButton } from "../components/styles";
import Header from "../components/header";

// markup
const ExpPage = () => {
  return (
    <div className={container}>
      <Header text="Contact Me" link="/contact"></Header>
      <hr />
      <p className={siteTitle}>Experience</p>
      <hr />
      <CenterButton
        href="https://www.intel.com/content/www/us/en/artificial-intelligence/posts/introducing-sigma.html"
        color="primary"
        style={{}}
      >
        SIGMA
      </CenterButton>
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
        className={profileDesc}
        href="https://github.com/scalesim-project/scale-sim-v2"
        color="primary"
        style={{}}
      >
        SCALE Sim
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
      <CenterButton
        href="https://smartech.gatech.edu/handle/1853/64650"
        color="primary"
        style={{}}
      >
        Thesis
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
    </div>
  );
};

export default ExpPage;
