import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { Form, TextFiled, Label, Btn } from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeInput = event => {
    switch (event.currentTarget.name) {
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
    dispatch(authOperations.logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Login form</h1>

      <Form onSubmit={onSubmitForm} autoComplete="off">
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

        <Btn type="submit">Login</Btn>
      </Form>
    </div>
  );
};

export default LoginForm;
