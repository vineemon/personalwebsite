import * as React from "react";
import { header } from "./layout.module.css";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import initials from "../images/initials.png";
import Button from "@material-ui/core/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
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
      <div>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-haspopup="true"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MoreVertIcon style={{ color: "white" }} />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "15ch",
              backgroundColor: "rgba(8, 40, 79, 1"
            },
          }}
        >
          <MenuItem href="/experience" component="a" style={{color:"white", fontFamily:"avenir" }}>
            Experience
          </MenuItem> 
          <MenuItem href="/work" component="a" style={{color:"white", fontFamily:"avenir"  }}>
            Work
          </MenuItem>
          <MenuItem href="/contact" component="a" style={{color:"white", fontFamily:"avenir"  }}>
            Contact
          </MenuItem>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
