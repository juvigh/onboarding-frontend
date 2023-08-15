import React from 'react';
import { UserItemContainer } from './user-list-styles';
import { H3, Paragraph } from '../../styles/text-styles';

interface UserItemProps {
  username: string;
  email: string;
  hasBorderBottom: boolean;
}

export const UserItem = ({ username, email, hasBorderBottom }: UserItemProps) => {
  return (
    <UserItemContainer hasBorderBottom={hasBorderBottom}>
      <H3>{username}</H3>
      <Paragraph>{email}</Paragraph>
    </UserItemContainer>
  );
};
