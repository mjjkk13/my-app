import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image, Alert } from 'react-native';
import useRegisterViewModel from './ViewModel';
import styles from './Styles';
import { RouteProp } from '@react-navigation/native';

type RegisterScreenRouteProp = RouteProp<{ params: { setName?: (name: string) => void } }, 'params'>;

const RegisterScreen = ({ route }: { route: RegisterScreenRouteProp }) => {
  const { setName } = route.params || {};
  const { name, email, password, confirmPassword, onChange, register } = useRegisterViewModel();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }
    if (!name || !email || !password) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }
    try {
      const success = await register();
      if (success) {
        Alert.alert('Éxito', `Registro completado correctamente.`);
        setName && setName(name); 
      } else {
        Alert.alert('Error', 'No se pudo completar el registro');
      }
    } catch (error) {
      Alert.alert('Error', 'Ocurrió un problema durante el registro');
    }
  };

  return (
    <ImageBackground source={require('../../../../assets/Chefs Preparing Meal.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Registro</Text>
        <TextInput style={styles.input} placeholder="Nombre" value={name} onChangeText={(text) => onChange('name', text)} />
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={(text) => onChange('email', text)} />
        <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry value={password} onChangeText={(text) => onChange('password', text)} />
        <TextInput style={styles.input} placeholder="Confirmar Contraseña" secureTextEntry value={confirmPassword} onChangeText={(text) => onChange('confirmPassword', text)} />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default RegisterScreen;
