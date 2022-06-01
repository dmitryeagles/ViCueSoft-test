import React from "react";
import {NavLink} from 'react-router-dom'
import { CustomPaginationProps } from "../../types/common.types";
import './custom-pagination.css'



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
            <NavLink  to="#" onClick={() => onPage(page)}>
              {page}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomPagination;
