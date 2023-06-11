import React from "react";
import styles from "./OverlayContainer.module.scss";

const OverlayContainer = ({ children }: React.PropsWithChildren) => {
  const { overlay, modalContainer } = styles;
  return (
    <div className={overlay}>
      <div className={modalContainer}>{children}</div>
    </div>
  );
};

export default OverlayContainer;
