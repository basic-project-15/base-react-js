import React from 'react';

// Assets
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { ReactComponent as SortIcon } from '../../../assets/icons/tablas/SortIcon.svg';

const TableHeaders = ({
  actionColumnTitle = '',
  headerGroup = {},
  isActions = false,
}) => {
  return (
    <>
      {headerGroup.headers.map(column => (
        <th
          className="rt-th"
          {...column.getHeaderProps(column.getSortByToggleProps())}
        >
          <span className="flex items-center">
            {column.render('Header')}
            {column.isSorted ? (
              column.isSortedDesc ? (
                <ArrowDropUpIcon />
              ) : (
                <ArrowDropDownIcon />
              )
            ) : (
              <SortIcon className="w-3 h-3 ml-1" />
            )}
          </span>
        </th>
      ))}
      {isActions && <th className="rt-th">{actionColumnTitle}</th>}
    </>
  );
};

export default TableHeaders;
