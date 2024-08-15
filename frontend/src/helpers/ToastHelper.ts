import Toast from "react-native-toast-message";

export function SuccessToast(title: string, message?: string) {
  Toast.show({
    type: "success",
    text1: title,
    text2: message,
  });
}

export function ErrorToast(title: string, message?: string) {
  Toast.show({
    type: "error",
    text1: title,
    text2: message,
  });
}
