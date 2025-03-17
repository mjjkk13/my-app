import { useState } from 'react';

const useHomeViewModel = () => {
  const [values, setValues] = useState({ email: '', password: '' });

  const onChange = (property: string, value: string) => {
    setValues({ ...values, [property]: value });
  };

  return { ...values, onChange };
};

export default useHomeViewModel;