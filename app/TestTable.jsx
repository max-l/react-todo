import { useEffect, useState, useMemo } from "npm:react";
import { useExpanded, useTable } from 'npm:react-table?cjs-exports=useTable,useExpanded';



const initialData = [
    {
        "firstName": "mark",
        "lastName": "beetle",
        "age": 23,
        "visits": 50,
        "progress": 23,
        "status": "relationship"
    },
    {
        "firstName": "transportation",
        "lastName": "cushion",
        "age": 11,
        "visits": 41,
        "progress": 27,
        "status": "single"
    },
    {
        "firstName": "event",
        "lastName": "clouds",
        "age": 12,
        "visits": 50,
        "progress": 35,
        "status": "relationship"
    },
    {
        "firstName": "device",
        "lastName": "duck",
        "age": 4,
        "visits": 7,
        "progress": 49,
        "status": "complicated"
    }
]



function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function TestTable() {
  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
          },
          {
            Header: 'Visits',
            accessor: 'visits',
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
          },
        ],
      },
    ],
    []
  )

  const data = useMemo(() => initialData, [])

  return (
      <Table columns={columns} data={data} />
  )
}

export default TestTable