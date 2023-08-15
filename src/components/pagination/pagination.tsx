import React from 'react';
import { Button } from '../buttons/button';
import { MenuPagination, PaginationContainer } from './pagination-styles';
import { Separator } from '../separator/separator';
import { useNavigate } from 'react-router-dom';
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const navigate = useNavigate();
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <PaginationContainer>
      <MenuPagination>
        <Button title="Anterior" bgColor="#928f8f" onClick={handlePreviousPage} disable={currentPage === 1} />
        <Separator horizontal size={8} />
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <Separator horizontal size={8} />
        <Button title="Próximo" bgColor="#928f8f" onClick={handleNextPage} disable={currentPage === totalPages} />
      </MenuPagination>
      <Button
        title="+"
        bgColor="black"
        textColor="white"
        sizeRadius={20}
        actionButton
        onClick={() => navigate('/register-user')}
      />
    </PaginationContainer>
  );
};
