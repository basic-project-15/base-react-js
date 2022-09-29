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
          {column.render('Header')}
          <span>
            {column.isSorted ? (
              column.isSortedDesc ? (
                <ArrowDropUpIcon />
              ) : (
                <ArrowDropDownIcon />
              )
            ) : (
              <SortIcon width={12} height={12} style={{ marginLeft: 4 }} />
            )}
          </span>
        </th>
      ))}
      {isActions && <th className="rt-th">{actionColumnTitle}</th>}
    </>
  );
};

export default TableHeaders;
