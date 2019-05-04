import React, { useRef } from "react";

import css from "./style.module.css";

const Result = ({ command }) => {
  const textarea = useRef(null);
  const onCopy = e => {
    textarea.current.select();
    document.execCommand("copy");
    e.target.focus();
  };

  return (
    <div className={css.root}>
      Your command to copy
      <div className={css.box}>
        <pre className={css.cmd}>{command}</pre>
        <button className={css.copyBtn} onClick={onCopy}>
          copy
        </button>
      </div>
      <textarea
        aria-hidden
        ref={textarea}
        value={command}
        readonly
        row="0"
        cols="0"
        className={css.textarea}
      />
    </div>
  );
};

export default Result;
