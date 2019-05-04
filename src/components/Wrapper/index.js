import React from "react";

import css from "./style.module.css";

const Wrapper = ({ children }) => (
  <main className={css.wrapper}>{children}</main>
);

export default Wrapper;
