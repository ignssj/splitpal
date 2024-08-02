import React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const CadastroScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <View style={styles.innerContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Cadastro</Text>
          <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#CCCCCC" />
          <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#CCCCCC" />
          <TextInput style={styles.input} placeholder="Senha" secureTextEntry placeholderTextColor="#CCCCCC" />
          <TextInput style={styles.input} placeholder="Confirmar Senha" secureTextEntry placeholderTextColor="#CCCCCC" />
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.linkText}>Já tem uma conta? Faça login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CadastroScreen;
