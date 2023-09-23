import * as React from "react";
import { header } from "./layout.module.css";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import initials from "../images/initials.png";
import Button from "@material-ui/core/Button";
import IconButton from "@mui/material/IconButton";
import MoreVert from "@mui/icons-material/MoreVert";
import MenuButton from '@mui/joy/MenuButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import { StyledButton } from "./styles";

const ITEM_HEIGHT = 48;

const Header = ({ link }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className={header}>
      <Button
        variant="text"
        size="small"
        href="/"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <img src={initials} width="80" alt="logo" />
      </Button>
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
      {/* create a drop down for isTabletOrMobile */}
        <Dropdown>
          <MenuButton
            slots={{ root: IconButton }}
            slotProps={{ root: { variant: "outlined", color: "neutral" } }}
          >
            <MoreVert style={{color: "white"}}/>
          </MenuButton>
          <Menu style={{backgroundColor: "rgba(8, 40, 79, 1)", variant: "outlined"}}>
            <MenuItem
              href="/experience"
              component="a"
              style={{ color: "white", fontFamily: "avenir" }}
            >
              Experience
            </MenuItem>
            <MenuItem
              href="/work"
              component="a"
              style={{ color: "white", fontFamily: "avenir" }}
            >
              Work
            </MenuItem>
            <MenuItem
              href="/contact"
              component="a"
              style={{ color: "white", fontFamily: "avenir" }}
            >
              Contact
            </MenuItem>
          </Menu>
        </Dropdown>
    </header>
  );
};

export default Header;
