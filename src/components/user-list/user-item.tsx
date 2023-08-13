import React from 'react';
import { UserItemContainer } from './user-list-styles';

interface UserItemProps {
  username: string;
  email: string;
  hasBorderBottom: boolean;
}

export const UserItem = ({ username, email, hasBorderBottom }: UserItemProps) => {
  return (
    <UserItemContainer hasBorderBottom={hasBorderBottom}>
      <h3>{username}</h3>
      <p>{email}</p>
    </UserItemContainer>
  );
};
