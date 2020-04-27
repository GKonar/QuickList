import { useState } from 'react';

function useInputState() {
  const [value, setValue] = useState('');
  const handleChange = (e) => setValue(e.target.value);
  const reset = () => setValue('');

  return [value, handleChange, reset];
}

export default useInputState;
