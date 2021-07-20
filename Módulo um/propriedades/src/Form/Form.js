import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = () => {
  return (
    <>
      <Input id="email" label="Email" />
      <Input id="senha" type="password" label="Senha" />
      <Button />
    </>
  );
};

export default Form;
