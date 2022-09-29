export const columnsBasic = [
  {
    Header: 'Id',
    accessor: 'id',
  },
  {
    Header: 'Primer Nombre',
    accessor: 'first_name',
  },
  {
    Header: 'Segundo Nombre',
    accessor: 'last_name',
  },
  {
    Header: 'Fecha de Nacimiento',
    accessor: 'date_of_birth',
    Cell: ({ value }) => {
      return new Date(value);
    },
  },
  {
    Header: 'Pais',
    accessor: 'country',
  },
  {
    Header: 'Telefono',
    accessor: 'phone',
  },
];
