import { ErrorToast, SuccessToast } from "react-native-toast-message";
import styles from "./styles";

export const toastConfig = {
  success: (props: any) => <SuccessToast {...props} style={styles.sucess} contentContainerStyle={styles.containerSuccess} text1Style={styles.text1} text2Style={styles.text2}/>,
  error: (props: any) => <ErrorToast {...props} style={styles.error} contentContainerStyle={styles.containerError} text1Style={styles.text1} text2Style={styles.text2} />
};
