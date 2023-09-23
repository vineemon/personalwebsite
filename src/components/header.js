import * as React from "react";
import { header } from "./layout.module.css";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import initials from "../images/initials.png"
import Button from "@material-ui/core/Button";
import { StyledButton } from "./styles";

const Header = ({ link }) => {
  return (
    <header className={header}>
      <Button
        variant="text"
        size="small"
        href="/"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <img
          src={initials}
          width="80"
          alt="logo"
        />
      </Button>
      <StyledButton href="/experience" color="primary">
        Experience
      </StyledButton>
      <StyledButton href="/work" color="primary">
        Work
      </StyledButton>
      <StyledButton href="/contact" color="primary">
        Contact
      </StyledButton>
      <StyledButton
        href="https://www.linkedin.com/in/vineet-nadella/"
        style={{
          backgroundImage: `url(${linkedin})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          marginLeft: "auto",
          backgroundSize: "60%",
          height: "40px",
        }}
      ></StyledButton>
      <StyledButton
        href="https://github.com/vineemon"
        style={{
          backgroundImage: `url(${github})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "60%",
          height: "40px",
        }}
      ></StyledButton>
    </header>
  );
};

export default Header;
