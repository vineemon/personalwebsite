import * as Material from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export const StyledButton = withStyles({
  root: {
    borderRadius: 3,
    color: "white",
    boxSizing: "border-box",
    backgroundColor: "transparent",
    fontSize: 25,
    fontFamily:
      "Avenir, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, \
      Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji,  \
      Segoe UI Symbol, Noto Color Emoji Apple",
  },
  label: {
    textTransform: "capitalize",
  },
})(Material.Button);

export const CenterButton = withStyles({
  root: {
    borderRadius: 3,
    color: "white",
    backgroundColor: "transparent",
    display: "flex",
    fontSize: 30,
    width: 200,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
    fontFamily:
      "Avenir, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, \
      Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji,  \
      Segoe UI Symbol, Noto Color Emoji Apple",
  },
  label: {
    textTransform: "capitalize",
  },
})(Material.Button);
