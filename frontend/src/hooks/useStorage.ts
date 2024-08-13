import * as SecureStore from "expo-secure-store";

const useStorage = () => {
  const write = async (key: string, value: string) => {
    await SecureStore.setItemAsync(key, value);
  };

  const read = async (key: string) => {
    return await SecureStore.getItemAsync(key);
  };

  return {
    write,
    read,
  };
};

export default useStorage;
