import { useNavigate } from 'react-router-dom';
import { fetchUser } from '../../data/fetch-user';
import { H1, Paragraph } from '../../atomic/styles/text-styles';
import { ErrorMessage } from '../../atomic/form-field/error-message.component';
import { LoadingIndicator } from '../../atomic/loading/loading-indicador';
import { Title } from '../user-list/user-list.styles';
import { StrongText, UserDetailsContainer, UserInfo } from './user-details.styles';

interface UserDetailsProps {
  userId: string;
  token: string;
}

export const UserDetails = ({ userId, token }: UserDetailsProps) => {
  const { data, loading, error } = fetchUser({ token, userId });
  const user = data?.user;
  const navigate = useNavigate();
  if (error && error.message === 'Operação não autenticada.') {
    navigate('/login');
  }
  return (
    <UserDetailsContainer>
      <Title>
        <H1 centred color="White">
          Detalhes do usuário
        </H1>
      </Title>
      {loading ? (
        <LoadingIndicator isLoadingList />
      ) : (
        <>
          {user && (
            <UserInfo>
              <Paragraph hasPadding>
                <StrongText>Nome:</StrongText> {user.name}
              </Paragraph>

              <Paragraph hasPadding>
                <StrongText>Email:</StrongText> {user.email}
              </Paragraph>

              <Paragraph hasPadding>
                <StrongText>Telefone:</StrongText> {user.phone}
              </Paragraph>

              <Paragraph hasPadding>
                <StrongText>Data de Nascimento:</StrongText> {user.birthDate}
              </Paragraph>

              <Paragraph hasPadding>
                <StrongText>Tipo de usuário:</StrongText> {user.role}
              </Paragraph>
            </UserInfo>
          )}
        </>
      )}
      {error && <ErrorMessage message={error.message} />}
    </UserDetailsContainer>
  );
};
