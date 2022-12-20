import React from "react";
import styles from "./section.module.css";

const Section = (props: { children: React.ReactNode }) => {
  return <div className={styles.section}>{props.children}</div>;
};

export default Section;
