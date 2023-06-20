import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, TextFiled, Label, Btn } from './RegisterForm.styled';
import authOperations from 'redux/auth/auth-operations';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeInput = (event, name) => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'email':
        setEmail(event.currentTarget.value);
        break;
      case 'password':
        setPassword(event.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const onSubmitForm = event => {
    event.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <h1>Registration form</h1>

      <Form onSubmit={onSubmitForm} autoComplete="off">
        <Label>
          Your Name
          <TextFiled
            type="text"
            name="name"
            value={name}
            onChange={handleChangeInput}
          />
        </Label>

        <Label>
          Your Email
          <TextFiled
            type="email"
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
        </Label>

        <Label>
          Your Password
          <TextFiled
            type="password"
            name="password"
            value={password}
            onChange={handleChangeInput}
          />
        </Label>

        <Btn type="submit">Register</Btn>
      </Form>
    </div>
  );
};

export default RegisterForm;
