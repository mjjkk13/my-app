import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import useHomeViewModel from './ViewModel';

type RootStackParamList = {
  HomeScreen: undefined;
  RegisterScreen: undefined;
};
import { styles } from './Styles';

const HomeScreen = () => {
  const { email, password, onChange } = useHomeViewModel();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <ImageBackground source={require('../../../../assets/Chefs Preparing Meal.jpg')} style={styles.background}>
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de Sesión</Text>
      <TextInput style={styles.input} placeholder='Email' value={email} onChangeText={(text) => onChange('email', text)} />
      <TextInput style={styles.input} placeholder='Contraseña' value={password} secureTextEntry onChangeText={(text) => onChange('password', text)} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={styles.buttonText}>Ir a Registro</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

export default HomeScreen;