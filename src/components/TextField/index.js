import React from "react";
import cn from "classnames";

import css from "./style.module.css";

const TextField = ({ label, value, onChange, classes = {} }) => (
  <div className={cn(css.root, classes.root)}>
    <label className={cn(css.label, classes.label)}>
      {label}
      <br />
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        className={cn(css.input, classes.input)}
      />
    </label>
  </div>
);

export default TextField;
