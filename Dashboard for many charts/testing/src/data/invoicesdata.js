export const invoicescolumns=[
    { field: 'id', headerName: 'ID', flex:2,cellClassName:'nameclass'},
    { field: 'name', headerName: 'Name', flex:3 ,cellClassName:'otherclass',},
    { field: 'phonenumber', headerName: 'Phone Number', flex:4 ,cellClassName:'otherclass',},
    {
      field: 'email',
      headerName: 'Email',
      cellClassName:'otherclass',
      type: 'email',
      flex:3,
    },
    {
      field: 'cost',
      flex:2 ,
      headerName: 'Cost',
      cellClassName:'costclass'
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];

export const invoicesrows= [
    { id: 1, name: 'Jon Snow', phonenumber:'(665)121-5454', email: 'Bob@qq.com' ,cost:'$21.25'},
    { id: 2, name: 'Cerssei Lannister', phonenumber: '(421)314-2288', email: 'Bob1@qq.com' ,cost:'$22.25'},
    { id: 3, name: 'Jaime Lannister', phonenumber: '(422)982-6739', email: 'Bob2@qq.com' ,cost:'$21.15'},
    { id: 4, name: 'Anya Stark', phonenumber: '(921)425-6742', email: 'Bob3@qq.com' ,cost:'$31.25'},
    { id: 5, name: 'Daenerys Targaryen', phonenumber: '(921)425-6742', email: 'Bob4@qq.com' ,cost:'$26.25'},
    { id: 6, name: 'Ever Melisandre', phonenumber: '(421)445-1189', email: 'Bob5@qq.com' ,cost:'$23.25'},
    { id: 7, name: 'Ferrara Clifford', phonenumber: '(123)312-2231', email: 'Bob6@qq.com' ,cost:'$29.25'},
    { id: 8, name: 'Rossini Frances', phonenumber: '(213)123-2923', email: 'Bob7@qq.com' ,cost:'$31.25'},
  ];