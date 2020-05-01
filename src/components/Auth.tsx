import React, { CSSProperties, ReactNode } from 'react';
import "react-router-dom";
import { UserAuthsComponent, Auth, Workspace } from '../generated/graphql';
import Error from './Error';
import * as _ from 'lodash';
import styled from 'styled-components';
import getLocale from '../lib/locale'

// why is this not generated?
export type AuthRow = (
  Pick<Auth, 'created_at' | 'id' | 'name' | 'roles' | 'status' | 'type' | 'value' | 'workspace_id'>
  & {
    workspace: Pick<Workspace, 'color' | 'description' | 'id' | 'name' | 'status' | 'updated_at' | 'created_at'>
  }
);

const AUTH_TYPE_LABEL: Record<string, string> = {
  "api-key-header": "Api Key Header",
  "user-token": "User Token"
}

const Quote = styled.i`
  ${props => props.className} {
  padding: 10px;
  quotes: "“" "”" "‘" "’";
  }

  ${props => props.className}::before {
  content: open-quote;
  }

  ${props => props.className}:after {
  content: close-quote;
  }
`
function onClickExpand(e: React.MouseEvent) {
  if (e.target instanceof Element) {
    window.getSelection()?.selectAllChildren(e.target)
  }
}


type SecretProps = {
  children: ReactNode
}

function Secret({ children }: SecretProps) {
  return <b onClick={onClickExpand}>{children}</b>
}

function AuthRow(auth: AuthRow) {
  /* const authStyle: CSSProperties = {
   *   backgroundColor: 'rgb(' + auth.color!.split(',') + ')'
   * } */

  const workspaceStyle: CSSProperties = {
    backgroundColor: 'rgb(' + auth.workspace.color!.split(',') + ', 0.2)',
    padding: '5px',
  }

  let createdAt = new Date(auth.created_at).toLocaleString(getLocale());

  return <li className="content">
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="subtitle"> {AUTH_TYPE_LABEL[auth.type] || "Unknown"}</p>
            <div className="content"> Secret: <Secret> {auth.value} </Secret>  <Quote> {auth.name} </Quote></div>
            <div style={workspaceStyle}>
              <p>Attached to: {auth.workspace.name} <Quote> {auth.workspace.description} </Quote></p>
            </div>
            <p>created: <time dateTime={auth.created_at}>{createdAt}</time></p>
          </div>
        </div>
      </div>
    </div>
  </li>
}

interface AuthTableInterface {
  title: string;
  auths: Array<AuthRow>;
}

function AuthTable({ title, auths }: AuthTableInterface) {
  if (!auths) {
    return <section>
      <h2 className="title">{title}</h2>
      <p className="subtitle">None yet</p>
    </section>
  } else {
    return <section>
      <h2 className="title">{title}</h2>
      <ul>
        {auths.map((row) => <AuthRow key={row.id} {...row} />)}
      </ul>
    </section>
  }
}

function AuthComponent() {
  return <UserAuthsComponent>
    {(result) => {
      if (result.error) {
        return <section>
          <h2 className="title">Security</h2>
          <Error></Error>
        </section>
      } else if (result.data) {
        const authByType = _.groupBy(result.data.auth, (x) => (x.type));
        return <React.Fragment>
          <AuthTable title="User tokens" auths={authByType["user-token"]} />
          <AuthTable title="API keys" auths={authByType["api-key-header"]} />
        </React.Fragment>
      } else {
        return <h2> No Auth yet</h2>
      }
    }}
  </UserAuthsComponent>;
}

export default AuthComponent;
