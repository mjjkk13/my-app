import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import useHomeViewModel from './ViewModel';

import { styles } from './Styles';

type RootStackParamList = {
  HomeScreen: undefined;
  RegisterScreen: { setName: React.Dispatch<React.SetStateAction<string>> };
};

const HomeScreen = () => {
  const { email, password, onChange } = useHomeViewModel();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [name, setName] = useState('');

  const handleWelcomeAlert = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor, ingresa tu correo y contraseña');
      return;
    }
    Alert.alert('Bienvenido', `Bienvenido, ${name || 'Usuario'}!`);
    onChange('email', ''); 
    onChange('password', ''); 
  };

  return (
    <ImageBackground source={require('../../../../assets/Chefs Preparing Meal.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Inicio de Sesión</Text>
        <TextInput 
          style={styles.input} 
          placeholder='Email' 
          value={email} 
          onChangeText={(text) => onChange('email', text)} 
        />
        <TextInput 
          style={styles.input} 
          placeholder='Contraseña' 
          value={password} 
          secureTextEntry 
          onChangeText={(text) => onChange('password', text)} 
        />
        <TouchableOpacity style={styles.button} onPress={handleWelcomeAlert}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('RegisterScreen', { setName })}>
          <Text style={styles.buttonText2}>Ir a Registro</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;