import React from "react";
import { clsx } from "clsx";

const Container = ({ children, className = "" }) => {
  const classes = clsx("figma-container", className);

  return <div className={classes}>{children}</div>;
};

export default Container;
