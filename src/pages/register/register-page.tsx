import { useEffect } from 'react';
import { RegisterForm } from '../../components/forms/register-form';
import { Container } from './register-styles';
import { invalidToken } from '../../utils/validate-token';
import { useNavigate } from 'react-router-dom';

export const RegisterPage = () => {
  const token = localStorage.getItem('authToken') ?? '';
  const navigate = useNavigate();

  useEffect(() => {
    if (invalidToken(token)) {
      navigate('/login');
    }
  }, [token]);
  return (
    <Container>
      <RegisterForm token={token} />
    </Container>
  );
};
