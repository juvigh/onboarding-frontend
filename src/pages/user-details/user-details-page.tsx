import { useNavigate, useParams } from 'react-router-dom';
import { UserDetails } from '../../components/user-details/user-details';
import { Container } from './user-details-page-styles';
import { invalidToken } from '../../utils/validate-token';
import { useEffect } from 'react';
import { Button } from '../../components/buttons/button';
import { Separator } from '../../components/separator/separator';

export const UserDetailsPage = () => {
  const { id } = useParams();
  const token = localStorage.getItem('authToken') ?? '';
  const navigate = useNavigate();
  const handleBackToPageClick = () => {
    navigate('/');
  };

  const userId = id ?? '';

  useEffect(() => {
    if (invalidToken(token)) {
      navigate('/login');
    }
  }, [token, userId]);

  return (
    <Container>
      <UserDetails userId={userId} token={token} />
      <Separator vertical size={12} />
      <Button title="Voltar a pagina usuários" onClick={handleBackToPageClick} />
    </Container>
  );
};
