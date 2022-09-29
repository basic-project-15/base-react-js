import React, { useMemo } from 'react';

// Components
import { TableCustom } from '../../templates';

// Const
import MOCK_DATA from '../../../common/tables/data.json';
import { columnsBasic } from '../../../common/tables';

const ComponentsTable = () => {
  const columns = useMemo(() => columnsBasic, []);
  const users = useMemo(() => MOCK_DATA, []);

  return (
    <div>
      <h1>ComponentsTable</h1>
      <TableCustom
        data={users}
        columns={columns}
        actionClick={(action, id) => console.log(action, id)}
      />
    </div>
  );
};

export default ComponentsTable;
