import React from "react";
import Row from "../../Row";
import styles from "../styles";
import { IScreenHeader } from "../types";

const ScreenHeader: React.FC<IScreenHeader> = ({ children }) => {
  return (
    <Row testID='Header' style={styles.row}>
      {children}
    </Row>
  );
};

export default ScreenHeader;
