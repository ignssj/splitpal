import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  sucess: {
    borderLeftWidth: 0,
    marginTop: '5%',
    height: 50,
    borderRadius: 15,
  },
  error: {
    borderLeftWidth: 0,
    marginTop: '5%',
    height: 50,
    borderRadius: 15,
  },
  containerSuccess: {
    paddingHorizontal: '5%',
    backgroundColor: '#12C06A',
    borderRadius: 15
  },
  containerError: {
    paddingHorizontal: '5%',
    backgroundColor: '#f05545',
    borderRadius: 15
  },
  text1: {
    paddingHorizontal: '5%',
    fontSize: 16,
    color: 'white',
    fontFamily: 'Outfit_600SemiBold'
  },
  text2: {
    fontSize: 12,
    paddingHorizontal: '5%',
    color: 'white',
    fontFamily: 'Outfit_400Regular'
  }
});

export default styles;
