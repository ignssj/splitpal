import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    padding: 20,
    backgroundColor: '#001F3F',
    borderRadius: 10,
    marginHorizontal: 20,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  logo: {
    width: 220,
    height: 220,
    marginBottom: 10,
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#66B2FF',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#66B2FF',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#F0F8FF',
    color: '#001F3F',
    width: '100%',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  buttonText: {
    color: '#F0F8FF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#66B2FF',
    textAlign: 'center',
  },
});

export default styles;
