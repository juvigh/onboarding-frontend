import React from 'react';
import { UserItemContainer, UserItemText } from './user-list-styles';
import { H3, Paragraph } from '../../styles/text-styles';
import { Button } from '../buttons/button';
import { useNavigate } from 'react-router-dom';

interface UserItemProps {
  username: string;
  email: string;
  hasBorderBottom: boolean;
  userId: string;
}

export const UserItem = ({ username, email, hasBorderBottom, userId }: UserItemProps) => {
  const navigate = useNavigate();

  const handleMoreInfoClick = () => {
    navigate(`/user/${userId}`);
  };
  return (
    <UserItemContainer hasBorderBottom={hasBorderBottom}>
      <UserItemText>
        <H3>{username}</H3>
        <Paragraph>{email}</Paragraph>
      </UserItemText>
      <Button title="Mais informações" onClick={handleMoreInfoClick} />
    </UserItemContainer>
  );
};
