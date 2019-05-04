import React, { useState } from "react";

import "./global.css";

import Wrapper from "../Wrapper";
import Result from "../Result";
import Flags from "../Flags";
import TextField from "../TextField";
import Heading from "../Heading";
import Destination from "../Destination";
import Disclaimer from "../Disclaimer";

const RSYNC_FLAG_NAMES = [
  "archive",
  "verbose",
  "quiet",
  "recursive",
  "progress",
  "ipv4",
  "ipv6",
  "compress",
  "dry-run"
];

function App() {
  const [source, onSourceChange] = useState("~/user/Docs");
  const [destination, onDestinationChange] = useState("");
  const [rawFlags, onCheckedFlagsChange] = useState("");
  const flags = rawFlags.length
    ? " " + rawFlags.map(x => `--${x}`).join(" ")
    : "";

  return (
    <Wrapper>
      <Heading />

      <TextField label="Source" value={source} onChange={onSourceChange} />

      <Destination onChange={onDestinationChange} />

      <Flags
        flagsNames={RSYNC_FLAG_NAMES}
        onCheckedFlagsChange={onCheckedFlagsChange}
      />

      <Result command={`rsync${flags} ${source} ${destination}`} />
      <Disclaimer />
    </Wrapper>
  );
}

export default App;
