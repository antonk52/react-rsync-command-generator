import React from "react";

import css from "./style.module.css";

const Checkbox = ({ label, checked, onChange }) => (
  <div className={css.wrapper}>
    <label style={{ display: "flex" }}>
      <input
        type="checkbox"
        onChange={e => onChange(e.target.checked)}
        checked={checked}
        style={{ marginRight: "8px" }}
      />
      {label}
    </label>
  </div>
);

export default Checkbox;
