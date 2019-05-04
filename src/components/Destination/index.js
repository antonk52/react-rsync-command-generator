import React, { useState } from "react";
import cn from "classnames";

import TextField from "../TextField";
import Checkbox from "../Checkbox";

import css from "./style.module.css";

const Destination = ({ onChange }) => {
  const [isRemote, onCheck] = useState(true);
  const [destination, onDestinationChange] = useState("/Users/anon/my-project");

  const [hostname, onHostnameChange] = useState("hostname");
  const [username, onUsernameChange] = useState("anon");

  onChange(
    isRemote
      ? `--rsh=ssh ${username && username + "@"}${hostname}:${destination}`
      : `${destination}`
  );

  return (
    <div className={cn(css.root, isRemote && css.remoteActive)}>
      <div className={css.main}>
        <TextField
          label="Destination"
          value={destination}
          onChange={onDestinationChange}
        />
        <Checkbox label="remote" checked={isRemote} onChange={onCheck} />
      </div>
      <div className={css.remoteSection}>
        <TextField label="host" value={hostname} onChange={onHostnameChange} />
        <TextField
          label="username"
          value={username}
          onChange={onUsernameChange}
        />
      </div>
    </div>
  );
};

export default Destination;
