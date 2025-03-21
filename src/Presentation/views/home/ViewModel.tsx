import { useState } from 'react';

const useHomeViewModel = () => {
  const [values, setValues] = useState({ email: '', password: '' });

  const onChange = (property: string, value: string) => {
    setValues({ ...values, [property]: value });
  };

  const resetValues = () => {
    setValues({ email: '', password: '' });
  };

  return { ...values, onChange, resetValues };
};

export default useHomeViewModel;
