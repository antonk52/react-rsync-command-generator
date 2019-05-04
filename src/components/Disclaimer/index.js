import React from "react";
import css from "./style.module.css";

const Disclaimer = () => (
  <span className={css.disclaimer}>
    This tool illustrates trivial use cases of <a href="rsync">rsync</a>.
    <br />
    Please read full <a href="https://linux.die.net/man/1/rsync">docs</a> to
    learn more.
  </span>
);

export default Disclaimer;
