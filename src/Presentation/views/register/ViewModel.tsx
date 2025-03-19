import { useState } from 'react';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';

const RegisterViewModel = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const onChange = (field: string, value: string) => {
    switch (field) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
    }
  };

  const register = async () => {
    if (password !== confirmPassword) {
      return false;
    }

    try {
      const response = await RegisterAuthUseCase({ name, email, password, confirmPassword });
      if (response.success) {
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        return true;
      }
      return false;
    } catch (error) {
      console.log('Error en registro:', error);
      return false;
    }
  };

  return {
    name,
    email,
    password,
    confirmPassword,
    onChange,
    register,
    error
  };
};

export default RegisterViewModel;