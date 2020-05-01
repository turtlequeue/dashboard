import React from 'react';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import { UserSubsComponent, Sub, Workspace } from '../generated/graphql';
import LoaderWrapper from './Loading';
import Error from './Error';
import {
  useTable
} from 'react-table'
import getLocale from '../lib/locale'
import OneTopic from './OneTopic'

export type SubRow = (
  Pick<Sub, 'channel' | 'channel_type' | 'created_at' | 'geo' | 'geo_radius' | 'id' | 'json_path' | 'status' | 'type' | 'updated_at' | 'valid_until' | 'workspace_id'>
  & {
    workspace: (
      & Pick<Workspace, 'color' | 'description' | 'id' | 'name' | 'status'>
    )
  }
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

  if (rows.length === 0) {
    return <div>No topics yet. Create one following the tutorial, or use the playground</div>;
  } else {
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
}



interface TopicsTableInterface {
  subs: Array<SubRow>;
}

function TopicsTable({ subs }: TopicsTableInterface) {
  let match = useRouteMatch();

  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
        Cell: ({ value }: any) => (<Link to={{ pathname: `${match.path}/${value}` }}>{value}</Link>)
      },
      {
        Header: 'Channel',
        accessor: 'channel'
      },

      {
        Header: 'Created at',
        accessor: 'created_at',
        Cell: ({ value }: any) => {
          let createdAt = new Date(value).toLocaleString(getLocale());
          return <time dateTime={value}>{createdAt}</time>
        }
      },

      {
        Header: 'Status',
        accessor: 'status'
      }
    ],
    [match.path]
  )

  return <div> <Table columns={columns} data={subs} /> </div>;

}


function Topics() {
  let match = useRouteMatch();

  console.log('MATCH', match);

  return (
    <section>
      <h1 className="title">Topics</h1>
      <Switch>
        <Route path={`${match.path}/:subscriptionId`}>
          <OneTopic />
        </Route>
        <Route path={match.path}>
          <UserSubsComponent>
            {(result) => {
              if (result.error) {
                return <Error />;
              } else if (result.data) {
                return <LoaderWrapper overlayLoader={result.loading}>
                  <TopicsTable subs={result.data.sub} />
                </LoaderWrapper>
              } else {
                return <LoaderWrapper overlayLoader={result.loading}>
                  <h2>No subs yet. Follow the tutorial or use the playground</h2>
                </LoaderWrapper>
              }
            }}
          </UserSubsComponent>
        </Route>
      </Switch>
    </section>
  );
}


export default Topics;
