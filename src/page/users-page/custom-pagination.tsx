import React from "react";
import './custom-pagination.css'

type CustomPaginationProps = {
  total: number;
  perPage: number;
  onPage: (page: number) => void;
};

const CustomPagination: React.FC<CustomPaginationProps> = ({
  total,
  perPage,
  onPage,
}) => {
  const pages: number[] = [];

  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination-root">
      <ul>
        {pages.map((page) => (
          <li key={page}>
            <a  href="!#" onClick={() => onPage(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomPagination;
