import React from "react";
import ButtonSvgVar from "../assets/svg/ButtonSvgVar";

function Button({ className, href, onClick, children, px, white }) {
  const classes = `button relative inline-flex items-center justify center h-11 transition-colors hover:text-blue-700 ${
    px || "px-7"
  } ${white ? "text-n-1" : "text-n-8"} ${className || ""}`;

  const spanClasses = "relative z-10";

  function renderButton() {
    return (
      <button className={classes} onClick={onClick}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvgVar(white)}
      </button>
    );
  }

  function renderLink() {
    return (
      <a href={href} className={classes}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvgVar(white)}
      </a>
    );
  }

  return href ? renderLink() : renderButton();
}

export default Button;
