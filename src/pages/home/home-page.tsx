import { useNavigate } from 'react-router-dom';
import { UserList } from '../../components/user-list/user-list';
import { Container } from './home-styles';
import { useEffect } from 'react';
import { invalidToken } from '../../utils/validate-token';

export const HomePage = () => {
  const token = localStorage.getItem('authToken') ?? '';
  const navigate = useNavigate();

  useEffect(() => {
    if (invalidToken(token)) {
      navigate('/login');
    }
  }, [token]);

  return (
    <Container>
      <UserList token={token} />
    </Container>
  );
};
