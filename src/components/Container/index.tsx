import React from "react";
import styles from "./Container.module.scss";

const Container = ({ children }: React.PropsWithChildren) => {
  const { container } = styles;
  return <div className={container}>{children}</div>;
};

export default Container;
