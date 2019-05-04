import React, { useState, Fragment } from "react";

import Checkbox from "../Checkbox";

const Flags = ({ flagsNames = [], onCheckedFlagsChange }) => {
  const [checkedFlags, onFlagCheck] = useState([]);
  return (
    <Fragment>
      {flagsNames.map(flagName => (
        <Checkbox
          label={`--${flagName}`}
          key={flagName}
          checked={checkedFlags.includes(flagName)}
          onChange={checked => {
            const newFlags = checked
              ? checkedFlags.concat(flagName)
              : checkedFlags.filter(f => f !== flagName);
            onCheckedFlagsChange(newFlags);
            onFlagCheck(newFlags);
          }}
        />
      ))}
    </Fragment>
  );
};

export default Flags;
