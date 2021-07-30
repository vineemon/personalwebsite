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
import { StyledButton } from "../components/styles";
import Header from "../components/header";

// markup
const IndexPage = () => {
  return (
    <div className={container}>
      <Header text="Contact Info" link="/contact"></Header>
      <hr />
      <p className={siteTitle}>Vineet Nadella</p>
      <hr />
      <StaticImage
        alt="vineet"
        src="../images/head_shot.jpg"
        style={{ display: "block" }}
        className={images}
      />
      <p className={siteTitle}>Software engineer based in Seattle, WA.</p>
      <p className={profileDesc}>
        I’m currently a software engineer working at Amazon.com in the Supply
        Chain Technologies organization. As a engineer in the Retail space, I’ve
        lowered fulfillment costs using customer-driven software development
        taking into account business goals while balancing technology
        requirements. I’ve designed and implemented advanced workflows covering
        optimization and machine learning models saving Amazon WW Operations{" "}
        {">"}$1M per month.
      </p>
      <p className={profileDesc}>
        Prior to my professional career, I earned my Master’s in Computer and
        Electrical Engineering at Georgia Tech where I published a Thesis on
        Machine Learning Hardware Accelerators.
      </p>
      <StyledButton
        href="https://www.intel.com/content/www/us/en/artificial-intelligence/posts/introducing-sigma.html"
        variant="contained"
        color="primary"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          margin: "10px 10px 10px 20px",
          fontSize: "30px",
        }}
      >
        SIGMA
      </StyledButton>
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
      <StyledButton
        href="https://github.com/scalesim-project/scale-sim-v2"
        variant="contained"
        color="primary"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          fontSize: "30px",
          margin: "10px 10px 10px 20px",
        }}
      >
        SCALE Sim
      </StyledButton>
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
      <StyledButton
        href="https://smartech.gatech.edu/handle/1853/64650"
        variant="contained"
        color="primary"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          fontSize: "30px",
          margin: "10px 10px 10px 20px",
        }}
      >
        Thesis
      </StyledButton>
      <StaticImage
        alt="skyline"
        src="../images/city.jpg"
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

export default IndexPage;
