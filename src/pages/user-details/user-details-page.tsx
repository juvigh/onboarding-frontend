import { useNavigate, useParams } from 'react-router-dom';
import { UserDetails } from '../../components/user-details/user-details';
import { Container } from './user-details-page-styles';
import { validateToken } from '../../utils/validate-token';
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

  useEffect(() => {
    if (validateToken(token)) {
      navigate('/login');
    }
  }, [token, id]);

  return (
    <Container>
      <UserDetails userId={id} token={token} />
      <Separator vertical size={12} />
      <Button title="Voltar a pagina usuários" onClick={handleBackToPageClick} />
    </Container>
  );
};
