import { ErrorToast, SuccessToast } from "react-native-toast-message";
import styles from "./styles";

export const toastConfig = {
  success: (props: any) => <SuccessToast {...props} style={styles.sucess} />,
  error: (props: any) => <ErrorToast {...props} style={styles.error} />,
};
