import React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <View style={styles.innerContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Login</Text>
          <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#CCCCCC" />
          <TextInput style={styles.input} placeholder="Senha" secureTextEntry placeholderTextColor="#CCCCCC" />
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CadastroScreen')}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('CadastroScreen')}>
            <Text style={styles.linkText}>Não tem uma conta? Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
