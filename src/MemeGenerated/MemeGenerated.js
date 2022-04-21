import React, { useState } from "react";
import styles from "./styles.module.css";
import { saveAs } from "file-saver";
import { useHistory, useLocation } from "react-router-dom";
import { useClipboard } from "use-clipboard-copy";

export const MemeGenerated = () => {
  const [copied, setCopied] = useState(false);

  const clipboard = useClipboard();
  const history = useHistory();
  const location = useLocation();
  const url = new URLSearchParams(location.search).get("url");

  const copyLink = () => {
    clipboard.copy(url);
    setCopied(true);
  };

  const downloadImage = () => {
    saveAs(url, "url");
  };

  return (
    <div className={styles.container}>
      <button onClick={() => history.push("/")} className={styles.home}>
        Make Another
      </button>
      {url && <img alt="meme" src={url} />}
      <button onClick={copyLink} className={styles.copy}>
        {copied ? "Link copied!" : "Copy Link"}
      </button>
      <button onClick={downloadImage} className={styles.download}>
        Download
      </button>
    </div>
  );
};
