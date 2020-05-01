import React from 'react';
import "react-router-dom";
import { UserConnComponent, Conn } from '../generated/graphql';
import Error from './Error';
import {
  useTable
} from 'react-table'
import LoaderWrapper from './Loading';
//https://react-table.js.org/concepts

// why is this not generated?
export type ConnRow = (
  Pick<Conn, 'client_id' | 'connected_on' | 'id' | 'last_ping' | 'sdk_version' | 'status' | 'uid' | 'updated_at'>
);

// @ts-ignore
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
    <div className="table-container">
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth" {...getTableProps()}>
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
    </div>
  )
}

function Connections() {

  const columns = React.useMemo(
    () => [
      {
        Header: 'Client ID',
        accessor: 'client_id'
      },

      {
        Header: 'Connected on',
        accessor: 'connected_on'
      },

      {
        Header: 'Status',
        accessor: 'status'
      },

      {
        Header: 'SDK version',
        accessor: 'sdk_version'
      }

    ],
    []
  )

  return <UserConnComponent>
    {(result) => {
      if (result.error) {
        return <section>
          <h1 className="title"> Connections </h1>
          <Error></Error>
        </section>
      } else if (result.data && result.data.conn.length !== 0) {
        return <div>
          <h1 className="title"> Connections </h1>
          <Table columns={columns} data={result.data.conn} />
        </div>
      } else {
        return <div>
          <h1 className="title"> Connections </h1>
          <LoaderWrapper overlayLoader={result.loading}>
            <h2 className="subtitle">No connections yet. Follow the turorial, or use the Playground</h2>
          </LoaderWrapper>
        </div>
      }
    }}

  </UserConnComponent>
}

export default Connections;