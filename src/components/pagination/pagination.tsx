interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const handlePreviousPage = () => {
    if (currentPage > 0) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div>
      <button onClick={handlePreviousPage} disabled={currentPage === 0}>
        Anterior
      </button>
      <span>
        Página {currentPage + 1} de {totalPages}
      </span>
      <button onClick={handleNextPage} disabled={currentPage === totalPages - 1}>
        Próximo
      </button>
    </div>
  );
};
