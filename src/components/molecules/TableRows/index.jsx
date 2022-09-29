import React from 'react';

// Components
import { IconButtonCustom } from '../../atoms';
import { Tooltip } from '@mui/material';

// Const
import { typesTableActions } from '../../../common/types';

// Assets
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const { tableView, tableAdd, tableEdit, tableDelete } = typesTableActions;

const TableRows = ({
  actionClick = () => null,
  actions = [],
  identifierName = 'id',
  isActions = false,
  page = [],
  prepareRow = () => null,
}) => {
  const renderActions = action => {
    let actionIcon = null;
    switch (action) {
      case tableView:
        actionIcon = (
          <Tooltip title="Ver">
            <VisibilityIcon fill="#b4b4b4" />
          </Tooltip>
        );
        break;
      case tableAdd:
        actionIcon = (
          <Tooltip title="Agregar">
            <AddIcon fill="#b4b4b4" />
          </Tooltip>
        );
        break;
      case tableEdit:
        actionIcon = (
          <Tooltip title="Editar">
            <EditIcon fill="#b4b4b4" />
          </Tooltip>
        );
        break;
      case tableDelete:
        actionIcon = (
          <Tooltip title="Eliminar">
            <DeleteIcon fill="#b4b4b4" />
          </Tooltip>
        );
        break;
      default:
        actionIcon = (
          <Tooltip title="Delete">
            <VisibilityIcon fill="#b4b4b4" />
          </Tooltip>
        );
        break;
    }
    return actionIcon;
  };

  const renderCells = cell => {
    let element = null;
    if (cell.column.id === 'STATE') {
      element = <span>Estado</span>;
    } else {
      element = cell.render('Cell');
    }
    return element;
  };

  return (
    <>
      {page.map(row => {
        prepareRow(row);
        return (
          <tr className="rt-tr" {...row.getRowProps()}>
            {row.cells.map(cell => (
              <td className="rt-td" {...cell.getCellProps()}>
                {renderCells(cell)}
              </td>
            ))}
            {isActions && (
              <td className="rt-td flex justify-end">
                {actions.map((action, index) => {
                  let rowEnabled = row.original.ENABLED;
                  let enabled = true;
                  if (typeof rowEnabled === 'boolean') {
                    enabled = rowEnabled;
                  }
                  return (
                    <IconButtonCustom
                      key={index}
                      icon={renderActions(action)}
                      onClick={() =>
                        actionClick(
                          action,
                          row.original[identifierName],
                          row.original,
                        )
                      }
                      disabled={!enabled}
                    />
                  );
                })}
              </td>
            )}
          </tr>
        );
      })}
    </>
  );
};

export default TableRows;
