import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  jsonb: any;
  geometry: any;
  geography: any;
  bigint: any;
  uuid: any;
};

/** query root */
export type Query_Root = {
   __typename?: 'query_root';
  /** fetch data from the table: "auth" */
  auth: Array<Auth>;
  /** fetch aggregated fields from the table: "auth" */
  auth_aggregate: Auth_Aggregate;
  /** fetch data from the table: "auth" using primary key columns */
  auth_by_pk?: Maybe<Auth>;
  /** fetch data from the table: "backlog" */
  backlog: Array<Backlog>;
  /** fetch aggregated fields from the table: "backlog" */
  backlog_aggregate: Backlog_Aggregate;
  /** fetch data from the table: "backlog" using primary key columns */
  backlog_by_pk?: Maybe<Backlog>;
  /** fetch data from the table: "conn" */
  conn: Array<Conn>;
  /** fetch aggregated fields from the table: "conn" */
  conn_aggregate: Conn_Aggregate;
  /** fetch data from the table: "conn" using primary key columns */
  conn_by_pk?: Maybe<Conn>;
  /** fetch data from the table: "qstat" */
  qstat: Array<Qstat>;
  /** fetch aggregated fields from the table: "qstat" */
  qstat_aggregate: Qstat_Aggregate;
  /** fetch data from the table: "qstat" using primary key columns */
  qstat_by_pk?: Maybe<Qstat>;
  /** fetch data from the table: "sub" */
  sub: Array<Sub>;
  /** fetch aggregated fields from the table: "sub" */
  sub_aggregate: Sub_Aggregate;
  /** fetch data from the table: "sub" using primary key columns */
  sub_by_pk?: Maybe<Sub>;
  /** fetch data from the table: "usr" */
  usr: Array<Usr>;
  /** fetch aggregated fields from the table: "usr" */
  usr_aggregate: Usr_Aggregate;
  /** fetch data from the table: "usr" using primary key columns */
  usr_by_pk?: Maybe<Usr>;
  /** fetch data from the table: "ustat" */
  ustat: Array<Ustat>;
  /** fetch aggregated fields from the table: "ustat" */
  ustat_aggregate: Ustat_Aggregate;
  /** fetch data from the table: "ustat" using primary key columns */
  ustat_by_pk?: Maybe<Ustat>;
  /** fetch data from the table: "workspace" */
  workspace: Array<Workspace>;
  /** fetch aggregated fields from the table: "workspace" */
  workspace_aggregate: Workspace_Aggregate;
  /** fetch data from the table: "workspace" using primary key columns */
  workspace_by_pk?: Maybe<Workspace>;
  /** fetch data from the table: "wstat" */
  wstat: Array<Wstat>;
  /** fetch aggregated fields from the table: "wstat" */
  wstat_aggregate: Wstat_Aggregate;
  /** fetch data from the table: "wstat" using primary key columns */
  wstat_by_pk?: Maybe<Wstat>;
};


/** query root */
export type Query_RootAuthArgs = {
  distinct_on?: Maybe<Array<Auth_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Order_By>>;
  where?: Maybe<Auth_Bool_Exp>;
};


/** query root */
export type Query_RootAuth_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Order_By>>;
  where?: Maybe<Auth_Bool_Exp>;
};


/** query root */
export type Query_RootAuth_By_PkArgs = {
  id: Scalars['Int'];
  workspace_id: Scalars['Int'];
};


/** query root */
export type Query_RootBacklogArgs = {
  distinct_on?: Maybe<Array<Backlog_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Backlog_Order_By>>;
  where?: Maybe<Backlog_Bool_Exp>;
};


/** query root */
export type Query_RootBacklog_AggregateArgs = {
  distinct_on?: Maybe<Array<Backlog_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Backlog_Order_By>>;
  where?: Maybe<Backlog_Bool_Exp>;
};


/** query root */
export type Query_RootBacklog_By_PkArgs = {
  id: Scalars['Int'];
  subscription_id: Scalars['Int'];
};


/** query root */
export type Query_RootConnArgs = {
  distinct_on?: Maybe<Array<Conn_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Conn_Order_By>>;
  where?: Maybe<Conn_Bool_Exp>;
};


/** query root */
export type Query_RootConn_AggregateArgs = {
  distinct_on?: Maybe<Array<Conn_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Conn_Order_By>>;
  where?: Maybe<Conn_Bool_Exp>;
};


/** query root */
export type Query_RootConn_By_PkArgs = {
  id: Scalars['Int'];
  workspace_id: Scalars['Int'];
};


/** query root */
export type Query_RootQstatArgs = {
  distinct_on?: Maybe<Array<Qstat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Qstat_Order_By>>;
  where?: Maybe<Qstat_Bool_Exp>;
};


/** query root */
export type Query_RootQstat_AggregateArgs = {
  distinct_on?: Maybe<Array<Qstat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Qstat_Order_By>>;
  where?: Maybe<Qstat_Bool_Exp>;
};


/** query root */
export type Query_RootQstat_By_PkArgs = {
  id: Scalars['Int'];
  subscription_id: Scalars['Int'];
};


/** query root */
export type Query_RootSubArgs = {
  distinct_on?: Maybe<Array<Sub_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sub_Order_By>>;
  where?: Maybe<Sub_Bool_Exp>;
};


/** query root */
export type Query_RootSub_AggregateArgs = {
  distinct_on?: Maybe<Array<Sub_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sub_Order_By>>;
  where?: Maybe<Sub_Bool_Exp>;
};


/** query root */
export type Query_RootSub_By_PkArgs = {
  id: Scalars['bigint'];
  workspace_id: Scalars['Int'];
};


/** query root */
export type Query_RootUsrArgs = {
  distinct_on?: Maybe<Array<Usr_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Usr_Order_By>>;
  where?: Maybe<Usr_Bool_Exp>;
};


/** query root */
export type Query_RootUsr_AggregateArgs = {
  distinct_on?: Maybe<Array<Usr_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Usr_Order_By>>;
  where?: Maybe<Usr_Bool_Exp>;
};


/** query root */
export type Query_RootUsr_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootUstatArgs = {
  distinct_on?: Maybe<Array<Ustat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ustat_Order_By>>;
  where?: Maybe<Ustat_Bool_Exp>;
};


/** query root */
export type Query_RootUstat_AggregateArgs = {
  distinct_on?: Maybe<Array<Ustat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ustat_Order_By>>;
  where?: Maybe<Ustat_Bool_Exp>;
};


/** query root */
export type Query_RootUstat_By_PkArgs = {
  id: Scalars['Int'];
  user_id: Scalars['Int'];
};


/** query root */
export type Query_RootWorkspaceArgs = {
  distinct_on?: Maybe<Array<Workspace_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Workspace_Order_By>>;
  where?: Maybe<Workspace_Bool_Exp>;
};


/** query root */
export type Query_RootWorkspace_AggregateArgs = {
  distinct_on?: Maybe<Array<Workspace_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Workspace_Order_By>>;
  where?: Maybe<Workspace_Bool_Exp>;
};


/** query root */
export type Query_RootWorkspace_By_PkArgs = {
  id: Scalars['Int'];
  user_id: Scalars['Int'];
};


/** query root */
export type Query_RootWstatArgs = {
  distinct_on?: Maybe<Array<Wstat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Wstat_Order_By>>;
  where?: Maybe<Wstat_Bool_Exp>;
};


/** query root */
export type Query_RootWstat_AggregateArgs = {
  distinct_on?: Maybe<Array<Wstat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Wstat_Order_By>>;
  where?: Maybe<Wstat_Bool_Exp>;
};


/** query root */
export type Query_RootWstat_By_PkArgs = {
  id: Scalars['Int'];
  workspace_id: Scalars['Int'];
};

/** select columns of table "auth" */
export enum Auth_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Roles = 'roles',
  /** column name */
  Status = 'status',
  /** column name */
  Type = 'type',
  /** column name */
  Value = 'value',
  /** column name */
  WorkspaceId = 'workspace_id'
}

/** ordering options when selecting data from "auth" */
export type Auth_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  roles?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  subs_aggregate?: Maybe<Sub_Aggregate_Order_By>;
  type?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
  workspace?: Maybe<Workspace_Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** order by aggregate values of table "sub" */
export type Sub_Aggregate_Order_By = {
  avg?: Maybe<Sub_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Sub_Max_Order_By>;
  min?: Maybe<Sub_Min_Order_By>;
  stddev?: Maybe<Sub_Stddev_Order_By>;
  stddev_pop?: Maybe<Sub_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Sub_Stddev_Samp_Order_By>;
  sum?: Maybe<Sub_Sum_Order_By>;
  var_pop?: Maybe<Sub_Var_Pop_Order_By>;
  var_samp?: Maybe<Sub_Var_Samp_Order_By>;
  variance?: Maybe<Sub_Variance_Order_By>;
};

/** order by avg() on columns of table "sub" */
export type Sub_Avg_Order_By = {
  auth_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by max() on columns of table "sub" */
export type Sub_Max_Order_By = {
  annotation?: Maybe<Order_By>;
  auth_id?: Maybe<Order_By>;
  channel?: Maybe<Order_By>;
  channel_type?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  json_path?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  valid_until?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by min() on columns of table "sub" */
export type Sub_Min_Order_By = {
  annotation?: Maybe<Order_By>;
  auth_id?: Maybe<Order_By>;
  channel?: Maybe<Order_By>;
  channel_type?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  json_path?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  valid_until?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by stddev() on columns of table "sub" */
export type Sub_Stddev_Order_By = {
  auth_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "sub" */
export type Sub_Stddev_Pop_Order_By = {
  auth_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "sub" */
export type Sub_Stddev_Samp_Order_By = {
  auth_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "sub" */
export type Sub_Sum_Order_By = {
  auth_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by var_pop() on columns of table "sub" */
export type Sub_Var_Pop_Order_By = {
  auth_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "sub" */
export type Sub_Var_Samp_Order_By = {
  auth_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "sub" */
export type Sub_Variance_Order_By = {
  auth_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** ordering options when selecting data from "workspace" */
export type Workspace_Order_By = {
  auths_aggregate?: Maybe<Auth_Aggregate_Order_By>;
  color?: Maybe<Order_By>;
  conns_aggregate?: Maybe<Conn_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  subs_aggregate?: Maybe<Sub_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  usr?: Maybe<Usr_Order_By>;
  wstats_aggregate?: Maybe<Wstat_Aggregate_Order_By>;
};

/** order by aggregate values of table "auth" */
export type Auth_Aggregate_Order_By = {
  avg?: Maybe<Auth_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Auth_Max_Order_By>;
  min?: Maybe<Auth_Min_Order_By>;
  stddev?: Maybe<Auth_Stddev_Order_By>;
  stddev_pop?: Maybe<Auth_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Auth_Stddev_Samp_Order_By>;
  sum?: Maybe<Auth_Sum_Order_By>;
  var_pop?: Maybe<Auth_Var_Pop_Order_By>;
  var_samp?: Maybe<Auth_Var_Samp_Order_By>;
  variance?: Maybe<Auth_Variance_Order_By>;
};

/** order by avg() on columns of table "auth" */
export type Auth_Avg_Order_By = {
  id?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by max() on columns of table "auth" */
export type Auth_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by min() on columns of table "auth" */
export type Auth_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by stddev() on columns of table "auth" */
export type Auth_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "auth" */
export type Auth_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "auth" */
export type Auth_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "auth" */
export type Auth_Sum_Order_By = {
  id?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by var_pop() on columns of table "auth" */
export type Auth_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "auth" */
export type Auth_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "auth" */
export type Auth_Variance_Order_By = {
  id?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by aggregate values of table "conn" */
export type Conn_Aggregate_Order_By = {
  avg?: Maybe<Conn_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Conn_Max_Order_By>;
  min?: Maybe<Conn_Min_Order_By>;
  stddev?: Maybe<Conn_Stddev_Order_By>;
  stddev_pop?: Maybe<Conn_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Conn_Stddev_Samp_Order_By>;
  sum?: Maybe<Conn_Sum_Order_By>;
  var_pop?: Maybe<Conn_Var_Pop_Order_By>;
  var_samp?: Maybe<Conn_Var_Samp_Order_By>;
  variance?: Maybe<Conn_Variance_Order_By>;
};

/** order by avg() on columns of table "conn" */
export type Conn_Avg_Order_By = {
  id?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by max() on columns of table "conn" */
export type Conn_Max_Order_By = {
  client_id?: Maybe<Order_By>;
  connected_on?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_ping?: Maybe<Order_By>;
  sdk_version?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by min() on columns of table "conn" */
export type Conn_Min_Order_By = {
  client_id?: Maybe<Order_By>;
  connected_on?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_ping?: Maybe<Order_By>;
  sdk_version?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by stddev() on columns of table "conn" */
export type Conn_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "conn" */
export type Conn_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "conn" */
export type Conn_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "conn" */
export type Conn_Sum_Order_By = {
  id?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by var_pop() on columns of table "conn" */
export type Conn_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "conn" */
export type Conn_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "conn" */
export type Conn_Variance_Order_By = {
  id?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** ordering options when selecting data from "usr" */
export type Usr_Order_By = {
  admin?: Maybe<Order_By>;
  authentication_provider?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  enabled?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  invited_by?: Maybe<Order_By>;
  login_at?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
  profile_picture?: Maybe<Order_By>;
  provider_data?: Maybe<Order_By>;
  provider_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_login_history?: Maybe<Order_By>;
  user_timezone?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
  usr?: Maybe<Usr_Order_By>;
  usrs_aggregate?: Maybe<Usr_Aggregate_Order_By>;
  ustats_aggregate?: Maybe<Ustat_Aggregate_Order_By>;
  workspaces_aggregate?: Maybe<Workspace_Aggregate_Order_By>;
};

/** order by aggregate values of table "usr" */
export type Usr_Aggregate_Order_By = {
  avg?: Maybe<Usr_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Usr_Max_Order_By>;
  min?: Maybe<Usr_Min_Order_By>;
  stddev?: Maybe<Usr_Stddev_Order_By>;
  stddev_pop?: Maybe<Usr_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Usr_Stddev_Samp_Order_By>;
  sum?: Maybe<Usr_Sum_Order_By>;
  var_pop?: Maybe<Usr_Var_Pop_Order_By>;
  var_samp?: Maybe<Usr_Var_Samp_Order_By>;
  variance?: Maybe<Usr_Variance_Order_By>;
};

/** order by avg() on columns of table "usr" */
export type Usr_Avg_Order_By = {
  id?: Maybe<Order_By>;
  invited_by?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
};

/** order by max() on columns of table "usr" */
export type Usr_Max_Order_By = {
  authentication_provider?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  invited_by?: Maybe<Order_By>;
  login_at?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
  profile_picture?: Maybe<Order_By>;
  provider_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_timezone?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** order by min() on columns of table "usr" */
export type Usr_Min_Order_By = {
  authentication_provider?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  invited_by?: Maybe<Order_By>;
  login_at?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
  profile_picture?: Maybe<Order_By>;
  provider_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_timezone?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** order by stddev() on columns of table "usr" */
export type Usr_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  invited_by?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "usr" */
export type Usr_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  invited_by?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "usr" */
export type Usr_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  invited_by?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
};

/** order by sum() on columns of table "usr" */
export type Usr_Sum_Order_By = {
  id?: Maybe<Order_By>;
  invited_by?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
};

/** order by var_pop() on columns of table "usr" */
export type Usr_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  invited_by?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "usr" */
export type Usr_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  invited_by?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
};

/** order by variance() on columns of table "usr" */
export type Usr_Variance_Order_By = {
  id?: Maybe<Order_By>;
  invited_by?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
};

/** order by aggregate values of table "ustat" */
export type Ustat_Aggregate_Order_By = {
  avg?: Maybe<Ustat_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Ustat_Max_Order_By>;
  min?: Maybe<Ustat_Min_Order_By>;
  stddev?: Maybe<Ustat_Stddev_Order_By>;
  stddev_pop?: Maybe<Ustat_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Ustat_Stddev_Samp_Order_By>;
  sum?: Maybe<Ustat_Sum_Order_By>;
  var_pop?: Maybe<Ustat_Var_Pop_Order_By>;
  var_samp?: Maybe<Ustat_Var_Samp_Order_By>;
  variance?: Maybe<Ustat_Variance_Order_By>;
};

/** order by avg() on columns of table "ustat" */
export type Ustat_Avg_Order_By = {
  average_msg_size?: Maybe<Order_By>;
  backlog_size?: Maybe<Order_By>;
  bytes_in_counter?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message_backlog?: Maybe<Order_By>;
  msg_in_counter?: Maybe<Order_By>;
  msg_rate_in?: Maybe<Order_By>;
  msg_rate_out?: Maybe<Order_By>;
  msg_throughput_in?: Maybe<Order_By>;
  msg_throughput_out?: Maybe<Order_By>;
  scount?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  total_messages?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  wcount?: Maybe<Order_By>;
};

/** order by max() on columns of table "ustat" */
export type Ustat_Max_Order_By = {
  average_msg_size?: Maybe<Order_By>;
  backlog_size?: Maybe<Order_By>;
  bytes_in_counter?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message_backlog?: Maybe<Order_By>;
  msg_in_counter?: Maybe<Order_By>;
  msg_rate_in?: Maybe<Order_By>;
  msg_rate_out?: Maybe<Order_By>;
  msg_throughput_in?: Maybe<Order_By>;
  msg_throughput_out?: Maybe<Order_By>;
  scount?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  total_messages?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  wcount?: Maybe<Order_By>;
};

/** order by min() on columns of table "ustat" */
export type Ustat_Min_Order_By = {
  average_msg_size?: Maybe<Order_By>;
  backlog_size?: Maybe<Order_By>;
  bytes_in_counter?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message_backlog?: Maybe<Order_By>;
  msg_in_counter?: Maybe<Order_By>;
  msg_rate_in?: Maybe<Order_By>;
  msg_rate_out?: Maybe<Order_By>;
  msg_throughput_in?: Maybe<Order_By>;
  msg_throughput_out?: Maybe<Order_By>;
  scount?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  total_messages?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  wcount?: Maybe<Order_By>;
};

/** order by stddev() on columns of table "ustat" */
export type Ustat_Stddev_Order_By = {
  average_msg_size?: Maybe<Order_By>;
  backlog_size?: Maybe<Order_By>;
  bytes_in_counter?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message_backlog?: Maybe<Order_By>;
  msg_in_counter?: Maybe<Order_By>;
  msg_rate_in?: Maybe<Order_By>;
  msg_rate_out?: Maybe<Order_By>;
  msg_throughput_in?: Maybe<Order_By>;
  msg_throughput_out?: Maybe<Order_By>;
  scount?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  total_messages?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  wcount?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "ustat" */
export type Ustat_Stddev_Pop_Order_By = {
  average_msg_size?: Maybe<Order_By>;
  backlog_size?: Maybe<Order_By>;
  bytes_in_counter?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message_backlog?: Maybe<Order_By>;
  msg_in_counter?: Maybe<Order_By>;
  msg_rate_in?: Maybe<Order_By>;
  msg_rate_out?: Maybe<Order_By>;
  msg_throughput_in?: Maybe<Order_By>;
  msg_throughput_out?: Maybe<Order_By>;
  scount?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  total_messages?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  wcount?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "ustat" */
export type Ustat_Stddev_Samp_Order_By = {
  average_msg_size?: Maybe<Order_By>;
  backlog_size?: Maybe<Order_By>;
  bytes_in_counter?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message_backlog?: Maybe<Order_By>;
  msg_in_counter?: Maybe<Order_By>;
  msg_rate_in?: Maybe<Order_By>;
  msg_rate_out?: Maybe<Order_By>;
  msg_throughput_in?: Maybe<Order_By>;
  msg_throughput_out?: Maybe<Order_By>;
  scount?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  total_messages?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  wcount?: Maybe<Order_By>;
};

/** order by sum() on columns of table "ustat" */
export type Ustat_Sum_Order_By = {
  average_msg_size?: Maybe<Order_By>;
  backlog_size?: Maybe<Order_By>;
  bytes_in_counter?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message_backlog?: Maybe<Order_By>;
  msg_in_counter?: Maybe<Order_By>;
  msg_rate_in?: Maybe<Order_By>;
  msg_rate_out?: Maybe<Order_By>;
  msg_throughput_in?: Maybe<Order_By>;
  msg_throughput_out?: Maybe<Order_By>;
  scount?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  total_messages?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  wcount?: Maybe<Order_By>;
};

/** order by var_pop() on columns of table "ustat" */
export type Ustat_Var_Pop_Order_By = {
  average_msg_size?: Maybe<Order_By>;
  backlog_size?: Maybe<Order_By>;
  bytes_in_counter?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message_backlog?: Maybe<Order_By>;
  msg_in_counter?: Maybe<Order_By>;
  msg_rate_in?: Maybe<Order_By>;
  msg_rate_out?: Maybe<Order_By>;
  msg_throughput_in?: Maybe<Order_By>;
  msg_throughput_out?: Maybe<Order_By>;
  scount?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  total_messages?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  wcount?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "ustat" */
export type Ustat_Var_Samp_Order_By = {
  average_msg_size?: Maybe<Order_By>;
  backlog_size?: Maybe<Order_By>;
  bytes_in_counter?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message_backlog?: Maybe<Order_By>;
  msg_in_counter?: Maybe<Order_By>;
  msg_rate_in?: Maybe<Order_By>;
  msg_rate_out?: Maybe<Order_By>;
  msg_throughput_in?: Maybe<Order_By>;
  msg_throughput_out?: Maybe<Order_By>;
  scount?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  total_messages?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  wcount?: Maybe<Order_By>;
};

/** order by variance() on columns of table "ustat" */
export type Ustat_Variance_Order_By = {
  average_msg_size?: Maybe<Order_By>;
  backlog_size?: Maybe<Order_By>;
  bytes_in_counter?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message_backlog?: Maybe<Order_By>;
  msg_in_counter?: Maybe<Order_By>;
  msg_rate_in?: Maybe<Order_By>;
  msg_rate_out?: Maybe<Order_By>;
  msg_throughput_in?: Maybe<Order_By>;
  msg_throughput_out?: Maybe<Order_By>;
  scount?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  total_messages?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  wcount?: Maybe<Order_By>;
};

/** order by aggregate values of table "workspace" */
export type Workspace_Aggregate_Order_By = {
  avg?: Maybe<Workspace_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Workspace_Max_Order_By>;
  min?: Maybe<Workspace_Min_Order_By>;
  stddev?: Maybe<Workspace_Stddev_Order_By>;
  stddev_pop?: Maybe<Workspace_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Workspace_Stddev_Samp_Order_By>;
  sum?: Maybe<Workspace_Sum_Order_By>;
  var_pop?: Maybe<Workspace_Var_Pop_Order_By>;
  var_samp?: Maybe<Workspace_Var_Samp_Order_By>;
  variance?: Maybe<Workspace_Variance_Order_By>;
};

/** order by avg() on columns of table "workspace" */
export type Workspace_Avg_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** order by max() on columns of table "workspace" */
export type Workspace_Max_Order_By = {
  color?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** order by min() on columns of table "workspace" */
export type Workspace_Min_Order_By = {
  color?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** order by stddev() on columns of table "workspace" */
export type Workspace_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "workspace" */
export type Workspace_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "workspace" */
export type Workspace_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "workspace" */
export type Workspace_Sum_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** order by var_pop() on columns of table "workspace" */
export type Workspace_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "workspace" */
export type Workspace_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "workspace" */
export type Workspace_Variance_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** order by aggregate values of table "wstat" */
export type Wstat_Aggregate_Order_By = {
  avg?: Maybe<Wstat_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Wstat_Max_Order_By>;
  min?: Maybe<Wstat_Min_Order_By>;
  stddev?: Maybe<Wstat_Stddev_Order_By>;
  stddev_pop?: Maybe<Wstat_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Wstat_Stddev_Samp_Order_By>;
  sum?: Maybe<Wstat_Sum_Order_By>;
  var_pop?: Maybe<Wstat_Var_Pop_Order_By>;
  var_samp?: Maybe<Wstat_Var_Samp_Order_By>;
  variance?: Maybe<Wstat_Variance_Order_By>;
};

/** order by avg() on columns of table "wstat" */
export type Wstat_Avg_Order_By = {
  average_msg_size?: Maybe<Order_By>;
  backlog_size?: Maybe<Order_By>;
  bytes_in_counter?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message_backlog?: Maybe<Order_By>;
  msg_in_counter?: Maybe<Order_By>;
  msg_rate_in?: Maybe<Order_By>;
  msg_rate_out?: Maybe<Order_By>;
  msg_throughput_in?: Maybe<Order_By>;
  msg_throughput_out?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  total_messages?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by max() on columns of table "wstat" */
export type Wstat_Max_Order_By = {
  average_msg_size?: Maybe<Order_By>;
  backlog_size?: Maybe<Order_By>;
  bytes_in_counter?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message_backlog?: Maybe<Order_By>;
  msg_in_counter?: Maybe<Order_By>;
  msg_rate_in?: Maybe<Order_By>;
  msg_rate_out?: Maybe<Order_By>;
  msg_throughput_in?: Maybe<Order_By>;
  msg_throughput_out?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  total_messages?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by min() on columns of table "wstat" */
export type Wstat_Min_Order_By = {
  average_msg_size?: Maybe<Order_By>;
  backlog_size?: Maybe<Order_By>;
  bytes_in_counter?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message_backlog?: Maybe<Order_By>;
  msg_in_counter?: Maybe<Order_By>;
  msg_rate_in?: Maybe<Order_By>;
  msg_rate_out?: Maybe<Order_By>;
  msg_throughput_in?: Maybe<Order_By>;
  msg_throughput_out?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  total_messages?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by stddev() on columns of table "wstat" */
export type Wstat_Stddev_Order_By = {
  average_msg_size?: Maybe<Order_By>;
  backlog_size?: Maybe<Order_By>;
  bytes_in_counter?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message_backlog?: Maybe<Order_By>;
  msg_in_counter?: Maybe<Order_By>;
  msg_rate_in?: Maybe<Order_By>;
  msg_rate_out?: Maybe<Order_By>;
  msg_throughput_in?: Maybe<Order_By>;
  msg_throughput_out?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  total_messages?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "wstat" */
export type Wstat_Stddev_Pop_Order_By = {
  average_msg_size?: Maybe<Order_By>;
  backlog_size?: Maybe<Order_By>;
  bytes_in_counter?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message_backlog?: Maybe<Order_By>;
  msg_in_counter?: Maybe<Order_By>;
  msg_rate_in?: Maybe<Order_By>;
  msg_rate_out?: Maybe<Order_By>;
  msg_throughput_in?: Maybe<Order_By>;
  msg_throughput_out?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  total_messages?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "wstat" */
export type Wstat_Stddev_Samp_Order_By = {
  average_msg_size?: Maybe<Order_By>;
  backlog_size?: Maybe<Order_By>;
  bytes_in_counter?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message_backlog?: Maybe<Order_By>;
  msg_in_counter?: Maybe<Order_By>;
  msg_rate_in?: Maybe<Order_By>;
  msg_rate_out?: Maybe<Order_By>;
  msg_throughput_in?: Maybe<Order_By>;
  msg_throughput_out?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  total_messages?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "wstat" */
export type Wstat_Sum_Order_By = {
  average_msg_size?: Maybe<Order_By>;
  backlog_size?: Maybe<Order_By>;
  bytes_in_counter?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message_backlog?: Maybe<Order_By>;
  msg_in_counter?: Maybe<Order_By>;
  msg_rate_in?: Maybe<Order_By>;
  msg_rate_out?: Maybe<Order_By>;
  msg_throughput_in?: Maybe<Order_By>;
  msg_throughput_out?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  total_messages?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by var_pop() on columns of table "wstat" */
export type Wstat_Var_Pop_Order_By = {
  average_msg_size?: Maybe<Order_By>;
  backlog_size?: Maybe<Order_By>;
  bytes_in_counter?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message_backlog?: Maybe<Order_By>;
  msg_in_counter?: Maybe<Order_By>;
  msg_rate_in?: Maybe<Order_By>;
  msg_rate_out?: Maybe<Order_By>;
  msg_throughput_in?: Maybe<Order_By>;
  msg_throughput_out?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  total_messages?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "wstat" */
export type Wstat_Var_Samp_Order_By = {
  average_msg_size?: Maybe<Order_By>;
  backlog_size?: Maybe<Order_By>;
  bytes_in_counter?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message_backlog?: Maybe<Order_By>;
  msg_in_counter?: Maybe<Order_By>;
  msg_rate_in?: Maybe<Order_By>;
  msg_rate_out?: Maybe<Order_By>;
  msg_throughput_in?: Maybe<Order_By>;
  msg_throughput_out?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  total_messages?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "wstat" */
export type Wstat_Variance_Order_By = {
  average_msg_size?: Maybe<Order_By>;
  backlog_size?: Maybe<Order_By>;
  bytes_in_counter?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message_backlog?: Maybe<Order_By>;
  msg_in_counter?: Maybe<Order_By>;
  msg_rate_in?: Maybe<Order_By>;
  msg_rate_out?: Maybe<Order_By>;
  msg_throughput_in?: Maybe<Order_By>;
  msg_throughput_out?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  total_messages?: Maybe<Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "auth". All fields are combined with a logical 'AND'. */
export type Auth_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Auth_Bool_Exp>>>;
  _not?: Maybe<Auth_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Auth_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  roles?: Maybe<Jsonb_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  subs?: Maybe<Sub_Bool_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  value?: Maybe<Uuid_Comparison_Exp>;
  workspace?: Maybe<Workspace_Bool_Exp>;
  workspace_id?: Maybe<Int_Comparison_Exp>;
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};


/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};


/** Boolean expression to filter rows from the table "sub". All fields are combined with a logical 'AND'. */
export type Sub_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Sub_Bool_Exp>>>;
  _not?: Maybe<Sub_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Sub_Bool_Exp>>>;
  annotation?: Maybe<String_Comparison_Exp>;
  auth?: Maybe<Auth_Bool_Exp>;
  auth_id?: Maybe<Int_Comparison_Exp>;
  backlogs?: Maybe<Backlog_Bool_Exp>;
  channel?: Maybe<String_Comparison_Exp>;
  channel_type?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  geo?: Maybe<Geography_Comparison_Exp>;
  geo_radius?: Maybe<Geography_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  json_path?: Maybe<String_Comparison_Exp>;
  original_parameters?: Maybe<Jsonb_Comparison_Exp>;
  persistent?: Maybe<Boolean_Comparison_Exp>;
  qstats?: Maybe<Qstat_Bool_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  valid_until?: Maybe<Timestamptz_Comparison_Exp>;
  workspace?: Maybe<Workspace_Bool_Exp>;
  workspace_id?: Maybe<Int_Comparison_Exp>;
};

/** Boolean expression to filter rows from the table "backlog". All fields are combined with a logical 'AND'. */
export type Backlog_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Backlog_Bool_Exp>>>;
  _not?: Maybe<Backlog_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Backlog_Bool_Exp>>>;
  broker_name?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  cursor_details?: Maybe<Jsonb_Comparison_Exp>;
  data_ledger_details?: Maybe<Jsonb_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  message_backlog?: Maybe<Int_Comparison_Exp>;
  stat_generated_at?: Maybe<Timestamptz_Comparison_Exp>;
  storage_size?: Maybe<Int_Comparison_Exp>;
  sub?: Maybe<Sub_Bool_Exp>;
  subscription_id?: Maybe<Int_Comparison_Exp>;
  topic_name?: Maybe<String_Comparison_Exp>;
  total_messages?: Maybe<Int_Comparison_Exp>;
};

/** expression to compare columns of type geography. All fields are combined with logical 'AND'. */
export type Geography_Comparison_Exp = {
  _cast?: Maybe<Geography_Cast_Exp>;
  _eq?: Maybe<Scalars['geography']>;
  _gt?: Maybe<Scalars['geography']>;
  _gte?: Maybe<Scalars['geography']>;
  _in?: Maybe<Array<Scalars['geography']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['geography']>;
  _lte?: Maybe<Scalars['geography']>;
  _neq?: Maybe<Scalars['geography']>;
  _nin?: Maybe<Array<Scalars['geography']>>;
  /** is the column within a distance from a geography value */
  _st_d_within?: Maybe<St_D_Within_Geography_Input>;
  /** does the column spatially intersect the given geography value */
  _st_intersects?: Maybe<Scalars['geography']>;
};

/** Expression to compare the result of casting a column of type geography. Multiple cast targets are combined with logical 'AND'. */
export type Geography_Cast_Exp = {
  geometry?: Maybe<Geometry_Comparison_Exp>;
};

/** expression to compare columns of type geometry. All fields are combined with logical 'AND'. */
export type Geometry_Comparison_Exp = {
  _cast?: Maybe<Geometry_Cast_Exp>;
  _eq?: Maybe<Scalars['geometry']>;
  _gt?: Maybe<Scalars['geometry']>;
  _gte?: Maybe<Scalars['geometry']>;
  _in?: Maybe<Array<Scalars['geometry']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['geometry']>;
  _lte?: Maybe<Scalars['geometry']>;
  _neq?: Maybe<Scalars['geometry']>;
  _nin?: Maybe<Array<Scalars['geometry']>>;
  /** does the column contain the given geometry value */
  _st_contains?: Maybe<Scalars['geometry']>;
  /** does the column crosses the given geometry value */
  _st_crosses?: Maybe<Scalars['geometry']>;
  /** is the column within a distance from a geometry value */
  _st_d_within?: Maybe<St_D_Within_Input>;
  /** is the column equal to given geometry value. Directionality is ignored */
  _st_equals?: Maybe<Scalars['geometry']>;
  /** does the column spatially intersect the given geometry value */
  _st_intersects?: Maybe<Scalars['geometry']>;
  /** does the column 'spatially overlap' (intersect but not completely contain) the given geometry value */
  _st_overlaps?: Maybe<Scalars['geometry']>;
  /** does the column have atleast one point in common with the given geometry value */
  _st_touches?: Maybe<Scalars['geometry']>;
  /** is the column contained in the given geometry value */
  _st_within?: Maybe<Scalars['geometry']>;
};

/** Expression to compare the result of casting a column of type geometry. Multiple cast targets are combined with logical 'AND'. */
export type Geometry_Cast_Exp = {
  geography?: Maybe<Geography_Comparison_Exp>;
};


export type St_D_Within_Input = {
  distance: Scalars['Float'];
  from: Scalars['geometry'];
};


export type St_D_Within_Geography_Input = {
  distance: Scalars['Float'];
  from: Scalars['geography'];
  use_spheroid?: Maybe<Scalars['Boolean']>;
};

/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};


/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to filter rows from the table "qstat". All fields are combined with a logical 'AND'. */
export type Qstat_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Qstat_Bool_Exp>>>;
  _not?: Maybe<Qstat_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Qstat_Bool_Exp>>>;
  average_msg_size?: Maybe<Int_Comparison_Exp>;
  backlog_size?: Maybe<Int_Comparison_Exp>;
  bytes_in_counter?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deduplication_status?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  msg_in_counter?: Maybe<Int_Comparison_Exp>;
  msg_rate_in?: Maybe<Int_Comparison_Exp>;
  msg_rate_out?: Maybe<Int_Comparison_Exp>;
  msg_throughput_in?: Maybe<Int_Comparison_Exp>;
  msg_throughput_out?: Maybe<Int_Comparison_Exp>;
  publishers?: Maybe<Jsonb_Comparison_Exp>;
  replication?: Maybe<Jsonb_Comparison_Exp>;
  storage_size?: Maybe<Int_Comparison_Exp>;
  sub?: Maybe<Sub_Bool_Exp>;
  subscription_id?: Maybe<Int_Comparison_Exp>;
  subscriptions?: Maybe<Jsonb_Comparison_Exp>;
};

/** Boolean expression to filter rows from the table "workspace". All fields are combined with a logical 'AND'. */
export type Workspace_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Workspace_Bool_Exp>>>;
  _not?: Maybe<Workspace_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Workspace_Bool_Exp>>>;
  auths?: Maybe<Auth_Bool_Exp>;
  color?: Maybe<String_Comparison_Exp>;
  conns?: Maybe<Conn_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  subs?: Maybe<Sub_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
  usr?: Maybe<Usr_Bool_Exp>;
  wstats?: Maybe<Wstat_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "conn". All fields are combined with a logical 'AND'. */
export type Conn_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Conn_Bool_Exp>>>;
  _not?: Maybe<Conn_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Conn_Bool_Exp>>>;
  client_id?: Maybe<String_Comparison_Exp>;
  connected_on?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  last_ping?: Maybe<Timestamptz_Comparison_Exp>;
  sdk_version?: Maybe<String_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  uid?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  workspace?: Maybe<Workspace_Bool_Exp>;
  workspace_id?: Maybe<Int_Comparison_Exp>;
};

/** Boolean expression to filter rows from the table "usr". All fields are combined with a logical 'AND'. */
export type Usr_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Usr_Bool_Exp>>>;
  _not?: Maybe<Usr_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Usr_Bool_Exp>>>;
  admin?: Maybe<Boolean_Comparison_Exp>;
  authentication_provider?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  enabled?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  invited_by?: Maybe<Int_Comparison_Exp>;
  login_at?: Maybe<Timestamptz_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  priority?: Maybe<Int_Comparison_Exp>;
  profile_picture?: Maybe<String_Comparison_Exp>;
  provider_data?: Maybe<Jsonb_Comparison_Exp>;
  provider_id?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_login_history?: Maybe<Jsonb_Comparison_Exp>;
  user_timezone?: Maybe<String_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
  usr?: Maybe<Usr_Bool_Exp>;
  usrs?: Maybe<Usr_Bool_Exp>;
  ustats?: Maybe<Ustat_Bool_Exp>;
  workspaces?: Maybe<Workspace_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "ustat". All fields are combined with a logical 'AND'. */
export type Ustat_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Ustat_Bool_Exp>>>;
  _not?: Maybe<Ustat_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Ustat_Bool_Exp>>>;
  average_msg_size?: Maybe<Int_Comparison_Exp>;
  backlog_size?: Maybe<Int_Comparison_Exp>;
  bytes_in_counter?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  message_backlog?: Maybe<Int_Comparison_Exp>;
  msg_in_counter?: Maybe<Int_Comparison_Exp>;
  msg_rate_in?: Maybe<Int_Comparison_Exp>;
  msg_rate_out?: Maybe<Int_Comparison_Exp>;
  msg_throughput_in?: Maybe<Int_Comparison_Exp>;
  msg_throughput_out?: Maybe<Int_Comparison_Exp>;
  scount?: Maybe<Int_Comparison_Exp>;
  storage_size?: Maybe<Int_Comparison_Exp>;
  total_messages?: Maybe<Int_Comparison_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
  usr?: Maybe<Usr_Bool_Exp>;
  wcount?: Maybe<Int_Comparison_Exp>;
};

/** Boolean expression to filter rows from the table "wstat". All fields are combined with a logical 'AND'. */
export type Wstat_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Wstat_Bool_Exp>>>;
  _not?: Maybe<Wstat_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Wstat_Bool_Exp>>>;
  average_msg_size?: Maybe<Int_Comparison_Exp>;
  backlog_size?: Maybe<Int_Comparison_Exp>;
  bytes_in_counter?: Maybe<Int_Comparison_Exp>;
  count?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  message_backlog?: Maybe<Int_Comparison_Exp>;
  msg_in_counter?: Maybe<Int_Comparison_Exp>;
  msg_rate_in?: Maybe<Int_Comparison_Exp>;
  msg_rate_out?: Maybe<Int_Comparison_Exp>;
  msg_throughput_in?: Maybe<Int_Comparison_Exp>;
  msg_throughput_out?: Maybe<Int_Comparison_Exp>;
  storage_size?: Maybe<Int_Comparison_Exp>;
  total_messages?: Maybe<Int_Comparison_Exp>;
  workspace?: Maybe<Workspace_Bool_Exp>;
  workspace_id?: Maybe<Int_Comparison_Exp>;
};

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};


/** columns and relationships of "auth" */
export type Auth = {
   __typename?: 'auth';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  roles: Scalars['jsonb'];
  status: Scalars['String'];
  /** An array relationship */
  subs: Array<Sub>;
  /** An aggregated array relationship */
  subs_aggregate: Sub_Aggregate;
  type: Scalars['String'];
  value: Scalars['uuid'];
  /** An object relationship */
  workspace: Workspace;
  workspace_id: Scalars['Int'];
};


/** columns and relationships of "auth" */
export type AuthRolesArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "auth" */
export type AuthSubsArgs = {
  distinct_on?: Maybe<Array<Sub_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sub_Order_By>>;
  where?: Maybe<Sub_Bool_Exp>;
};


/** columns and relationships of "auth" */
export type AuthSubs_AggregateArgs = {
  distinct_on?: Maybe<Array<Sub_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sub_Order_By>>;
  where?: Maybe<Sub_Bool_Exp>;
};

/** select columns of table "sub" */
export enum Sub_Select_Column {
  /** column name */
  Annotation = 'annotation',
  /** column name */
  AuthId = 'auth_id',
  /** column name */
  Channel = 'channel',
  /** column name */
  ChannelType = 'channel_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Geo = 'geo',
  /** column name */
  GeoRadius = 'geo_radius',
  /** column name */
  Id = 'id',
  /** column name */
  JsonPath = 'json_path',
  /** column name */
  OriginalParameters = 'original_parameters',
  /** column name */
  Persistent = 'persistent',
  /** column name */
  Status = 'status',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  ValidUntil = 'valid_until',
  /** column name */
  WorkspaceId = 'workspace_id'
}

/** ordering options when selecting data from "sub" */
export type Sub_Order_By = {
  annotation?: Maybe<Order_By>;
  auth?: Maybe<Auth_Order_By>;
  auth_id?: Maybe<Order_By>;
  backlogs_aggregate?: Maybe<Backlog_Aggregate_Order_By>;
  channel?: Maybe<Order_By>;
  channel_type?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  geo?: Maybe<Order_By>;
  geo_radius?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  json_path?: Maybe<Order_By>;
  original_parameters?: Maybe<Order_By>;
  persistent?: Maybe<Order_By>;
  qstats_aggregate?: Maybe<Qstat_Aggregate_Order_By>;
  status?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  valid_until?: Maybe<Order_By>;
  workspace?: Maybe<Workspace_Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** order by aggregate values of table "backlog" */
export type Backlog_Aggregate_Order_By = {
  avg?: Maybe<Backlog_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Backlog_Max_Order_By>;
  min?: Maybe<Backlog_Min_Order_By>;
  stddev?: Maybe<Backlog_Stddev_Order_By>;
  stddev_pop?: Maybe<Backlog_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Backlog_Stddev_Samp_Order_By>;
  sum?: Maybe<Backlog_Sum_Order_By>;
  var_pop?: Maybe<Backlog_Var_Pop_Order_By>;
  var_samp?: Maybe<Backlog_Var_Samp_Order_By>;
  variance?: Maybe<Backlog_Variance_Order_By>;
};

/** order by avg() on columns of table "backlog" */
export type Backlog_Avg_Order_By = {
  id?: Maybe<Order_By>;
  message_backlog?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  subscription_id?: Maybe<Order_By>;
  total_messages?: Maybe<Order_By>;
};

/** order by max() on columns of table "backlog" */
export type Backlog_Max_Order_By = {
  broker_name?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message_backlog?: Maybe<Order_By>;
  stat_generated_at?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  subscription_id?: Maybe<Order_By>;
  topic_name?: Maybe<Order_By>;
  total_messages?: Maybe<Order_By>;
};

/** order by min() on columns of table "backlog" */
export type Backlog_Min_Order_By = {
  broker_name?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message_backlog?: Maybe<Order_By>;
  stat_generated_at?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  subscription_id?: Maybe<Order_By>;
  topic_name?: Maybe<Order_By>;
  total_messages?: Maybe<Order_By>;
};

/** order by stddev() on columns of table "backlog" */
export type Backlog_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  message_backlog?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  subscription_id?: Maybe<Order_By>;
  total_messages?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "backlog" */
export type Backlog_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  message_backlog?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  subscription_id?: Maybe<Order_By>;
  total_messages?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "backlog" */
export type Backlog_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  message_backlog?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  subscription_id?: Maybe<Order_By>;
  total_messages?: Maybe<Order_By>;
};

/** order by sum() on columns of table "backlog" */
export type Backlog_Sum_Order_By = {
  id?: Maybe<Order_By>;
  message_backlog?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  subscription_id?: Maybe<Order_By>;
  total_messages?: Maybe<Order_By>;
};

/** order by var_pop() on columns of table "backlog" */
export type Backlog_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  message_backlog?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  subscription_id?: Maybe<Order_By>;
  total_messages?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "backlog" */
export type Backlog_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  message_backlog?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  subscription_id?: Maybe<Order_By>;
  total_messages?: Maybe<Order_By>;
};

/** order by variance() on columns of table "backlog" */
export type Backlog_Variance_Order_By = {
  id?: Maybe<Order_By>;
  message_backlog?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  subscription_id?: Maybe<Order_By>;
  total_messages?: Maybe<Order_By>;
};

/** order by aggregate values of table "qstat" */
export type Qstat_Aggregate_Order_By = {
  avg?: Maybe<Qstat_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Qstat_Max_Order_By>;
  min?: Maybe<Qstat_Min_Order_By>;
  stddev?: Maybe<Qstat_Stddev_Order_By>;
  stddev_pop?: Maybe<Qstat_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Qstat_Stddev_Samp_Order_By>;
  sum?: Maybe<Qstat_Sum_Order_By>;
  var_pop?: Maybe<Qstat_Var_Pop_Order_By>;
  var_samp?: Maybe<Qstat_Var_Samp_Order_By>;
  variance?: Maybe<Qstat_Variance_Order_By>;
};

/** order by avg() on columns of table "qstat" */
export type Qstat_Avg_Order_By = {
  average_msg_size?: Maybe<Order_By>;
  backlog_size?: Maybe<Order_By>;
  bytes_in_counter?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  msg_in_counter?: Maybe<Order_By>;
  msg_rate_in?: Maybe<Order_By>;
  msg_rate_out?: Maybe<Order_By>;
  msg_throughput_in?: Maybe<Order_By>;
  msg_throughput_out?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  subscription_id?: Maybe<Order_By>;
};

/** order by max() on columns of table "qstat" */
export type Qstat_Max_Order_By = {
  average_msg_size?: Maybe<Order_By>;
  backlog_size?: Maybe<Order_By>;
  bytes_in_counter?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deduplication_status?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  msg_in_counter?: Maybe<Order_By>;
  msg_rate_in?: Maybe<Order_By>;
  msg_rate_out?: Maybe<Order_By>;
  msg_throughput_in?: Maybe<Order_By>;
  msg_throughput_out?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  subscription_id?: Maybe<Order_By>;
};

/** order by min() on columns of table "qstat" */
export type Qstat_Min_Order_By = {
  average_msg_size?: Maybe<Order_By>;
  backlog_size?: Maybe<Order_By>;
  bytes_in_counter?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deduplication_status?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  msg_in_counter?: Maybe<Order_By>;
  msg_rate_in?: Maybe<Order_By>;
  msg_rate_out?: Maybe<Order_By>;
  msg_throughput_in?: Maybe<Order_By>;
  msg_throughput_out?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  subscription_id?: Maybe<Order_By>;
};

/** order by stddev() on columns of table "qstat" */
export type Qstat_Stddev_Order_By = {
  average_msg_size?: Maybe<Order_By>;
  backlog_size?: Maybe<Order_By>;
  bytes_in_counter?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  msg_in_counter?: Maybe<Order_By>;
  msg_rate_in?: Maybe<Order_By>;
  msg_rate_out?: Maybe<Order_By>;
  msg_throughput_in?: Maybe<Order_By>;
  msg_throughput_out?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  subscription_id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "qstat" */
export type Qstat_Stddev_Pop_Order_By = {
  average_msg_size?: Maybe<Order_By>;
  backlog_size?: Maybe<Order_By>;
  bytes_in_counter?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  msg_in_counter?: Maybe<Order_By>;
  msg_rate_in?: Maybe<Order_By>;
  msg_rate_out?: Maybe<Order_By>;
  msg_throughput_in?: Maybe<Order_By>;
  msg_throughput_out?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  subscription_id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "qstat" */
export type Qstat_Stddev_Samp_Order_By = {
  average_msg_size?: Maybe<Order_By>;
  backlog_size?: Maybe<Order_By>;
  bytes_in_counter?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  msg_in_counter?: Maybe<Order_By>;
  msg_rate_in?: Maybe<Order_By>;
  msg_rate_out?: Maybe<Order_By>;
  msg_throughput_in?: Maybe<Order_By>;
  msg_throughput_out?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  subscription_id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "qstat" */
export type Qstat_Sum_Order_By = {
  average_msg_size?: Maybe<Order_By>;
  backlog_size?: Maybe<Order_By>;
  bytes_in_counter?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  msg_in_counter?: Maybe<Order_By>;
  msg_rate_in?: Maybe<Order_By>;
  msg_rate_out?: Maybe<Order_By>;
  msg_throughput_in?: Maybe<Order_By>;
  msg_throughput_out?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  subscription_id?: Maybe<Order_By>;
};

/** order by var_pop() on columns of table "qstat" */
export type Qstat_Var_Pop_Order_By = {
  average_msg_size?: Maybe<Order_By>;
  backlog_size?: Maybe<Order_By>;
  bytes_in_counter?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  msg_in_counter?: Maybe<Order_By>;
  msg_rate_in?: Maybe<Order_By>;
  msg_rate_out?: Maybe<Order_By>;
  msg_throughput_in?: Maybe<Order_By>;
  msg_throughput_out?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  subscription_id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "qstat" */
export type Qstat_Var_Samp_Order_By = {
  average_msg_size?: Maybe<Order_By>;
  backlog_size?: Maybe<Order_By>;
  bytes_in_counter?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  msg_in_counter?: Maybe<Order_By>;
  msg_rate_in?: Maybe<Order_By>;
  msg_rate_out?: Maybe<Order_By>;
  msg_throughput_in?: Maybe<Order_By>;
  msg_throughput_out?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  subscription_id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "qstat" */
export type Qstat_Variance_Order_By = {
  average_msg_size?: Maybe<Order_By>;
  backlog_size?: Maybe<Order_By>;
  bytes_in_counter?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  msg_in_counter?: Maybe<Order_By>;
  msg_rate_in?: Maybe<Order_By>;
  msg_rate_out?: Maybe<Order_By>;
  msg_throughput_in?: Maybe<Order_By>;
  msg_throughput_out?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  subscription_id?: Maybe<Order_By>;
};

/** columns and relationships of "sub" */
export type Sub = {
   __typename?: 'sub';
  annotation?: Maybe<Scalars['String']>;
  /** An object relationship */
  auth: Auth;
  auth_id: Scalars['Int'];
  /** An array relationship */
  backlogs: Array<Backlog>;
  /** An aggregated array relationship */
  backlogs_aggregate: Backlog_Aggregate;
  channel?: Maybe<Scalars['String']>;
  channel_type?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  geo?: Maybe<Scalars['geography']>;
  geo_radius?: Maybe<Scalars['geography']>;
  id: Scalars['bigint'];
  json_path?: Maybe<Scalars['String']>;
  original_parameters?: Maybe<Scalars['jsonb']>;
  persistent: Scalars['Boolean'];
  /** An array relationship */
  qstats: Array<Qstat>;
  /** An aggregated array relationship */
  qstats_aggregate: Qstat_Aggregate;
  status: Scalars['String'];
  type: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  valid_until?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  workspace: Workspace;
  workspace_id: Scalars['Int'];
};


/** columns and relationships of "sub" */
export type SubBacklogsArgs = {
  distinct_on?: Maybe<Array<Backlog_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Backlog_Order_By>>;
  where?: Maybe<Backlog_Bool_Exp>;
};


/** columns and relationships of "sub" */
export type SubBacklogs_AggregateArgs = {
  distinct_on?: Maybe<Array<Backlog_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Backlog_Order_By>>;
  where?: Maybe<Backlog_Bool_Exp>;
};


/** columns and relationships of "sub" */
export type SubOriginal_ParametersArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "sub" */
export type SubQstatsArgs = {
  distinct_on?: Maybe<Array<Qstat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Qstat_Order_By>>;
  where?: Maybe<Qstat_Bool_Exp>;
};


/** columns and relationships of "sub" */
export type SubQstats_AggregateArgs = {
  distinct_on?: Maybe<Array<Qstat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Qstat_Order_By>>;
  where?: Maybe<Qstat_Bool_Exp>;
};

/** select columns of table "backlog" */
export enum Backlog_Select_Column {
  /** column name */
  BrokerName = 'broker_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CursorDetails = 'cursor_details',
  /** column name */
  DataLedgerDetails = 'data_ledger_details',
  /** column name */
  Id = 'id',
  /** column name */
  MessageBacklog = 'message_backlog',
  /** column name */
  StatGeneratedAt = 'stat_generated_at',
  /** column name */
  StorageSize = 'storage_size',
  /** column name */
  SubscriptionId = 'subscription_id',
  /** column name */
  TopicName = 'topic_name',
  /** column name */
  TotalMessages = 'total_messages'
}

/** ordering options when selecting data from "backlog" */
export type Backlog_Order_By = {
  broker_name?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  cursor_details?: Maybe<Order_By>;
  data_ledger_details?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message_backlog?: Maybe<Order_By>;
  stat_generated_at?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  sub?: Maybe<Sub_Order_By>;
  subscription_id?: Maybe<Order_By>;
  topic_name?: Maybe<Order_By>;
  total_messages?: Maybe<Order_By>;
};

/** columns and relationships of "backlog" */
export type Backlog = {
   __typename?: 'backlog';
  broker_name: Scalars['String'];
  created_at: Scalars['timestamptz'];
  cursor_details?: Maybe<Scalars['jsonb']>;
  data_ledger_details?: Maybe<Scalars['jsonb']>;
  id: Scalars['Int'];
  message_backlog: Scalars['Int'];
  stat_generated_at: Scalars['timestamptz'];
  storage_size: Scalars['Int'];
  /** An object relationship */
  sub: Sub;
  subscription_id: Scalars['Int'];
  topic_name: Scalars['String'];
  total_messages: Scalars['Int'];
};


/** columns and relationships of "backlog" */
export type BacklogCursor_DetailsArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "backlog" */
export type BacklogData_Ledger_DetailsArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "backlog" */
export type Backlog_Aggregate = {
   __typename?: 'backlog_aggregate';
  aggregate?: Maybe<Backlog_Aggregate_Fields>;
  nodes: Array<Backlog>;
};

/** aggregate fields of "backlog" */
export type Backlog_Aggregate_Fields = {
   __typename?: 'backlog_aggregate_fields';
  avg?: Maybe<Backlog_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Backlog_Max_Fields>;
  min?: Maybe<Backlog_Min_Fields>;
  stddev?: Maybe<Backlog_Stddev_Fields>;
  stddev_pop?: Maybe<Backlog_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Backlog_Stddev_Samp_Fields>;
  sum?: Maybe<Backlog_Sum_Fields>;
  var_pop?: Maybe<Backlog_Var_Pop_Fields>;
  var_samp?: Maybe<Backlog_Var_Samp_Fields>;
  variance?: Maybe<Backlog_Variance_Fields>;
};


/** aggregate fields of "backlog" */
export type Backlog_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Backlog_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Backlog_Avg_Fields = {
   __typename?: 'backlog_avg_fields';
  id?: Maybe<Scalars['Float']>;
  message_backlog?: Maybe<Scalars['Float']>;
  storage_size?: Maybe<Scalars['Float']>;
  subscription_id?: Maybe<Scalars['Float']>;
  total_messages?: Maybe<Scalars['Float']>;
};

/** aggregate max on columns */
export type Backlog_Max_Fields = {
   __typename?: 'backlog_max_fields';
  broker_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  message_backlog?: Maybe<Scalars['Int']>;
  stat_generated_at?: Maybe<Scalars['timestamptz']>;
  storage_size?: Maybe<Scalars['Int']>;
  subscription_id?: Maybe<Scalars['Int']>;
  topic_name?: Maybe<Scalars['String']>;
  total_messages?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Backlog_Min_Fields = {
   __typename?: 'backlog_min_fields';
  broker_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  message_backlog?: Maybe<Scalars['Int']>;
  stat_generated_at?: Maybe<Scalars['timestamptz']>;
  storage_size?: Maybe<Scalars['Int']>;
  subscription_id?: Maybe<Scalars['Int']>;
  topic_name?: Maybe<Scalars['String']>;
  total_messages?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Backlog_Stddev_Fields = {
   __typename?: 'backlog_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  message_backlog?: Maybe<Scalars['Float']>;
  storage_size?: Maybe<Scalars['Float']>;
  subscription_id?: Maybe<Scalars['Float']>;
  total_messages?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Backlog_Stddev_Pop_Fields = {
   __typename?: 'backlog_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  message_backlog?: Maybe<Scalars['Float']>;
  storage_size?: Maybe<Scalars['Float']>;
  subscription_id?: Maybe<Scalars['Float']>;
  total_messages?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Backlog_Stddev_Samp_Fields = {
   __typename?: 'backlog_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  message_backlog?: Maybe<Scalars['Float']>;
  storage_size?: Maybe<Scalars['Float']>;
  subscription_id?: Maybe<Scalars['Float']>;
  total_messages?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Backlog_Sum_Fields = {
   __typename?: 'backlog_sum_fields';
  id?: Maybe<Scalars['Int']>;
  message_backlog?: Maybe<Scalars['Int']>;
  storage_size?: Maybe<Scalars['Int']>;
  subscription_id?: Maybe<Scalars['Int']>;
  total_messages?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Backlog_Var_Pop_Fields = {
   __typename?: 'backlog_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  message_backlog?: Maybe<Scalars['Float']>;
  storage_size?: Maybe<Scalars['Float']>;
  subscription_id?: Maybe<Scalars['Float']>;
  total_messages?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Backlog_Var_Samp_Fields = {
   __typename?: 'backlog_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  message_backlog?: Maybe<Scalars['Float']>;
  storage_size?: Maybe<Scalars['Float']>;
  subscription_id?: Maybe<Scalars['Float']>;
  total_messages?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Backlog_Variance_Fields = {
   __typename?: 'backlog_variance_fields';
  id?: Maybe<Scalars['Float']>;
  message_backlog?: Maybe<Scalars['Float']>;
  storage_size?: Maybe<Scalars['Float']>;
  subscription_id?: Maybe<Scalars['Float']>;
  total_messages?: Maybe<Scalars['Float']>;
};

/** select columns of table "qstat" */
export enum Qstat_Select_Column {
  /** column name */
  AverageMsgSize = 'average_msg_size',
  /** column name */
  BacklogSize = 'backlog_size',
  /** column name */
  BytesInCounter = 'bytes_in_counter',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeduplicationStatus = 'deduplication_status',
  /** column name */
  Id = 'id',
  /** column name */
  MsgInCounter = 'msg_in_counter',
  /** column name */
  MsgRateIn = 'msg_rate_in',
  /** column name */
  MsgRateOut = 'msg_rate_out',
  /** column name */
  MsgThroughputIn = 'msg_throughput_in',
  /** column name */
  MsgThroughputOut = 'msg_throughput_out',
  /** column name */
  Publishers = 'publishers',
  /** column name */
  Replication = 'replication',
  /** column name */
  StorageSize = 'storage_size',
  /** column name */
  SubscriptionId = 'subscription_id',
  /** column name */
  Subscriptions = 'subscriptions'
}

/** ordering options when selecting data from "qstat" */
export type Qstat_Order_By = {
  average_msg_size?: Maybe<Order_By>;
  backlog_size?: Maybe<Order_By>;
  bytes_in_counter?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deduplication_status?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  msg_in_counter?: Maybe<Order_By>;
  msg_rate_in?: Maybe<Order_By>;
  msg_rate_out?: Maybe<Order_By>;
  msg_throughput_in?: Maybe<Order_By>;
  msg_throughput_out?: Maybe<Order_By>;
  publishers?: Maybe<Order_By>;
  replication?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  sub?: Maybe<Sub_Order_By>;
  subscription_id?: Maybe<Order_By>;
  subscriptions?: Maybe<Order_By>;
};

/** columns and relationships of "qstat" */
export type Qstat = {
   __typename?: 'qstat';
  average_msg_size: Scalars['Int'];
  backlog_size: Scalars['Int'];
  bytes_in_counter: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  deduplication_status?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  msg_in_counter: Scalars['Int'];
  msg_rate_in: Scalars['Int'];
  msg_rate_out: Scalars['Int'];
  msg_throughput_in: Scalars['Int'];
  msg_throughput_out: Scalars['Int'];
  publishers?: Maybe<Scalars['jsonb']>;
  replication: Scalars['jsonb'];
  storage_size: Scalars['Int'];
  /** An object relationship */
  sub: Sub;
  subscription_id: Scalars['Int'];
  subscriptions: Scalars['jsonb'];
};


/** columns and relationships of "qstat" */
export type QstatPublishersArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "qstat" */
export type QstatReplicationArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "qstat" */
export type QstatSubscriptionsArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "qstat" */
export type Qstat_Aggregate = {
   __typename?: 'qstat_aggregate';
  aggregate?: Maybe<Qstat_Aggregate_Fields>;
  nodes: Array<Qstat>;
};

/** aggregate fields of "qstat" */
export type Qstat_Aggregate_Fields = {
   __typename?: 'qstat_aggregate_fields';
  avg?: Maybe<Qstat_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Qstat_Max_Fields>;
  min?: Maybe<Qstat_Min_Fields>;
  stddev?: Maybe<Qstat_Stddev_Fields>;
  stddev_pop?: Maybe<Qstat_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Qstat_Stddev_Samp_Fields>;
  sum?: Maybe<Qstat_Sum_Fields>;
  var_pop?: Maybe<Qstat_Var_Pop_Fields>;
  var_samp?: Maybe<Qstat_Var_Samp_Fields>;
  variance?: Maybe<Qstat_Variance_Fields>;
};


/** aggregate fields of "qstat" */
export type Qstat_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Qstat_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Qstat_Avg_Fields = {
   __typename?: 'qstat_avg_fields';
  average_msg_size?: Maybe<Scalars['Float']>;
  backlog_size?: Maybe<Scalars['Float']>;
  bytes_in_counter?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  msg_in_counter?: Maybe<Scalars['Float']>;
  msg_rate_in?: Maybe<Scalars['Float']>;
  msg_rate_out?: Maybe<Scalars['Float']>;
  msg_throughput_in?: Maybe<Scalars['Float']>;
  msg_throughput_out?: Maybe<Scalars['Float']>;
  storage_size?: Maybe<Scalars['Float']>;
  subscription_id?: Maybe<Scalars['Float']>;
};

/** aggregate max on columns */
export type Qstat_Max_Fields = {
   __typename?: 'qstat_max_fields';
  average_msg_size?: Maybe<Scalars['Int']>;
  backlog_size?: Maybe<Scalars['Int']>;
  bytes_in_counter?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deduplication_status?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  msg_in_counter?: Maybe<Scalars['Int']>;
  msg_rate_in?: Maybe<Scalars['Int']>;
  msg_rate_out?: Maybe<Scalars['Int']>;
  msg_throughput_in?: Maybe<Scalars['Int']>;
  msg_throughput_out?: Maybe<Scalars['Int']>;
  storage_size?: Maybe<Scalars['Int']>;
  subscription_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Qstat_Min_Fields = {
   __typename?: 'qstat_min_fields';
  average_msg_size?: Maybe<Scalars['Int']>;
  backlog_size?: Maybe<Scalars['Int']>;
  bytes_in_counter?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deduplication_status?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  msg_in_counter?: Maybe<Scalars['Int']>;
  msg_rate_in?: Maybe<Scalars['Int']>;
  msg_rate_out?: Maybe<Scalars['Int']>;
  msg_throughput_in?: Maybe<Scalars['Int']>;
  msg_throughput_out?: Maybe<Scalars['Int']>;
  storage_size?: Maybe<Scalars['Int']>;
  subscription_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Qstat_Stddev_Fields = {
   __typename?: 'qstat_stddev_fields';
  average_msg_size?: Maybe<Scalars['Float']>;
  backlog_size?: Maybe<Scalars['Float']>;
  bytes_in_counter?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  msg_in_counter?: Maybe<Scalars['Float']>;
  msg_rate_in?: Maybe<Scalars['Float']>;
  msg_rate_out?: Maybe<Scalars['Float']>;
  msg_throughput_in?: Maybe<Scalars['Float']>;
  msg_throughput_out?: Maybe<Scalars['Float']>;
  storage_size?: Maybe<Scalars['Float']>;
  subscription_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Qstat_Stddev_Pop_Fields = {
   __typename?: 'qstat_stddev_pop_fields';
  average_msg_size?: Maybe<Scalars['Float']>;
  backlog_size?: Maybe<Scalars['Float']>;
  bytes_in_counter?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  msg_in_counter?: Maybe<Scalars['Float']>;
  msg_rate_in?: Maybe<Scalars['Float']>;
  msg_rate_out?: Maybe<Scalars['Float']>;
  msg_throughput_in?: Maybe<Scalars['Float']>;
  msg_throughput_out?: Maybe<Scalars['Float']>;
  storage_size?: Maybe<Scalars['Float']>;
  subscription_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Qstat_Stddev_Samp_Fields = {
   __typename?: 'qstat_stddev_samp_fields';
  average_msg_size?: Maybe<Scalars['Float']>;
  backlog_size?: Maybe<Scalars['Float']>;
  bytes_in_counter?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  msg_in_counter?: Maybe<Scalars['Float']>;
  msg_rate_in?: Maybe<Scalars['Float']>;
  msg_rate_out?: Maybe<Scalars['Float']>;
  msg_throughput_in?: Maybe<Scalars['Float']>;
  msg_throughput_out?: Maybe<Scalars['Float']>;
  storage_size?: Maybe<Scalars['Float']>;
  subscription_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Qstat_Sum_Fields = {
   __typename?: 'qstat_sum_fields';
  average_msg_size?: Maybe<Scalars['Int']>;
  backlog_size?: Maybe<Scalars['Int']>;
  bytes_in_counter?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  msg_in_counter?: Maybe<Scalars['Int']>;
  msg_rate_in?: Maybe<Scalars['Int']>;
  msg_rate_out?: Maybe<Scalars['Int']>;
  msg_throughput_in?: Maybe<Scalars['Int']>;
  msg_throughput_out?: Maybe<Scalars['Int']>;
  storage_size?: Maybe<Scalars['Int']>;
  subscription_id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Qstat_Var_Pop_Fields = {
   __typename?: 'qstat_var_pop_fields';
  average_msg_size?: Maybe<Scalars['Float']>;
  backlog_size?: Maybe<Scalars['Float']>;
  bytes_in_counter?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  msg_in_counter?: Maybe<Scalars['Float']>;
  msg_rate_in?: Maybe<Scalars['Float']>;
  msg_rate_out?: Maybe<Scalars['Float']>;
  msg_throughput_in?: Maybe<Scalars['Float']>;
  msg_throughput_out?: Maybe<Scalars['Float']>;
  storage_size?: Maybe<Scalars['Float']>;
  subscription_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Qstat_Var_Samp_Fields = {
   __typename?: 'qstat_var_samp_fields';
  average_msg_size?: Maybe<Scalars['Float']>;
  backlog_size?: Maybe<Scalars['Float']>;
  bytes_in_counter?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  msg_in_counter?: Maybe<Scalars['Float']>;
  msg_rate_in?: Maybe<Scalars['Float']>;
  msg_rate_out?: Maybe<Scalars['Float']>;
  msg_throughput_in?: Maybe<Scalars['Float']>;
  msg_throughput_out?: Maybe<Scalars['Float']>;
  storage_size?: Maybe<Scalars['Float']>;
  subscription_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Qstat_Variance_Fields = {
   __typename?: 'qstat_variance_fields';
  average_msg_size?: Maybe<Scalars['Float']>;
  backlog_size?: Maybe<Scalars['Float']>;
  bytes_in_counter?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  msg_in_counter?: Maybe<Scalars['Float']>;
  msg_rate_in?: Maybe<Scalars['Float']>;
  msg_rate_out?: Maybe<Scalars['Float']>;
  msg_throughput_in?: Maybe<Scalars['Float']>;
  msg_throughput_out?: Maybe<Scalars['Float']>;
  storage_size?: Maybe<Scalars['Float']>;
  subscription_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "workspace" */
export type Workspace = {
   __typename?: 'workspace';
  /** An array relationship */
  auths: Array<Auth>;
  /** An aggregated array relationship */
  auths_aggregate: Auth_Aggregate;
  color?: Maybe<Scalars['String']>;
  /** An array relationship */
  conns: Array<Conn>;
  /** An aggregated array relationship */
  conns_aggregate: Conn_Aggregate;
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  status: Scalars['String'];
  /** An array relationship */
  subs: Array<Sub>;
  /** An aggregated array relationship */
  subs_aggregate: Sub_Aggregate;
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['Int'];
  /** An object relationship */
  usr: Usr;
  /** An array relationship */
  wstats: Array<Wstat>;
  /** An aggregated array relationship */
  wstats_aggregate: Wstat_Aggregate;
};


/** columns and relationships of "workspace" */
export type WorkspaceAuthsArgs = {
  distinct_on?: Maybe<Array<Auth_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Order_By>>;
  where?: Maybe<Auth_Bool_Exp>;
};


/** columns and relationships of "workspace" */
export type WorkspaceAuths_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Order_By>>;
  where?: Maybe<Auth_Bool_Exp>;
};


/** columns and relationships of "workspace" */
export type WorkspaceConnsArgs = {
  distinct_on?: Maybe<Array<Conn_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Conn_Order_By>>;
  where?: Maybe<Conn_Bool_Exp>;
};


/** columns and relationships of "workspace" */
export type WorkspaceConns_AggregateArgs = {
  distinct_on?: Maybe<Array<Conn_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Conn_Order_By>>;
  where?: Maybe<Conn_Bool_Exp>;
};


/** columns and relationships of "workspace" */
export type WorkspaceSubsArgs = {
  distinct_on?: Maybe<Array<Sub_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sub_Order_By>>;
  where?: Maybe<Sub_Bool_Exp>;
};


/** columns and relationships of "workspace" */
export type WorkspaceSubs_AggregateArgs = {
  distinct_on?: Maybe<Array<Sub_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sub_Order_By>>;
  where?: Maybe<Sub_Bool_Exp>;
};


/** columns and relationships of "workspace" */
export type WorkspaceWstatsArgs = {
  distinct_on?: Maybe<Array<Wstat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Wstat_Order_By>>;
  where?: Maybe<Wstat_Bool_Exp>;
};


/** columns and relationships of "workspace" */
export type WorkspaceWstats_AggregateArgs = {
  distinct_on?: Maybe<Array<Wstat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Wstat_Order_By>>;
  where?: Maybe<Wstat_Bool_Exp>;
};

/** aggregated selection of "auth" */
export type Auth_Aggregate = {
   __typename?: 'auth_aggregate';
  aggregate?: Maybe<Auth_Aggregate_Fields>;
  nodes: Array<Auth>;
};

/** aggregate fields of "auth" */
export type Auth_Aggregate_Fields = {
   __typename?: 'auth_aggregate_fields';
  avg?: Maybe<Auth_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Auth_Max_Fields>;
  min?: Maybe<Auth_Min_Fields>;
  stddev?: Maybe<Auth_Stddev_Fields>;
  stddev_pop?: Maybe<Auth_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Auth_Stddev_Samp_Fields>;
  sum?: Maybe<Auth_Sum_Fields>;
  var_pop?: Maybe<Auth_Var_Pop_Fields>;
  var_samp?: Maybe<Auth_Var_Samp_Fields>;
  variance?: Maybe<Auth_Variance_Fields>;
};


/** aggregate fields of "auth" */
export type Auth_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Auth_Avg_Fields = {
   __typename?: 'auth_avg_fields';
  id?: Maybe<Scalars['Float']>;
  workspace_id?: Maybe<Scalars['Float']>;
};

/** aggregate max on columns */
export type Auth_Max_Fields = {
   __typename?: 'auth_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  workspace_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Auth_Min_Fields = {
   __typename?: 'auth_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  workspace_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Auth_Stddev_Fields = {
   __typename?: 'auth_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  workspace_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Auth_Stddev_Pop_Fields = {
   __typename?: 'auth_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  workspace_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Auth_Stddev_Samp_Fields = {
   __typename?: 'auth_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  workspace_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Auth_Sum_Fields = {
   __typename?: 'auth_sum_fields';
  id?: Maybe<Scalars['Int']>;
  workspace_id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Auth_Var_Pop_Fields = {
   __typename?: 'auth_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  workspace_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Auth_Var_Samp_Fields = {
   __typename?: 'auth_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  workspace_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Auth_Variance_Fields = {
   __typename?: 'auth_variance_fields';
  id?: Maybe<Scalars['Float']>;
  workspace_id?: Maybe<Scalars['Float']>;
};

/** select columns of table "conn" */
export enum Conn_Select_Column {
  /** column name */
  ClientId = 'client_id',
  /** column name */
  ConnectedOn = 'connected_on',
  /** column name */
  Id = 'id',
  /** column name */
  LastPing = 'last_ping',
  /** column name */
  SdkVersion = 'sdk_version',
  /** column name */
  Status = 'status',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WorkspaceId = 'workspace_id'
}

/** ordering options when selecting data from "conn" */
export type Conn_Order_By = {
  client_id?: Maybe<Order_By>;
  connected_on?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_ping?: Maybe<Order_By>;
  sdk_version?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  workspace?: Maybe<Workspace_Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** columns and relationships of "conn" */
export type Conn = {
   __typename?: 'conn';
  client_id: Scalars['String'];
  connected_on: Scalars['timestamptz'];
  id: Scalars['Int'];
  last_ping: Scalars['timestamptz'];
  sdk_version: Scalars['String'];
  status: Scalars['String'];
  uid: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  workspace: Workspace;
  workspace_id: Scalars['Int'];
};

/** aggregated selection of "conn" */
export type Conn_Aggregate = {
   __typename?: 'conn_aggregate';
  aggregate?: Maybe<Conn_Aggregate_Fields>;
  nodes: Array<Conn>;
};

/** aggregate fields of "conn" */
export type Conn_Aggregate_Fields = {
   __typename?: 'conn_aggregate_fields';
  avg?: Maybe<Conn_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Conn_Max_Fields>;
  min?: Maybe<Conn_Min_Fields>;
  stddev?: Maybe<Conn_Stddev_Fields>;
  stddev_pop?: Maybe<Conn_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Conn_Stddev_Samp_Fields>;
  sum?: Maybe<Conn_Sum_Fields>;
  var_pop?: Maybe<Conn_Var_Pop_Fields>;
  var_samp?: Maybe<Conn_Var_Samp_Fields>;
  variance?: Maybe<Conn_Variance_Fields>;
};


/** aggregate fields of "conn" */
export type Conn_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Conn_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Conn_Avg_Fields = {
   __typename?: 'conn_avg_fields';
  id?: Maybe<Scalars['Float']>;
  workspace_id?: Maybe<Scalars['Float']>;
};

/** aggregate max on columns */
export type Conn_Max_Fields = {
   __typename?: 'conn_max_fields';
  client_id?: Maybe<Scalars['String']>;
  connected_on?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  last_ping?: Maybe<Scalars['timestamptz']>;
  sdk_version?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  workspace_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Conn_Min_Fields = {
   __typename?: 'conn_min_fields';
  client_id?: Maybe<Scalars['String']>;
  connected_on?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  last_ping?: Maybe<Scalars['timestamptz']>;
  sdk_version?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  workspace_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Conn_Stddev_Fields = {
   __typename?: 'conn_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  workspace_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Conn_Stddev_Pop_Fields = {
   __typename?: 'conn_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  workspace_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Conn_Stddev_Samp_Fields = {
   __typename?: 'conn_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  workspace_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Conn_Sum_Fields = {
   __typename?: 'conn_sum_fields';
  id?: Maybe<Scalars['Int']>;
  workspace_id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Conn_Var_Pop_Fields = {
   __typename?: 'conn_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  workspace_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Conn_Var_Samp_Fields = {
   __typename?: 'conn_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  workspace_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Conn_Variance_Fields = {
   __typename?: 'conn_variance_fields';
  id?: Maybe<Scalars['Float']>;
  workspace_id?: Maybe<Scalars['Float']>;
};

/** aggregated selection of "sub" */
export type Sub_Aggregate = {
   __typename?: 'sub_aggregate';
  aggregate?: Maybe<Sub_Aggregate_Fields>;
  nodes: Array<Sub>;
};

/** aggregate fields of "sub" */
export type Sub_Aggregate_Fields = {
   __typename?: 'sub_aggregate_fields';
  avg?: Maybe<Sub_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Sub_Max_Fields>;
  min?: Maybe<Sub_Min_Fields>;
  stddev?: Maybe<Sub_Stddev_Fields>;
  stddev_pop?: Maybe<Sub_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Sub_Stddev_Samp_Fields>;
  sum?: Maybe<Sub_Sum_Fields>;
  var_pop?: Maybe<Sub_Var_Pop_Fields>;
  var_samp?: Maybe<Sub_Var_Samp_Fields>;
  variance?: Maybe<Sub_Variance_Fields>;
};


/** aggregate fields of "sub" */
export type Sub_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Sub_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Sub_Avg_Fields = {
   __typename?: 'sub_avg_fields';
  auth_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  workspace_id?: Maybe<Scalars['Float']>;
};

/** aggregate max on columns */
export type Sub_Max_Fields = {
   __typename?: 'sub_max_fields';
  annotation?: Maybe<Scalars['String']>;
  auth_id?: Maybe<Scalars['Int']>;
  channel?: Maybe<Scalars['String']>;
  channel_type?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  json_path?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  valid_until?: Maybe<Scalars['timestamptz']>;
  workspace_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Sub_Min_Fields = {
   __typename?: 'sub_min_fields';
  annotation?: Maybe<Scalars['String']>;
  auth_id?: Maybe<Scalars['Int']>;
  channel?: Maybe<Scalars['String']>;
  channel_type?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  json_path?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  valid_until?: Maybe<Scalars['timestamptz']>;
  workspace_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Sub_Stddev_Fields = {
   __typename?: 'sub_stddev_fields';
  auth_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  workspace_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Sub_Stddev_Pop_Fields = {
   __typename?: 'sub_stddev_pop_fields';
  auth_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  workspace_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Sub_Stddev_Samp_Fields = {
   __typename?: 'sub_stddev_samp_fields';
  auth_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  workspace_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Sub_Sum_Fields = {
   __typename?: 'sub_sum_fields';
  auth_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  workspace_id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Sub_Var_Pop_Fields = {
   __typename?: 'sub_var_pop_fields';
  auth_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  workspace_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Sub_Var_Samp_Fields = {
   __typename?: 'sub_var_samp_fields';
  auth_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  workspace_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Sub_Variance_Fields = {
   __typename?: 'sub_variance_fields';
  auth_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  workspace_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "usr" */
export type Usr = {
   __typename?: 'usr';
  admin: Scalars['Boolean'];
  authentication_provider: Scalars['String'];
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['Int'];
  invited_by?: Maybe<Scalars['Int']>;
  login_at: Scalars['timestamptz'];
  name: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  priority: Scalars['Int'];
  profile_picture: Scalars['String'];
  provider_data: Scalars['jsonb'];
  provider_id: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user_login_history: Scalars['jsonb'];
  user_timezone?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  /** An object relationship */
  usr?: Maybe<Usr>;
  /** An array relationship */
  usrs: Array<Usr>;
  /** An aggregated array relationship */
  usrs_aggregate: Usr_Aggregate;
  /** An array relationship */
  ustats: Array<Ustat>;
  /** An aggregated array relationship */
  ustats_aggregate: Ustat_Aggregate;
  /** An array relationship */
  workspaces: Array<Workspace>;
  /** An aggregated array relationship */
  workspaces_aggregate: Workspace_Aggregate;
};


/** columns and relationships of "usr" */
export type UsrProvider_DataArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "usr" */
export type UsrUser_Login_HistoryArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "usr" */
export type UsrUsrsArgs = {
  distinct_on?: Maybe<Array<Usr_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Usr_Order_By>>;
  where?: Maybe<Usr_Bool_Exp>;
};


/** columns and relationships of "usr" */
export type UsrUsrs_AggregateArgs = {
  distinct_on?: Maybe<Array<Usr_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Usr_Order_By>>;
  where?: Maybe<Usr_Bool_Exp>;
};


/** columns and relationships of "usr" */
export type UsrUstatsArgs = {
  distinct_on?: Maybe<Array<Ustat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ustat_Order_By>>;
  where?: Maybe<Ustat_Bool_Exp>;
};


/** columns and relationships of "usr" */
export type UsrUstats_AggregateArgs = {
  distinct_on?: Maybe<Array<Ustat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ustat_Order_By>>;
  where?: Maybe<Ustat_Bool_Exp>;
};


/** columns and relationships of "usr" */
export type UsrWorkspacesArgs = {
  distinct_on?: Maybe<Array<Workspace_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Workspace_Order_By>>;
  where?: Maybe<Workspace_Bool_Exp>;
};


/** columns and relationships of "usr" */
export type UsrWorkspaces_AggregateArgs = {
  distinct_on?: Maybe<Array<Workspace_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Workspace_Order_By>>;
  where?: Maybe<Workspace_Bool_Exp>;
};

/** select columns of table "usr" */
export enum Usr_Select_Column {
  /** column name */
  Admin = 'admin',
  /** column name */
  AuthenticationProvider = 'authentication_provider',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Enabled = 'enabled',
  /** column name */
  Id = 'id',
  /** column name */
  InvitedBy = 'invited_by',
  /** column name */
  LoginAt = 'login_at',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  Priority = 'priority',
  /** column name */
  ProfilePicture = 'profile_picture',
  /** column name */
  ProviderData = 'provider_data',
  /** column name */
  ProviderId = 'provider_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserLoginHistory = 'user_login_history',
  /** column name */
  UserTimezone = 'user_timezone',
  /** column name */
  Username = 'username'
}

/** aggregated selection of "usr" */
export type Usr_Aggregate = {
   __typename?: 'usr_aggregate';
  aggregate?: Maybe<Usr_Aggregate_Fields>;
  nodes: Array<Usr>;
};

/** aggregate fields of "usr" */
export type Usr_Aggregate_Fields = {
   __typename?: 'usr_aggregate_fields';
  avg?: Maybe<Usr_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Usr_Max_Fields>;
  min?: Maybe<Usr_Min_Fields>;
  stddev?: Maybe<Usr_Stddev_Fields>;
  stddev_pop?: Maybe<Usr_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Usr_Stddev_Samp_Fields>;
  sum?: Maybe<Usr_Sum_Fields>;
  var_pop?: Maybe<Usr_Var_Pop_Fields>;
  var_samp?: Maybe<Usr_Var_Samp_Fields>;
  variance?: Maybe<Usr_Variance_Fields>;
};


/** aggregate fields of "usr" */
export type Usr_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Usr_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Usr_Avg_Fields = {
   __typename?: 'usr_avg_fields';
  id?: Maybe<Scalars['Float']>;
  invited_by?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Float']>;
};

/** aggregate max on columns */
export type Usr_Max_Fields = {
   __typename?: 'usr_max_fields';
  authentication_provider?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  invited_by?: Maybe<Scalars['Int']>;
  login_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  profile_picture?: Maybe<Scalars['String']>;
  provider_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_timezone?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Usr_Min_Fields = {
   __typename?: 'usr_min_fields';
  authentication_provider?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  invited_by?: Maybe<Scalars['Int']>;
  login_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  profile_picture?: Maybe<Scalars['String']>;
  provider_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_timezone?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Usr_Stddev_Fields = {
   __typename?: 'usr_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  invited_by?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Usr_Stddev_Pop_Fields = {
   __typename?: 'usr_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  invited_by?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Usr_Stddev_Samp_Fields = {
   __typename?: 'usr_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  invited_by?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Usr_Sum_Fields = {
   __typename?: 'usr_sum_fields';
  id?: Maybe<Scalars['Int']>;
  invited_by?: Maybe<Scalars['Int']>;
  priority?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Usr_Var_Pop_Fields = {
   __typename?: 'usr_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  invited_by?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Usr_Var_Samp_Fields = {
   __typename?: 'usr_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  invited_by?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Usr_Variance_Fields = {
   __typename?: 'usr_variance_fields';
  id?: Maybe<Scalars['Float']>;
  invited_by?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Float']>;
};

/** select columns of table "ustat" */
export enum Ustat_Select_Column {
  /** column name */
  AverageMsgSize = 'average_msg_size',
  /** column name */
  BacklogSize = 'backlog_size',
  /** column name */
  BytesInCounter = 'bytes_in_counter',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MessageBacklog = 'message_backlog',
  /** column name */
  MsgInCounter = 'msg_in_counter',
  /** column name */
  MsgRateIn = 'msg_rate_in',
  /** column name */
  MsgRateOut = 'msg_rate_out',
  /** column name */
  MsgThroughputIn = 'msg_throughput_in',
  /** column name */
  MsgThroughputOut = 'msg_throughput_out',
  /** column name */
  Scount = 'scount',
  /** column name */
  StorageSize = 'storage_size',
  /** column name */
  TotalMessages = 'total_messages',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Wcount = 'wcount'
}

/** ordering options when selecting data from "ustat" */
export type Ustat_Order_By = {
  average_msg_size?: Maybe<Order_By>;
  backlog_size?: Maybe<Order_By>;
  bytes_in_counter?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message_backlog?: Maybe<Order_By>;
  msg_in_counter?: Maybe<Order_By>;
  msg_rate_in?: Maybe<Order_By>;
  msg_rate_out?: Maybe<Order_By>;
  msg_throughput_in?: Maybe<Order_By>;
  msg_throughput_out?: Maybe<Order_By>;
  scount?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  total_messages?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  usr?: Maybe<Usr_Order_By>;
  wcount?: Maybe<Order_By>;
};

/** columns and relationships of "ustat" */
export type Ustat = {
   __typename?: 'ustat';
  average_msg_size: Scalars['Int'];
  backlog_size: Scalars['Int'];
  bytes_in_counter: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  message_backlog: Scalars['Int'];
  msg_in_counter: Scalars['Int'];
  msg_rate_in: Scalars['Int'];
  msg_rate_out: Scalars['Int'];
  msg_throughput_in: Scalars['Int'];
  msg_throughput_out: Scalars['Int'];
  scount: Scalars['Int'];
  storage_size: Scalars['Int'];
  total_messages: Scalars['Int'];
  user_id: Scalars['Int'];
  /** An object relationship */
  usr: Usr;
  wcount: Scalars['Int'];
};

/** aggregated selection of "ustat" */
export type Ustat_Aggregate = {
   __typename?: 'ustat_aggregate';
  aggregate?: Maybe<Ustat_Aggregate_Fields>;
  nodes: Array<Ustat>;
};

/** aggregate fields of "ustat" */
export type Ustat_Aggregate_Fields = {
   __typename?: 'ustat_aggregate_fields';
  avg?: Maybe<Ustat_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Ustat_Max_Fields>;
  min?: Maybe<Ustat_Min_Fields>;
  stddev?: Maybe<Ustat_Stddev_Fields>;
  stddev_pop?: Maybe<Ustat_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ustat_Stddev_Samp_Fields>;
  sum?: Maybe<Ustat_Sum_Fields>;
  var_pop?: Maybe<Ustat_Var_Pop_Fields>;
  var_samp?: Maybe<Ustat_Var_Samp_Fields>;
  variance?: Maybe<Ustat_Variance_Fields>;
};


/** aggregate fields of "ustat" */
export type Ustat_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Ustat_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Ustat_Avg_Fields = {
   __typename?: 'ustat_avg_fields';
  average_msg_size?: Maybe<Scalars['Float']>;
  backlog_size?: Maybe<Scalars['Float']>;
  bytes_in_counter?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  message_backlog?: Maybe<Scalars['Float']>;
  msg_in_counter?: Maybe<Scalars['Float']>;
  msg_rate_in?: Maybe<Scalars['Float']>;
  msg_rate_out?: Maybe<Scalars['Float']>;
  msg_throughput_in?: Maybe<Scalars['Float']>;
  msg_throughput_out?: Maybe<Scalars['Float']>;
  scount?: Maybe<Scalars['Float']>;
  storage_size?: Maybe<Scalars['Float']>;
  total_messages?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
  wcount?: Maybe<Scalars['Float']>;
};

/** aggregate max on columns */
export type Ustat_Max_Fields = {
   __typename?: 'ustat_max_fields';
  average_msg_size?: Maybe<Scalars['Int']>;
  backlog_size?: Maybe<Scalars['Int']>;
  bytes_in_counter?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  message_backlog?: Maybe<Scalars['Int']>;
  msg_in_counter?: Maybe<Scalars['Int']>;
  msg_rate_in?: Maybe<Scalars['Int']>;
  msg_rate_out?: Maybe<Scalars['Int']>;
  msg_throughput_in?: Maybe<Scalars['Int']>;
  msg_throughput_out?: Maybe<Scalars['Int']>;
  scount?: Maybe<Scalars['Int']>;
  storage_size?: Maybe<Scalars['Int']>;
  total_messages?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
  wcount?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Ustat_Min_Fields = {
   __typename?: 'ustat_min_fields';
  average_msg_size?: Maybe<Scalars['Int']>;
  backlog_size?: Maybe<Scalars['Int']>;
  bytes_in_counter?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  message_backlog?: Maybe<Scalars['Int']>;
  msg_in_counter?: Maybe<Scalars['Int']>;
  msg_rate_in?: Maybe<Scalars['Int']>;
  msg_rate_out?: Maybe<Scalars['Int']>;
  msg_throughput_in?: Maybe<Scalars['Int']>;
  msg_throughput_out?: Maybe<Scalars['Int']>;
  scount?: Maybe<Scalars['Int']>;
  storage_size?: Maybe<Scalars['Int']>;
  total_messages?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
  wcount?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Ustat_Stddev_Fields = {
   __typename?: 'ustat_stddev_fields';
  average_msg_size?: Maybe<Scalars['Float']>;
  backlog_size?: Maybe<Scalars['Float']>;
  bytes_in_counter?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  message_backlog?: Maybe<Scalars['Float']>;
  msg_in_counter?: Maybe<Scalars['Float']>;
  msg_rate_in?: Maybe<Scalars['Float']>;
  msg_rate_out?: Maybe<Scalars['Float']>;
  msg_throughput_in?: Maybe<Scalars['Float']>;
  msg_throughput_out?: Maybe<Scalars['Float']>;
  scount?: Maybe<Scalars['Float']>;
  storage_size?: Maybe<Scalars['Float']>;
  total_messages?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
  wcount?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Ustat_Stddev_Pop_Fields = {
   __typename?: 'ustat_stddev_pop_fields';
  average_msg_size?: Maybe<Scalars['Float']>;
  backlog_size?: Maybe<Scalars['Float']>;
  bytes_in_counter?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  message_backlog?: Maybe<Scalars['Float']>;
  msg_in_counter?: Maybe<Scalars['Float']>;
  msg_rate_in?: Maybe<Scalars['Float']>;
  msg_rate_out?: Maybe<Scalars['Float']>;
  msg_throughput_in?: Maybe<Scalars['Float']>;
  msg_throughput_out?: Maybe<Scalars['Float']>;
  scount?: Maybe<Scalars['Float']>;
  storage_size?: Maybe<Scalars['Float']>;
  total_messages?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
  wcount?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Ustat_Stddev_Samp_Fields = {
   __typename?: 'ustat_stddev_samp_fields';
  average_msg_size?: Maybe<Scalars['Float']>;
  backlog_size?: Maybe<Scalars['Float']>;
  bytes_in_counter?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  message_backlog?: Maybe<Scalars['Float']>;
  msg_in_counter?: Maybe<Scalars['Float']>;
  msg_rate_in?: Maybe<Scalars['Float']>;
  msg_rate_out?: Maybe<Scalars['Float']>;
  msg_throughput_in?: Maybe<Scalars['Float']>;
  msg_throughput_out?: Maybe<Scalars['Float']>;
  scount?: Maybe<Scalars['Float']>;
  storage_size?: Maybe<Scalars['Float']>;
  total_messages?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
  wcount?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Ustat_Sum_Fields = {
   __typename?: 'ustat_sum_fields';
  average_msg_size?: Maybe<Scalars['Int']>;
  backlog_size?: Maybe<Scalars['Int']>;
  bytes_in_counter?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  message_backlog?: Maybe<Scalars['Int']>;
  msg_in_counter?: Maybe<Scalars['Int']>;
  msg_rate_in?: Maybe<Scalars['Int']>;
  msg_rate_out?: Maybe<Scalars['Int']>;
  msg_throughput_in?: Maybe<Scalars['Int']>;
  msg_throughput_out?: Maybe<Scalars['Int']>;
  scount?: Maybe<Scalars['Int']>;
  storage_size?: Maybe<Scalars['Int']>;
  total_messages?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
  wcount?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Ustat_Var_Pop_Fields = {
   __typename?: 'ustat_var_pop_fields';
  average_msg_size?: Maybe<Scalars['Float']>;
  backlog_size?: Maybe<Scalars['Float']>;
  bytes_in_counter?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  message_backlog?: Maybe<Scalars['Float']>;
  msg_in_counter?: Maybe<Scalars['Float']>;
  msg_rate_in?: Maybe<Scalars['Float']>;
  msg_rate_out?: Maybe<Scalars['Float']>;
  msg_throughput_in?: Maybe<Scalars['Float']>;
  msg_throughput_out?: Maybe<Scalars['Float']>;
  scount?: Maybe<Scalars['Float']>;
  storage_size?: Maybe<Scalars['Float']>;
  total_messages?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
  wcount?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Ustat_Var_Samp_Fields = {
   __typename?: 'ustat_var_samp_fields';
  average_msg_size?: Maybe<Scalars['Float']>;
  backlog_size?: Maybe<Scalars['Float']>;
  bytes_in_counter?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  message_backlog?: Maybe<Scalars['Float']>;
  msg_in_counter?: Maybe<Scalars['Float']>;
  msg_rate_in?: Maybe<Scalars['Float']>;
  msg_rate_out?: Maybe<Scalars['Float']>;
  msg_throughput_in?: Maybe<Scalars['Float']>;
  msg_throughput_out?: Maybe<Scalars['Float']>;
  scount?: Maybe<Scalars['Float']>;
  storage_size?: Maybe<Scalars['Float']>;
  total_messages?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
  wcount?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Ustat_Variance_Fields = {
   __typename?: 'ustat_variance_fields';
  average_msg_size?: Maybe<Scalars['Float']>;
  backlog_size?: Maybe<Scalars['Float']>;
  bytes_in_counter?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  message_backlog?: Maybe<Scalars['Float']>;
  msg_in_counter?: Maybe<Scalars['Float']>;
  msg_rate_in?: Maybe<Scalars['Float']>;
  msg_rate_out?: Maybe<Scalars['Float']>;
  msg_throughput_in?: Maybe<Scalars['Float']>;
  msg_throughput_out?: Maybe<Scalars['Float']>;
  scount?: Maybe<Scalars['Float']>;
  storage_size?: Maybe<Scalars['Float']>;
  total_messages?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
  wcount?: Maybe<Scalars['Float']>;
};

/** select columns of table "workspace" */
export enum Workspace_Select_Column {
  /** column name */
  Color = 'color',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregated selection of "workspace" */
export type Workspace_Aggregate = {
   __typename?: 'workspace_aggregate';
  aggregate?: Maybe<Workspace_Aggregate_Fields>;
  nodes: Array<Workspace>;
};

/** aggregate fields of "workspace" */
export type Workspace_Aggregate_Fields = {
   __typename?: 'workspace_aggregate_fields';
  avg?: Maybe<Workspace_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Workspace_Max_Fields>;
  min?: Maybe<Workspace_Min_Fields>;
  stddev?: Maybe<Workspace_Stddev_Fields>;
  stddev_pop?: Maybe<Workspace_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Workspace_Stddev_Samp_Fields>;
  sum?: Maybe<Workspace_Sum_Fields>;
  var_pop?: Maybe<Workspace_Var_Pop_Fields>;
  var_samp?: Maybe<Workspace_Var_Samp_Fields>;
  variance?: Maybe<Workspace_Variance_Fields>;
};


/** aggregate fields of "workspace" */
export type Workspace_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Workspace_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Workspace_Avg_Fields = {
   __typename?: 'workspace_avg_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate max on columns */
export type Workspace_Max_Fields = {
   __typename?: 'workspace_max_fields';
  color?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Workspace_Min_Fields = {
   __typename?: 'workspace_min_fields';
  color?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Workspace_Stddev_Fields = {
   __typename?: 'workspace_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Workspace_Stddev_Pop_Fields = {
   __typename?: 'workspace_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Workspace_Stddev_Samp_Fields = {
   __typename?: 'workspace_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Workspace_Sum_Fields = {
   __typename?: 'workspace_sum_fields';
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Workspace_Var_Pop_Fields = {
   __typename?: 'workspace_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Workspace_Var_Samp_Fields = {
   __typename?: 'workspace_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Workspace_Variance_Fields = {
   __typename?: 'workspace_variance_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** select columns of table "wstat" */
export enum Wstat_Select_Column {
  /** column name */
  AverageMsgSize = 'average_msg_size',
  /** column name */
  BacklogSize = 'backlog_size',
  /** column name */
  BytesInCounter = 'bytes_in_counter',
  /** column name */
  Count = 'count',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MessageBacklog = 'message_backlog',
  /** column name */
  MsgInCounter = 'msg_in_counter',
  /** column name */
  MsgRateIn = 'msg_rate_in',
  /** column name */
  MsgRateOut = 'msg_rate_out',
  /** column name */
  MsgThroughputIn = 'msg_throughput_in',
  /** column name */
  MsgThroughputOut = 'msg_throughput_out',
  /** column name */
  StorageSize = 'storage_size',
  /** column name */
  TotalMessages = 'total_messages',
  /** column name */
  WorkspaceId = 'workspace_id'
}

/** ordering options when selecting data from "wstat" */
export type Wstat_Order_By = {
  average_msg_size?: Maybe<Order_By>;
  backlog_size?: Maybe<Order_By>;
  bytes_in_counter?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message_backlog?: Maybe<Order_By>;
  msg_in_counter?: Maybe<Order_By>;
  msg_rate_in?: Maybe<Order_By>;
  msg_rate_out?: Maybe<Order_By>;
  msg_throughput_in?: Maybe<Order_By>;
  msg_throughput_out?: Maybe<Order_By>;
  storage_size?: Maybe<Order_By>;
  total_messages?: Maybe<Order_By>;
  workspace?: Maybe<Workspace_Order_By>;
  workspace_id?: Maybe<Order_By>;
};

/** columns and relationships of "wstat" */
export type Wstat = {
   __typename?: 'wstat';
  average_msg_size: Scalars['Int'];
  backlog_size: Scalars['Int'];
  bytes_in_counter: Scalars['Int'];
  count: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  message_backlog: Scalars['Int'];
  msg_in_counter: Scalars['Int'];
  msg_rate_in: Scalars['Int'];
  msg_rate_out: Scalars['Int'];
  msg_throughput_in: Scalars['Int'];
  msg_throughput_out: Scalars['Int'];
  storage_size: Scalars['Int'];
  total_messages: Scalars['Int'];
  /** An object relationship */
  workspace: Workspace;
  workspace_id: Scalars['Int'];
};

/** aggregated selection of "wstat" */
export type Wstat_Aggregate = {
   __typename?: 'wstat_aggregate';
  aggregate?: Maybe<Wstat_Aggregate_Fields>;
  nodes: Array<Wstat>;
};

/** aggregate fields of "wstat" */
export type Wstat_Aggregate_Fields = {
   __typename?: 'wstat_aggregate_fields';
  avg?: Maybe<Wstat_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Wstat_Max_Fields>;
  min?: Maybe<Wstat_Min_Fields>;
  stddev?: Maybe<Wstat_Stddev_Fields>;
  stddev_pop?: Maybe<Wstat_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Wstat_Stddev_Samp_Fields>;
  sum?: Maybe<Wstat_Sum_Fields>;
  var_pop?: Maybe<Wstat_Var_Pop_Fields>;
  var_samp?: Maybe<Wstat_Var_Samp_Fields>;
  variance?: Maybe<Wstat_Variance_Fields>;
};


/** aggregate fields of "wstat" */
export type Wstat_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Wstat_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Wstat_Avg_Fields = {
   __typename?: 'wstat_avg_fields';
  average_msg_size?: Maybe<Scalars['Float']>;
  backlog_size?: Maybe<Scalars['Float']>;
  bytes_in_counter?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  message_backlog?: Maybe<Scalars['Float']>;
  msg_in_counter?: Maybe<Scalars['Float']>;
  msg_rate_in?: Maybe<Scalars['Float']>;
  msg_rate_out?: Maybe<Scalars['Float']>;
  msg_throughput_in?: Maybe<Scalars['Float']>;
  msg_throughput_out?: Maybe<Scalars['Float']>;
  storage_size?: Maybe<Scalars['Float']>;
  total_messages?: Maybe<Scalars['Float']>;
  workspace_id?: Maybe<Scalars['Float']>;
};

/** aggregate max on columns */
export type Wstat_Max_Fields = {
   __typename?: 'wstat_max_fields';
  average_msg_size?: Maybe<Scalars['Int']>;
  backlog_size?: Maybe<Scalars['Int']>;
  bytes_in_counter?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  message_backlog?: Maybe<Scalars['Int']>;
  msg_in_counter?: Maybe<Scalars['Int']>;
  msg_rate_in?: Maybe<Scalars['Int']>;
  msg_rate_out?: Maybe<Scalars['Int']>;
  msg_throughput_in?: Maybe<Scalars['Int']>;
  msg_throughput_out?: Maybe<Scalars['Int']>;
  storage_size?: Maybe<Scalars['Int']>;
  total_messages?: Maybe<Scalars['Int']>;
  workspace_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Wstat_Min_Fields = {
   __typename?: 'wstat_min_fields';
  average_msg_size?: Maybe<Scalars['Int']>;
  backlog_size?: Maybe<Scalars['Int']>;
  bytes_in_counter?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  message_backlog?: Maybe<Scalars['Int']>;
  msg_in_counter?: Maybe<Scalars['Int']>;
  msg_rate_in?: Maybe<Scalars['Int']>;
  msg_rate_out?: Maybe<Scalars['Int']>;
  msg_throughput_in?: Maybe<Scalars['Int']>;
  msg_throughput_out?: Maybe<Scalars['Int']>;
  storage_size?: Maybe<Scalars['Int']>;
  total_messages?: Maybe<Scalars['Int']>;
  workspace_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Wstat_Stddev_Fields = {
   __typename?: 'wstat_stddev_fields';
  average_msg_size?: Maybe<Scalars['Float']>;
  backlog_size?: Maybe<Scalars['Float']>;
  bytes_in_counter?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  message_backlog?: Maybe<Scalars['Float']>;
  msg_in_counter?: Maybe<Scalars['Float']>;
  msg_rate_in?: Maybe<Scalars['Float']>;
  msg_rate_out?: Maybe<Scalars['Float']>;
  msg_throughput_in?: Maybe<Scalars['Float']>;
  msg_throughput_out?: Maybe<Scalars['Float']>;
  storage_size?: Maybe<Scalars['Float']>;
  total_messages?: Maybe<Scalars['Float']>;
  workspace_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Wstat_Stddev_Pop_Fields = {
   __typename?: 'wstat_stddev_pop_fields';
  average_msg_size?: Maybe<Scalars['Float']>;
  backlog_size?: Maybe<Scalars['Float']>;
  bytes_in_counter?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  message_backlog?: Maybe<Scalars['Float']>;
  msg_in_counter?: Maybe<Scalars['Float']>;
  msg_rate_in?: Maybe<Scalars['Float']>;
  msg_rate_out?: Maybe<Scalars['Float']>;
  msg_throughput_in?: Maybe<Scalars['Float']>;
  msg_throughput_out?: Maybe<Scalars['Float']>;
  storage_size?: Maybe<Scalars['Float']>;
  total_messages?: Maybe<Scalars['Float']>;
  workspace_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Wstat_Stddev_Samp_Fields = {
   __typename?: 'wstat_stddev_samp_fields';
  average_msg_size?: Maybe<Scalars['Float']>;
  backlog_size?: Maybe<Scalars['Float']>;
  bytes_in_counter?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  message_backlog?: Maybe<Scalars['Float']>;
  msg_in_counter?: Maybe<Scalars['Float']>;
  msg_rate_in?: Maybe<Scalars['Float']>;
  msg_rate_out?: Maybe<Scalars['Float']>;
  msg_throughput_in?: Maybe<Scalars['Float']>;
  msg_throughput_out?: Maybe<Scalars['Float']>;
  storage_size?: Maybe<Scalars['Float']>;
  total_messages?: Maybe<Scalars['Float']>;
  workspace_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Wstat_Sum_Fields = {
   __typename?: 'wstat_sum_fields';
  average_msg_size?: Maybe<Scalars['Int']>;
  backlog_size?: Maybe<Scalars['Int']>;
  bytes_in_counter?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  message_backlog?: Maybe<Scalars['Int']>;
  msg_in_counter?: Maybe<Scalars['Int']>;
  msg_rate_in?: Maybe<Scalars['Int']>;
  msg_rate_out?: Maybe<Scalars['Int']>;
  msg_throughput_in?: Maybe<Scalars['Int']>;
  msg_throughput_out?: Maybe<Scalars['Int']>;
  storage_size?: Maybe<Scalars['Int']>;
  total_messages?: Maybe<Scalars['Int']>;
  workspace_id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Wstat_Var_Pop_Fields = {
   __typename?: 'wstat_var_pop_fields';
  average_msg_size?: Maybe<Scalars['Float']>;
  backlog_size?: Maybe<Scalars['Float']>;
  bytes_in_counter?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  message_backlog?: Maybe<Scalars['Float']>;
  msg_in_counter?: Maybe<Scalars['Float']>;
  msg_rate_in?: Maybe<Scalars['Float']>;
  msg_rate_out?: Maybe<Scalars['Float']>;
  msg_throughput_in?: Maybe<Scalars['Float']>;
  msg_throughput_out?: Maybe<Scalars['Float']>;
  storage_size?: Maybe<Scalars['Float']>;
  total_messages?: Maybe<Scalars['Float']>;
  workspace_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Wstat_Var_Samp_Fields = {
   __typename?: 'wstat_var_samp_fields';
  average_msg_size?: Maybe<Scalars['Float']>;
  backlog_size?: Maybe<Scalars['Float']>;
  bytes_in_counter?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  message_backlog?: Maybe<Scalars['Float']>;
  msg_in_counter?: Maybe<Scalars['Float']>;
  msg_rate_in?: Maybe<Scalars['Float']>;
  msg_rate_out?: Maybe<Scalars['Float']>;
  msg_throughput_in?: Maybe<Scalars['Float']>;
  msg_throughput_out?: Maybe<Scalars['Float']>;
  storage_size?: Maybe<Scalars['Float']>;
  total_messages?: Maybe<Scalars['Float']>;
  workspace_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Wstat_Variance_Fields = {
   __typename?: 'wstat_variance_fields';
  average_msg_size?: Maybe<Scalars['Float']>;
  backlog_size?: Maybe<Scalars['Float']>;
  bytes_in_counter?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  message_backlog?: Maybe<Scalars['Float']>;
  msg_in_counter?: Maybe<Scalars['Float']>;
  msg_rate_in?: Maybe<Scalars['Float']>;
  msg_rate_out?: Maybe<Scalars['Float']>;
  msg_throughput_in?: Maybe<Scalars['Float']>;
  msg_throughput_out?: Maybe<Scalars['Float']>;
  storage_size?: Maybe<Scalars['Float']>;
  total_messages?: Maybe<Scalars['Float']>;
  workspace_id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
   __typename?: 'mutation_root';
  /** delete data from the table: "auth" */
  delete_auth?: Maybe<Auth_Mutation_Response>;
  /** delete data from the table: "backlog" */
  delete_backlog?: Maybe<Backlog_Mutation_Response>;
  /** delete data from the table: "conn" */
  delete_conn?: Maybe<Conn_Mutation_Response>;
  /** delete data from the table: "qstat" */
  delete_qstat?: Maybe<Qstat_Mutation_Response>;
  /** delete data from the table: "sub" */
  delete_sub?: Maybe<Sub_Mutation_Response>;
  /** delete data from the table: "usr" */
  delete_usr?: Maybe<Usr_Mutation_Response>;
  /** delete data from the table: "ustat" */
  delete_ustat?: Maybe<Ustat_Mutation_Response>;
  /** delete data from the table: "workspace" */
  delete_workspace?: Maybe<Workspace_Mutation_Response>;
  /** delete data from the table: "wstat" */
  delete_wstat?: Maybe<Wstat_Mutation_Response>;
  /** insert data into the table: "auth" */
  insert_auth?: Maybe<Auth_Mutation_Response>;
  /** insert data into the table: "backlog" */
  insert_backlog?: Maybe<Backlog_Mutation_Response>;
  /** insert data into the table: "conn" */
  insert_conn?: Maybe<Conn_Mutation_Response>;
  /** insert data into the table: "qstat" */
  insert_qstat?: Maybe<Qstat_Mutation_Response>;
  /** insert data into the table: "sub" */
  insert_sub?: Maybe<Sub_Mutation_Response>;
  /** insert data into the table: "usr" */
  insert_usr?: Maybe<Usr_Mutation_Response>;
  /** insert data into the table: "ustat" */
  insert_ustat?: Maybe<Ustat_Mutation_Response>;
  /** insert data into the table: "workspace" */
  insert_workspace?: Maybe<Workspace_Mutation_Response>;
  /** insert data into the table: "wstat" */
  insert_wstat?: Maybe<Wstat_Mutation_Response>;
  /** update data of the table: "auth" */
  update_auth?: Maybe<Auth_Mutation_Response>;
  /** update data of the table: "backlog" */
  update_backlog?: Maybe<Backlog_Mutation_Response>;
  /** update data of the table: "conn" */
  update_conn?: Maybe<Conn_Mutation_Response>;
  /** update data of the table: "qstat" */
  update_qstat?: Maybe<Qstat_Mutation_Response>;
  /** update data of the table: "sub" */
  update_sub?: Maybe<Sub_Mutation_Response>;
  /** update data of the table: "usr" */
  update_usr?: Maybe<Usr_Mutation_Response>;
  /** update data of the table: "ustat" */
  update_ustat?: Maybe<Ustat_Mutation_Response>;
  /** update data of the table: "workspace" */
  update_workspace?: Maybe<Workspace_Mutation_Response>;
  /** update data of the table: "wstat" */
  update_wstat?: Maybe<Wstat_Mutation_Response>;
};


/** mutation root */
export type Mutation_RootDelete_AuthArgs = {
  where: Auth_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_BacklogArgs = {
  where: Backlog_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ConnArgs = {
  where: Conn_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_QstatArgs = {
  where: Qstat_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_SubArgs = {
  where: Sub_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_UsrArgs = {
  where: Usr_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_UstatArgs = {
  where: Ustat_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_WorkspaceArgs = {
  where: Workspace_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_WstatArgs = {
  where: Wstat_Bool_Exp;
};


/** mutation root */
export type Mutation_RootInsert_AuthArgs = {
  objects: Array<Auth_Insert_Input>;
  on_conflict?: Maybe<Auth_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BacklogArgs = {
  objects: Array<Backlog_Insert_Input>;
  on_conflict?: Maybe<Backlog_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ConnArgs = {
  objects: Array<Conn_Insert_Input>;
  on_conflict?: Maybe<Conn_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QstatArgs = {
  objects: Array<Qstat_Insert_Input>;
  on_conflict?: Maybe<Qstat_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SubArgs = {
  objects: Array<Sub_Insert_Input>;
  on_conflict?: Maybe<Sub_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsrArgs = {
  objects: Array<Usr_Insert_Input>;
  on_conflict?: Maybe<Usr_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UstatArgs = {
  objects: Array<Ustat_Insert_Input>;
  on_conflict?: Maybe<Ustat_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_WorkspaceArgs = {
  objects: Array<Workspace_Insert_Input>;
  on_conflict?: Maybe<Workspace_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_WstatArgs = {
  objects: Array<Wstat_Insert_Input>;
  on_conflict?: Maybe<Wstat_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthArgs = {
  _append?: Maybe<Auth_Append_Input>;
  _delete_at_path?: Maybe<Auth_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Auth_Delete_Elem_Input>;
  _delete_key?: Maybe<Auth_Delete_Key_Input>;
  _inc?: Maybe<Auth_Inc_Input>;
  _prepend?: Maybe<Auth_Prepend_Input>;
  _set?: Maybe<Auth_Set_Input>;
  where: Auth_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_BacklogArgs = {
  _append?: Maybe<Backlog_Append_Input>;
  _delete_at_path?: Maybe<Backlog_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Backlog_Delete_Elem_Input>;
  _delete_key?: Maybe<Backlog_Delete_Key_Input>;
  _inc?: Maybe<Backlog_Inc_Input>;
  _prepend?: Maybe<Backlog_Prepend_Input>;
  _set?: Maybe<Backlog_Set_Input>;
  where: Backlog_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ConnArgs = {
  _inc?: Maybe<Conn_Inc_Input>;
  _set?: Maybe<Conn_Set_Input>;
  where: Conn_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_QstatArgs = {
  _append?: Maybe<Qstat_Append_Input>;
  _delete_at_path?: Maybe<Qstat_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Qstat_Delete_Elem_Input>;
  _delete_key?: Maybe<Qstat_Delete_Key_Input>;
  _inc?: Maybe<Qstat_Inc_Input>;
  _prepend?: Maybe<Qstat_Prepend_Input>;
  _set?: Maybe<Qstat_Set_Input>;
  where: Qstat_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_SubArgs = {
  _append?: Maybe<Sub_Append_Input>;
  _delete_at_path?: Maybe<Sub_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Sub_Delete_Elem_Input>;
  _delete_key?: Maybe<Sub_Delete_Key_Input>;
  _inc?: Maybe<Sub_Inc_Input>;
  _prepend?: Maybe<Sub_Prepend_Input>;
  _set?: Maybe<Sub_Set_Input>;
  where: Sub_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_UsrArgs = {
  _append?: Maybe<Usr_Append_Input>;
  _delete_at_path?: Maybe<Usr_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Usr_Delete_Elem_Input>;
  _delete_key?: Maybe<Usr_Delete_Key_Input>;
  _inc?: Maybe<Usr_Inc_Input>;
  _prepend?: Maybe<Usr_Prepend_Input>;
  _set?: Maybe<Usr_Set_Input>;
  where: Usr_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_UstatArgs = {
  _inc?: Maybe<Ustat_Inc_Input>;
  _set?: Maybe<Ustat_Set_Input>;
  where: Ustat_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_WorkspaceArgs = {
  _inc?: Maybe<Workspace_Inc_Input>;
  _set?: Maybe<Workspace_Set_Input>;
  where: Workspace_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_WstatArgs = {
  _inc?: Maybe<Wstat_Inc_Input>;
  _set?: Maybe<Wstat_Set_Input>;
  where: Wstat_Bool_Exp;
};

/** response of any mutation on the table "auth" */
export type Auth_Mutation_Response = {
   __typename?: 'auth_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Auth>;
};

/** response of any mutation on the table "backlog" */
export type Backlog_Mutation_Response = {
   __typename?: 'backlog_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Backlog>;
};

/** response of any mutation on the table "conn" */
export type Conn_Mutation_Response = {
   __typename?: 'conn_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Conn>;
};

/** response of any mutation on the table "qstat" */
export type Qstat_Mutation_Response = {
   __typename?: 'qstat_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Qstat>;
};

/** response of any mutation on the table "sub" */
export type Sub_Mutation_Response = {
   __typename?: 'sub_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Sub>;
};

/** response of any mutation on the table "usr" */
export type Usr_Mutation_Response = {
   __typename?: 'usr_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Usr>;
};

/** response of any mutation on the table "ustat" */
export type Ustat_Mutation_Response = {
   __typename?: 'ustat_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Ustat>;
};

/** response of any mutation on the table "workspace" */
export type Workspace_Mutation_Response = {
   __typename?: 'workspace_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Workspace>;
};

/** response of any mutation on the table "wstat" */
export type Wstat_Mutation_Response = {
   __typename?: 'wstat_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Wstat>;
};

/** input type for inserting data into table "auth" */
export type Auth_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  roles?: Maybe<Scalars['jsonb']>;
  status?: Maybe<Scalars['String']>;
  subs?: Maybe<Sub_Arr_Rel_Insert_Input>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['uuid']>;
  workspace?: Maybe<Workspace_Obj_Rel_Insert_Input>;
  workspace_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting array relation for remote table "sub" */
export type Sub_Arr_Rel_Insert_Input = {
  data: Array<Sub_Insert_Input>;
  on_conflict?: Maybe<Sub_On_Conflict>;
};

/** input type for inserting data into table "sub" */
export type Sub_Insert_Input = {
  annotation?: Maybe<Scalars['String']>;
  auth?: Maybe<Auth_Obj_Rel_Insert_Input>;
  auth_id?: Maybe<Scalars['Int']>;
  backlogs?: Maybe<Backlog_Arr_Rel_Insert_Input>;
  channel?: Maybe<Scalars['String']>;
  channel_type?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  geo?: Maybe<Scalars['geography']>;
  geo_radius?: Maybe<Scalars['geography']>;
  id?: Maybe<Scalars['bigint']>;
  json_path?: Maybe<Scalars['String']>;
  original_parameters?: Maybe<Scalars['jsonb']>;
  persistent?: Maybe<Scalars['Boolean']>;
  qstats?: Maybe<Qstat_Arr_Rel_Insert_Input>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  valid_until?: Maybe<Scalars['timestamptz']>;
  workspace?: Maybe<Workspace_Obj_Rel_Insert_Input>;
  workspace_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting object relation for remote table "auth" */
export type Auth_Obj_Rel_Insert_Input = {
  data: Auth_Insert_Input;
  on_conflict?: Maybe<Auth_On_Conflict>;
};

/** on conflict condition type for table "auth" */
export type Auth_On_Conflict = {
  constraint: Auth_Constraint;
  update_columns: Array<Auth_Update_Column>;
  where?: Maybe<Auth_Bool_Exp>;
};

/** unique or primary key constraints on table "auth" */
export enum Auth_Constraint {
  /** unique or primary key constraint */
  AuthIdKey = 'auth_id_key',
  /** unique or primary key constraint */
  AuthPkey = 'auth_pkey'
}

/** update columns of table "auth" */
export enum Auth_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Roles = 'roles',
  /** column name */
  Status = 'status',
  /** column name */
  Type = 'type',
  /** column name */
  Value = 'value',
  /** column name */
  WorkspaceId = 'workspace_id'
}

/** input type for inserting array relation for remote table "backlog" */
export type Backlog_Arr_Rel_Insert_Input = {
  data: Array<Backlog_Insert_Input>;
  on_conflict?: Maybe<Backlog_On_Conflict>;
};

/** input type for inserting data into table "backlog" */
export type Backlog_Insert_Input = {
  broker_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  cursor_details?: Maybe<Scalars['jsonb']>;
  data_ledger_details?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['Int']>;
  message_backlog?: Maybe<Scalars['Int']>;
  stat_generated_at?: Maybe<Scalars['timestamptz']>;
  storage_size?: Maybe<Scalars['Int']>;
  sub?: Maybe<Sub_Obj_Rel_Insert_Input>;
  subscription_id?: Maybe<Scalars['Int']>;
  topic_name?: Maybe<Scalars['String']>;
  total_messages?: Maybe<Scalars['Int']>;
};

/** input type for inserting object relation for remote table "sub" */
export type Sub_Obj_Rel_Insert_Input = {
  data: Sub_Insert_Input;
  on_conflict?: Maybe<Sub_On_Conflict>;
};

/** on conflict condition type for table "sub" */
export type Sub_On_Conflict = {
  constraint: Sub_Constraint;
  update_columns: Array<Sub_Update_Column>;
  where?: Maybe<Sub_Bool_Exp>;
};

/** unique or primary key constraints on table "sub" */
export enum Sub_Constraint {
  /** unique or primary key constraint */
  SubIdKey = 'sub_id_key',
  /** unique or primary key constraint */
  SubPkey = 'sub_pkey'
}

/** update columns of table "sub" */
export enum Sub_Update_Column {
  /** column name */
  Annotation = 'annotation',
  /** column name */
  AuthId = 'auth_id',
  /** column name */
  Channel = 'channel',
  /** column name */
  ChannelType = 'channel_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Geo = 'geo',
  /** column name */
  GeoRadius = 'geo_radius',
  /** column name */
  Id = 'id',
  /** column name */
  JsonPath = 'json_path',
  /** column name */
  OriginalParameters = 'original_parameters',
  /** column name */
  Persistent = 'persistent',
  /** column name */
  Status = 'status',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  ValidUntil = 'valid_until',
  /** column name */
  WorkspaceId = 'workspace_id'
}

/** on conflict condition type for table "backlog" */
export type Backlog_On_Conflict = {
  constraint: Backlog_Constraint;
  update_columns: Array<Backlog_Update_Column>;
  where?: Maybe<Backlog_Bool_Exp>;
};

/** unique or primary key constraints on table "backlog" */
export enum Backlog_Constraint {
  /** unique or primary key constraint */
  BacklogIdKey = 'backlog_id_key',
  /** unique or primary key constraint */
  BacklogPkey = 'backlog_pkey'
}

/** update columns of table "backlog" */
export enum Backlog_Update_Column {
  /** column name */
  BrokerName = 'broker_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CursorDetails = 'cursor_details',
  /** column name */
  DataLedgerDetails = 'data_ledger_details',
  /** column name */
  Id = 'id',
  /** column name */
  MessageBacklog = 'message_backlog',
  /** column name */
  StatGeneratedAt = 'stat_generated_at',
  /** column name */
  StorageSize = 'storage_size',
  /** column name */
  SubscriptionId = 'subscription_id',
  /** column name */
  TopicName = 'topic_name',
  /** column name */
  TotalMessages = 'total_messages'
}

/** input type for inserting array relation for remote table "qstat" */
export type Qstat_Arr_Rel_Insert_Input = {
  data: Array<Qstat_Insert_Input>;
  on_conflict?: Maybe<Qstat_On_Conflict>;
};

/** input type for inserting data into table "qstat" */
export type Qstat_Insert_Input = {
  average_msg_size?: Maybe<Scalars['Int']>;
  backlog_size?: Maybe<Scalars['Int']>;
  bytes_in_counter?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deduplication_status?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  msg_in_counter?: Maybe<Scalars['Int']>;
  msg_rate_in?: Maybe<Scalars['Int']>;
  msg_rate_out?: Maybe<Scalars['Int']>;
  msg_throughput_in?: Maybe<Scalars['Int']>;
  msg_throughput_out?: Maybe<Scalars['Int']>;
  publishers?: Maybe<Scalars['jsonb']>;
  replication?: Maybe<Scalars['jsonb']>;
  storage_size?: Maybe<Scalars['Int']>;
  sub?: Maybe<Sub_Obj_Rel_Insert_Input>;
  subscription_id?: Maybe<Scalars['Int']>;
  subscriptions?: Maybe<Scalars['jsonb']>;
};

/** on conflict condition type for table "qstat" */
export type Qstat_On_Conflict = {
  constraint: Qstat_Constraint;
  update_columns: Array<Qstat_Update_Column>;
  where?: Maybe<Qstat_Bool_Exp>;
};

/** unique or primary key constraints on table "qstat" */
export enum Qstat_Constraint {
  /** unique or primary key constraint */
  QstatIdKey = 'qstat_id_key',
  /** unique or primary key constraint */
  QstatPkey = 'qstat_pkey'
}

/** update columns of table "qstat" */
export enum Qstat_Update_Column {
  /** column name */
  AverageMsgSize = 'average_msg_size',
  /** column name */
  BacklogSize = 'backlog_size',
  /** column name */
  BytesInCounter = 'bytes_in_counter',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeduplicationStatus = 'deduplication_status',
  /** column name */
  Id = 'id',
  /** column name */
  MsgInCounter = 'msg_in_counter',
  /** column name */
  MsgRateIn = 'msg_rate_in',
  /** column name */
  MsgRateOut = 'msg_rate_out',
  /** column name */
  MsgThroughputIn = 'msg_throughput_in',
  /** column name */
  MsgThroughputOut = 'msg_throughput_out',
  /** column name */
  Publishers = 'publishers',
  /** column name */
  Replication = 'replication',
  /** column name */
  StorageSize = 'storage_size',
  /** column name */
  SubscriptionId = 'subscription_id',
  /** column name */
  Subscriptions = 'subscriptions'
}

/** input type for inserting object relation for remote table "workspace" */
export type Workspace_Obj_Rel_Insert_Input = {
  data: Workspace_Insert_Input;
  on_conflict?: Maybe<Workspace_On_Conflict>;
};

/** input type for inserting data into table "workspace" */
export type Workspace_Insert_Input = {
  auths?: Maybe<Auth_Arr_Rel_Insert_Input>;
  color?: Maybe<Scalars['String']>;
  conns?: Maybe<Conn_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subs?: Maybe<Sub_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
  usr?: Maybe<Usr_Obj_Rel_Insert_Input>;
  wstats?: Maybe<Wstat_Arr_Rel_Insert_Input>;
};

/** input type for inserting array relation for remote table "auth" */
export type Auth_Arr_Rel_Insert_Input = {
  data: Array<Auth_Insert_Input>;
  on_conflict?: Maybe<Auth_On_Conflict>;
};

/** input type for inserting array relation for remote table "conn" */
export type Conn_Arr_Rel_Insert_Input = {
  data: Array<Conn_Insert_Input>;
  on_conflict?: Maybe<Conn_On_Conflict>;
};

/** input type for inserting data into table "conn" */
export type Conn_Insert_Input = {
  client_id?: Maybe<Scalars['String']>;
  connected_on?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  last_ping?: Maybe<Scalars['timestamptz']>;
  sdk_version?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  workspace?: Maybe<Workspace_Obj_Rel_Insert_Input>;
  workspace_id?: Maybe<Scalars['Int']>;
};

/** on conflict condition type for table "conn" */
export type Conn_On_Conflict = {
  constraint: Conn_Constraint;
  update_columns: Array<Conn_Update_Column>;
  where?: Maybe<Conn_Bool_Exp>;
};

/** unique or primary key constraints on table "conn" */
export enum Conn_Constraint {
  /** unique or primary key constraint */
  ConnPkey = 'conn_pkey'
}

/** update columns of table "conn" */
export enum Conn_Update_Column {
  /** column name */
  ClientId = 'client_id',
  /** column name */
  ConnectedOn = 'connected_on',
  /** column name */
  Id = 'id',
  /** column name */
  LastPing = 'last_ping',
  /** column name */
  SdkVersion = 'sdk_version',
  /** column name */
  Status = 'status',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WorkspaceId = 'workspace_id'
}

/** input type for inserting object relation for remote table "usr" */
export type Usr_Obj_Rel_Insert_Input = {
  data: Usr_Insert_Input;
  on_conflict?: Maybe<Usr_On_Conflict>;
};

/** input type for inserting data into table "usr" */
export type Usr_Insert_Input = {
  admin?: Maybe<Scalars['Boolean']>;
  authentication_provider?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  invited_by?: Maybe<Scalars['Int']>;
  login_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  profile_picture?: Maybe<Scalars['String']>;
  provider_data?: Maybe<Scalars['jsonb']>;
  provider_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_login_history?: Maybe<Scalars['jsonb']>;
  user_timezone?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  usr?: Maybe<Usr_Obj_Rel_Insert_Input>;
  usrs?: Maybe<Usr_Arr_Rel_Insert_Input>;
  ustats?: Maybe<Ustat_Arr_Rel_Insert_Input>;
  workspaces?: Maybe<Workspace_Arr_Rel_Insert_Input>;
};

/** input type for inserting array relation for remote table "usr" */
export type Usr_Arr_Rel_Insert_Input = {
  data: Array<Usr_Insert_Input>;
  on_conflict?: Maybe<Usr_On_Conflict>;
};

/** on conflict condition type for table "usr" */
export type Usr_On_Conflict = {
  constraint: Usr_Constraint;
  update_columns: Array<Usr_Update_Column>;
  where?: Maybe<Usr_Bool_Exp>;
};

/** unique or primary key constraints on table "usr" */
export enum Usr_Constraint {
  /** unique or primary key constraint */
  UniqueEmail = 'unique_email',
  /** unique or primary key constraint */
  UsrPkey = 'usr_pkey'
}

/** update columns of table "usr" */
export enum Usr_Update_Column {
  /** column name */
  Admin = 'admin',
  /** column name */
  AuthenticationProvider = 'authentication_provider',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Enabled = 'enabled',
  /** column name */
  Id = 'id',
  /** column name */
  InvitedBy = 'invited_by',
  /** column name */
  LoginAt = 'login_at',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  Priority = 'priority',
  /** column name */
  ProfilePicture = 'profile_picture',
  /** column name */
  ProviderData = 'provider_data',
  /** column name */
  ProviderId = 'provider_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserLoginHistory = 'user_login_history',
  /** column name */
  UserTimezone = 'user_timezone',
  /** column name */
  Username = 'username'
}

/** input type for inserting array relation for remote table "ustat" */
export type Ustat_Arr_Rel_Insert_Input = {
  data: Array<Ustat_Insert_Input>;
  on_conflict?: Maybe<Ustat_On_Conflict>;
};

/** input type for inserting data into table "ustat" */
export type Ustat_Insert_Input = {
  average_msg_size?: Maybe<Scalars['Int']>;
  backlog_size?: Maybe<Scalars['Int']>;
  bytes_in_counter?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  message_backlog?: Maybe<Scalars['Int']>;
  msg_in_counter?: Maybe<Scalars['Int']>;
  msg_rate_in?: Maybe<Scalars['Int']>;
  msg_rate_out?: Maybe<Scalars['Int']>;
  msg_throughput_in?: Maybe<Scalars['Int']>;
  msg_throughput_out?: Maybe<Scalars['Int']>;
  scount?: Maybe<Scalars['Int']>;
  storage_size?: Maybe<Scalars['Int']>;
  total_messages?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
  usr?: Maybe<Usr_Obj_Rel_Insert_Input>;
  wcount?: Maybe<Scalars['Int']>;
};

/** on conflict condition type for table "ustat" */
export type Ustat_On_Conflict = {
  constraint: Ustat_Constraint;
  update_columns: Array<Ustat_Update_Column>;
  where?: Maybe<Ustat_Bool_Exp>;
};

/** unique or primary key constraints on table "ustat" */
export enum Ustat_Constraint {
  /** unique or primary key constraint */
  UstatIdKey = 'ustat_id_key',
  /** unique or primary key constraint */
  UstatPkey = 'ustat_pkey'
}

/** update columns of table "ustat" */
export enum Ustat_Update_Column {
  /** column name */
  AverageMsgSize = 'average_msg_size',
  /** column name */
  BacklogSize = 'backlog_size',
  /** column name */
  BytesInCounter = 'bytes_in_counter',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MessageBacklog = 'message_backlog',
  /** column name */
  MsgInCounter = 'msg_in_counter',
  /** column name */
  MsgRateIn = 'msg_rate_in',
  /** column name */
  MsgRateOut = 'msg_rate_out',
  /** column name */
  MsgThroughputIn = 'msg_throughput_in',
  /** column name */
  MsgThroughputOut = 'msg_throughput_out',
  /** column name */
  Scount = 'scount',
  /** column name */
  StorageSize = 'storage_size',
  /** column name */
  TotalMessages = 'total_messages',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Wcount = 'wcount'
}

/** input type for inserting array relation for remote table "workspace" */
export type Workspace_Arr_Rel_Insert_Input = {
  data: Array<Workspace_Insert_Input>;
  on_conflict?: Maybe<Workspace_On_Conflict>;
};

/** on conflict condition type for table "workspace" */
export type Workspace_On_Conflict = {
  constraint: Workspace_Constraint;
  update_columns: Array<Workspace_Update_Column>;
  where?: Maybe<Workspace_Bool_Exp>;
};

/** unique or primary key constraints on table "workspace" */
export enum Workspace_Constraint {
  /** unique or primary key constraint */
  WorkspaceIdKey = 'workspace_id_key',
  /** unique or primary key constraint */
  WorkspacePkey = 'workspace_pkey'
}

/** update columns of table "workspace" */
export enum Workspace_Update_Column {
  /** column name */
  Color = 'color',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for inserting array relation for remote table "wstat" */
export type Wstat_Arr_Rel_Insert_Input = {
  data: Array<Wstat_Insert_Input>;
  on_conflict?: Maybe<Wstat_On_Conflict>;
};

/** input type for inserting data into table "wstat" */
export type Wstat_Insert_Input = {
  average_msg_size?: Maybe<Scalars['Int']>;
  backlog_size?: Maybe<Scalars['Int']>;
  bytes_in_counter?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  message_backlog?: Maybe<Scalars['Int']>;
  msg_in_counter?: Maybe<Scalars['Int']>;
  msg_rate_in?: Maybe<Scalars['Int']>;
  msg_rate_out?: Maybe<Scalars['Int']>;
  msg_throughput_in?: Maybe<Scalars['Int']>;
  msg_throughput_out?: Maybe<Scalars['Int']>;
  storage_size?: Maybe<Scalars['Int']>;
  total_messages?: Maybe<Scalars['Int']>;
  workspace?: Maybe<Workspace_Obj_Rel_Insert_Input>;
  workspace_id?: Maybe<Scalars['Int']>;
};

/** on conflict condition type for table "wstat" */
export type Wstat_On_Conflict = {
  constraint: Wstat_Constraint;
  update_columns: Array<Wstat_Update_Column>;
  where?: Maybe<Wstat_Bool_Exp>;
};

/** unique or primary key constraints on table "wstat" */
export enum Wstat_Constraint {
  /** unique or primary key constraint */
  WstatIdKey = 'wstat_id_key',
  /** unique or primary key constraint */
  WstatPkey = 'wstat_pkey'
}

/** update columns of table "wstat" */
export enum Wstat_Update_Column {
  /** column name */
  AverageMsgSize = 'average_msg_size',
  /** column name */
  BacklogSize = 'backlog_size',
  /** column name */
  BytesInCounter = 'bytes_in_counter',
  /** column name */
  Count = 'count',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MessageBacklog = 'message_backlog',
  /** column name */
  MsgInCounter = 'msg_in_counter',
  /** column name */
  MsgRateIn = 'msg_rate_in',
  /** column name */
  MsgRateOut = 'msg_rate_out',
  /** column name */
  MsgThroughputIn = 'msg_throughput_in',
  /** column name */
  MsgThroughputOut = 'msg_throughput_out',
  /** column name */
  StorageSize = 'storage_size',
  /** column name */
  TotalMessages = 'total_messages',
  /** column name */
  WorkspaceId = 'workspace_id'
}

/** append existing jsonb value of filtered columns with new jsonb value */
export type Auth_Append_Input = {
  roles?: Maybe<Scalars['jsonb']>;
};

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Auth_Delete_At_Path_Input = {
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Auth_Delete_Elem_Input = {
  roles?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Auth_Delete_Key_Input = {
  roles?: Maybe<Scalars['String']>;
};

/** input type for incrementing integer columne in table "auth" */
export type Auth_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  workspace_id?: Maybe<Scalars['Int']>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Auth_Prepend_Input = {
  roles?: Maybe<Scalars['jsonb']>;
};

/** input type for updating data in table "auth" */
export type Auth_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  roles?: Maybe<Scalars['jsonb']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['uuid']>;
  workspace_id?: Maybe<Scalars['Int']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Backlog_Append_Input = {
  cursor_details?: Maybe<Scalars['jsonb']>;
  data_ledger_details?: Maybe<Scalars['jsonb']>;
};

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Backlog_Delete_At_Path_Input = {
  cursor_details?: Maybe<Array<Maybe<Scalars['String']>>>;
  data_ledger_details?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Backlog_Delete_Elem_Input = {
  cursor_details?: Maybe<Scalars['Int']>;
  data_ledger_details?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Backlog_Delete_Key_Input = {
  cursor_details?: Maybe<Scalars['String']>;
  data_ledger_details?: Maybe<Scalars['String']>;
};

/** input type for incrementing integer columne in table "backlog" */
export type Backlog_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  message_backlog?: Maybe<Scalars['Int']>;
  storage_size?: Maybe<Scalars['Int']>;
  subscription_id?: Maybe<Scalars['Int']>;
  total_messages?: Maybe<Scalars['Int']>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Backlog_Prepend_Input = {
  cursor_details?: Maybe<Scalars['jsonb']>;
  data_ledger_details?: Maybe<Scalars['jsonb']>;
};

/** input type for updating data in table "backlog" */
export type Backlog_Set_Input = {
  broker_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  cursor_details?: Maybe<Scalars['jsonb']>;
  data_ledger_details?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['Int']>;
  message_backlog?: Maybe<Scalars['Int']>;
  stat_generated_at?: Maybe<Scalars['timestamptz']>;
  storage_size?: Maybe<Scalars['Int']>;
  subscription_id?: Maybe<Scalars['Int']>;
  topic_name?: Maybe<Scalars['String']>;
  total_messages?: Maybe<Scalars['Int']>;
};

/** input type for incrementing integer columne in table "conn" */
export type Conn_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  workspace_id?: Maybe<Scalars['Int']>;
};

/** input type for updating data in table "conn" */
export type Conn_Set_Input = {
  client_id?: Maybe<Scalars['String']>;
  connected_on?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  last_ping?: Maybe<Scalars['timestamptz']>;
  sdk_version?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  workspace_id?: Maybe<Scalars['Int']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Qstat_Append_Input = {
  publishers?: Maybe<Scalars['jsonb']>;
  replication?: Maybe<Scalars['jsonb']>;
  subscriptions?: Maybe<Scalars['jsonb']>;
};

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Qstat_Delete_At_Path_Input = {
  publishers?: Maybe<Array<Maybe<Scalars['String']>>>;
  replication?: Maybe<Array<Maybe<Scalars['String']>>>;
  subscriptions?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Qstat_Delete_Elem_Input = {
  publishers?: Maybe<Scalars['Int']>;
  replication?: Maybe<Scalars['Int']>;
  subscriptions?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Qstat_Delete_Key_Input = {
  publishers?: Maybe<Scalars['String']>;
  replication?: Maybe<Scalars['String']>;
  subscriptions?: Maybe<Scalars['String']>;
};

/** input type for incrementing integer columne in table "qstat" */
export type Qstat_Inc_Input = {
  average_msg_size?: Maybe<Scalars['Int']>;
  backlog_size?: Maybe<Scalars['Int']>;
  bytes_in_counter?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  msg_in_counter?: Maybe<Scalars['Int']>;
  msg_rate_in?: Maybe<Scalars['Int']>;
  msg_rate_out?: Maybe<Scalars['Int']>;
  msg_throughput_in?: Maybe<Scalars['Int']>;
  msg_throughput_out?: Maybe<Scalars['Int']>;
  storage_size?: Maybe<Scalars['Int']>;
  subscription_id?: Maybe<Scalars['Int']>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Qstat_Prepend_Input = {
  publishers?: Maybe<Scalars['jsonb']>;
  replication?: Maybe<Scalars['jsonb']>;
  subscriptions?: Maybe<Scalars['jsonb']>;
};

/** input type for updating data in table "qstat" */
export type Qstat_Set_Input = {
  average_msg_size?: Maybe<Scalars['Int']>;
  backlog_size?: Maybe<Scalars['Int']>;
  bytes_in_counter?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deduplication_status?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  msg_in_counter?: Maybe<Scalars['Int']>;
  msg_rate_in?: Maybe<Scalars['Int']>;
  msg_rate_out?: Maybe<Scalars['Int']>;
  msg_throughput_in?: Maybe<Scalars['Int']>;
  msg_throughput_out?: Maybe<Scalars['Int']>;
  publishers?: Maybe<Scalars['jsonb']>;
  replication?: Maybe<Scalars['jsonb']>;
  storage_size?: Maybe<Scalars['Int']>;
  subscription_id?: Maybe<Scalars['Int']>;
  subscriptions?: Maybe<Scalars['jsonb']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Sub_Append_Input = {
  original_parameters?: Maybe<Scalars['jsonb']>;
};

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Sub_Delete_At_Path_Input = {
  original_parameters?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Sub_Delete_Elem_Input = {
  original_parameters?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Sub_Delete_Key_Input = {
  original_parameters?: Maybe<Scalars['String']>;
};

/** input type for incrementing integer columne in table "sub" */
export type Sub_Inc_Input = {
  auth_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  workspace_id?: Maybe<Scalars['Int']>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Sub_Prepend_Input = {
  original_parameters?: Maybe<Scalars['jsonb']>;
};

/** input type for updating data in table "sub" */
export type Sub_Set_Input = {
  annotation?: Maybe<Scalars['String']>;
  auth_id?: Maybe<Scalars['Int']>;
  channel?: Maybe<Scalars['String']>;
  channel_type?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  geo?: Maybe<Scalars['geography']>;
  geo_radius?: Maybe<Scalars['geography']>;
  id?: Maybe<Scalars['bigint']>;
  json_path?: Maybe<Scalars['String']>;
  original_parameters?: Maybe<Scalars['jsonb']>;
  persistent?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  valid_until?: Maybe<Scalars['timestamptz']>;
  workspace_id?: Maybe<Scalars['Int']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Usr_Append_Input = {
  provider_data?: Maybe<Scalars['jsonb']>;
  user_login_history?: Maybe<Scalars['jsonb']>;
};

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Usr_Delete_At_Path_Input = {
  provider_data?: Maybe<Array<Maybe<Scalars['String']>>>;
  user_login_history?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Usr_Delete_Elem_Input = {
  provider_data?: Maybe<Scalars['Int']>;
  user_login_history?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Usr_Delete_Key_Input = {
  provider_data?: Maybe<Scalars['String']>;
  user_login_history?: Maybe<Scalars['String']>;
};

/** input type for incrementing integer columne in table "usr" */
export type Usr_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  invited_by?: Maybe<Scalars['Int']>;
  priority?: Maybe<Scalars['Int']>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Usr_Prepend_Input = {
  provider_data?: Maybe<Scalars['jsonb']>;
  user_login_history?: Maybe<Scalars['jsonb']>;
};

/** input type for updating data in table "usr" */
export type Usr_Set_Input = {
  admin?: Maybe<Scalars['Boolean']>;
  authentication_provider?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  invited_by?: Maybe<Scalars['Int']>;
  login_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  profile_picture?: Maybe<Scalars['String']>;
  provider_data?: Maybe<Scalars['jsonb']>;
  provider_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_login_history?: Maybe<Scalars['jsonb']>;
  user_timezone?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** input type for incrementing integer columne in table "ustat" */
export type Ustat_Inc_Input = {
  average_msg_size?: Maybe<Scalars['Int']>;
  backlog_size?: Maybe<Scalars['Int']>;
  bytes_in_counter?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  message_backlog?: Maybe<Scalars['Int']>;
  msg_in_counter?: Maybe<Scalars['Int']>;
  msg_rate_in?: Maybe<Scalars['Int']>;
  msg_rate_out?: Maybe<Scalars['Int']>;
  msg_throughput_in?: Maybe<Scalars['Int']>;
  msg_throughput_out?: Maybe<Scalars['Int']>;
  scount?: Maybe<Scalars['Int']>;
  storage_size?: Maybe<Scalars['Int']>;
  total_messages?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
  wcount?: Maybe<Scalars['Int']>;
};

/** input type for updating data in table "ustat" */
export type Ustat_Set_Input = {
  average_msg_size?: Maybe<Scalars['Int']>;
  backlog_size?: Maybe<Scalars['Int']>;
  bytes_in_counter?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  message_backlog?: Maybe<Scalars['Int']>;
  msg_in_counter?: Maybe<Scalars['Int']>;
  msg_rate_in?: Maybe<Scalars['Int']>;
  msg_rate_out?: Maybe<Scalars['Int']>;
  msg_throughput_in?: Maybe<Scalars['Int']>;
  msg_throughput_out?: Maybe<Scalars['Int']>;
  scount?: Maybe<Scalars['Int']>;
  storage_size?: Maybe<Scalars['Int']>;
  total_messages?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
  wcount?: Maybe<Scalars['Int']>;
};

/** input type for incrementing integer columne in table "workspace" */
export type Workspace_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for updating data in table "workspace" */
export type Workspace_Set_Input = {
  color?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for incrementing integer columne in table "wstat" */
export type Wstat_Inc_Input = {
  average_msg_size?: Maybe<Scalars['Int']>;
  backlog_size?: Maybe<Scalars['Int']>;
  bytes_in_counter?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  message_backlog?: Maybe<Scalars['Int']>;
  msg_in_counter?: Maybe<Scalars['Int']>;
  msg_rate_in?: Maybe<Scalars['Int']>;
  msg_rate_out?: Maybe<Scalars['Int']>;
  msg_throughput_in?: Maybe<Scalars['Int']>;
  msg_throughput_out?: Maybe<Scalars['Int']>;
  storage_size?: Maybe<Scalars['Int']>;
  total_messages?: Maybe<Scalars['Int']>;
  workspace_id?: Maybe<Scalars['Int']>;
};

/** input type for updating data in table "wstat" */
export type Wstat_Set_Input = {
  average_msg_size?: Maybe<Scalars['Int']>;
  backlog_size?: Maybe<Scalars['Int']>;
  bytes_in_counter?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  message_backlog?: Maybe<Scalars['Int']>;
  msg_in_counter?: Maybe<Scalars['Int']>;
  msg_rate_in?: Maybe<Scalars['Int']>;
  msg_rate_out?: Maybe<Scalars['Int']>;
  msg_throughput_in?: Maybe<Scalars['Int']>;
  msg_throughput_out?: Maybe<Scalars['Int']>;
  storage_size?: Maybe<Scalars['Int']>;
  total_messages?: Maybe<Scalars['Int']>;
  workspace_id?: Maybe<Scalars['Int']>;
};

/** subscription root */
export type Subscription_Root = {
   __typename?: 'subscription_root';
  /** fetch data from the table: "auth" */
  auth: Array<Auth>;
  /** fetch aggregated fields from the table: "auth" */
  auth_aggregate: Auth_Aggregate;
  /** fetch data from the table: "auth" using primary key columns */
  auth_by_pk?: Maybe<Auth>;
  /** fetch data from the table: "backlog" */
  backlog: Array<Backlog>;
  /** fetch aggregated fields from the table: "backlog" */
  backlog_aggregate: Backlog_Aggregate;
  /** fetch data from the table: "backlog" using primary key columns */
  backlog_by_pk?: Maybe<Backlog>;
  /** fetch data from the table: "conn" */
  conn: Array<Conn>;
  /** fetch aggregated fields from the table: "conn" */
  conn_aggregate: Conn_Aggregate;
  /** fetch data from the table: "conn" using primary key columns */
  conn_by_pk?: Maybe<Conn>;
  /** fetch data from the table: "qstat" */
  qstat: Array<Qstat>;
  /** fetch aggregated fields from the table: "qstat" */
  qstat_aggregate: Qstat_Aggregate;
  /** fetch data from the table: "qstat" using primary key columns */
  qstat_by_pk?: Maybe<Qstat>;
  /** fetch data from the table: "sub" */
  sub: Array<Sub>;
  /** fetch aggregated fields from the table: "sub" */
  sub_aggregate: Sub_Aggregate;
  /** fetch data from the table: "sub" using primary key columns */
  sub_by_pk?: Maybe<Sub>;
  /** fetch data from the table: "usr" */
  usr: Array<Usr>;
  /** fetch aggregated fields from the table: "usr" */
  usr_aggregate: Usr_Aggregate;
  /** fetch data from the table: "usr" using primary key columns */
  usr_by_pk?: Maybe<Usr>;
  /** fetch data from the table: "ustat" */
  ustat: Array<Ustat>;
  /** fetch aggregated fields from the table: "ustat" */
  ustat_aggregate: Ustat_Aggregate;
  /** fetch data from the table: "ustat" using primary key columns */
  ustat_by_pk?: Maybe<Ustat>;
  /** fetch data from the table: "workspace" */
  workspace: Array<Workspace>;
  /** fetch aggregated fields from the table: "workspace" */
  workspace_aggregate: Workspace_Aggregate;
  /** fetch data from the table: "workspace" using primary key columns */
  workspace_by_pk?: Maybe<Workspace>;
  /** fetch data from the table: "wstat" */
  wstat: Array<Wstat>;
  /** fetch aggregated fields from the table: "wstat" */
  wstat_aggregate: Wstat_Aggregate;
  /** fetch data from the table: "wstat" using primary key columns */
  wstat_by_pk?: Maybe<Wstat>;
};


/** subscription root */
export type Subscription_RootAuthArgs = {
  distinct_on?: Maybe<Array<Auth_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Order_By>>;
  where?: Maybe<Auth_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAuth_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Order_By>>;
  where?: Maybe<Auth_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAuth_By_PkArgs = {
  id: Scalars['Int'];
  workspace_id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootBacklogArgs = {
  distinct_on?: Maybe<Array<Backlog_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Backlog_Order_By>>;
  where?: Maybe<Backlog_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBacklog_AggregateArgs = {
  distinct_on?: Maybe<Array<Backlog_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Backlog_Order_By>>;
  where?: Maybe<Backlog_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBacklog_By_PkArgs = {
  id: Scalars['Int'];
  subscription_id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootConnArgs = {
  distinct_on?: Maybe<Array<Conn_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Conn_Order_By>>;
  where?: Maybe<Conn_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootConn_AggregateArgs = {
  distinct_on?: Maybe<Array<Conn_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Conn_Order_By>>;
  where?: Maybe<Conn_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootConn_By_PkArgs = {
  id: Scalars['Int'];
  workspace_id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootQstatArgs = {
  distinct_on?: Maybe<Array<Qstat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Qstat_Order_By>>;
  where?: Maybe<Qstat_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQstat_AggregateArgs = {
  distinct_on?: Maybe<Array<Qstat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Qstat_Order_By>>;
  where?: Maybe<Qstat_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQstat_By_PkArgs = {
  id: Scalars['Int'];
  subscription_id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootSubArgs = {
  distinct_on?: Maybe<Array<Sub_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sub_Order_By>>;
  where?: Maybe<Sub_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSub_AggregateArgs = {
  distinct_on?: Maybe<Array<Sub_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sub_Order_By>>;
  where?: Maybe<Sub_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSub_By_PkArgs = {
  id: Scalars['bigint'];
  workspace_id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUsrArgs = {
  distinct_on?: Maybe<Array<Usr_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Usr_Order_By>>;
  where?: Maybe<Usr_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsr_AggregateArgs = {
  distinct_on?: Maybe<Array<Usr_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Usr_Order_By>>;
  where?: Maybe<Usr_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsr_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUstatArgs = {
  distinct_on?: Maybe<Array<Ustat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ustat_Order_By>>;
  where?: Maybe<Ustat_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUstat_AggregateArgs = {
  distinct_on?: Maybe<Array<Ustat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ustat_Order_By>>;
  where?: Maybe<Ustat_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUstat_By_PkArgs = {
  id: Scalars['Int'];
  user_id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootWorkspaceArgs = {
  distinct_on?: Maybe<Array<Workspace_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Workspace_Order_By>>;
  where?: Maybe<Workspace_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootWorkspace_AggregateArgs = {
  distinct_on?: Maybe<Array<Workspace_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Workspace_Order_By>>;
  where?: Maybe<Workspace_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootWorkspace_By_PkArgs = {
  id: Scalars['Int'];
  user_id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootWstatArgs = {
  distinct_on?: Maybe<Array<Wstat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Wstat_Order_By>>;
  where?: Maybe<Wstat_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootWstat_AggregateArgs = {
  distinct_on?: Maybe<Array<Wstat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Wstat_Order_By>>;
  where?: Maybe<Wstat_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootWstat_By_PkArgs = {
  id: Scalars['Int'];
  workspace_id: Scalars['Int'];
};

/** input type for inserting object relation for remote table "backlog" */
export type Backlog_Obj_Rel_Insert_Input = {
  data: Backlog_Insert_Input;
  on_conflict?: Maybe<Backlog_On_Conflict>;
};

/** input type for inserting object relation for remote table "conn" */
export type Conn_Obj_Rel_Insert_Input = {
  data: Conn_Insert_Input;
  on_conflict?: Maybe<Conn_On_Conflict>;
};

/** input type for inserting object relation for remote table "qstat" */
export type Qstat_Obj_Rel_Insert_Input = {
  data: Qstat_Insert_Input;
  on_conflict?: Maybe<Qstat_On_Conflict>;
};

/** input type for inserting object relation for remote table "ustat" */
export type Ustat_Obj_Rel_Insert_Input = {
  data: Ustat_Insert_Input;
  on_conflict?: Maybe<Ustat_On_Conflict>;
};

/** input type for inserting object relation for remote table "wstat" */
export type Wstat_Obj_Rel_Insert_Input = {
  data: Wstat_Insert_Input;
  on_conflict?: Maybe<Wstat_On_Conflict>;
};

export type UserAuthsQueryVariables = {};


export type UserAuthsQuery = (
  { __typename?: 'query_root' }
  & { auth: Array<(
    { __typename?: 'auth' }
    & Pick<Auth, 'created_at' | 'id' | 'name' | 'roles' | 'status' | 'type' | 'value' | 'workspace_id'>
    & { workspace: (
      { __typename?: 'workspace' }
      & Pick<Workspace, 'color' | 'description' | 'id' | 'name' | 'status' | 'updated_at' | 'created_at'>
    ) }
  )> }
);

export type UserConnSubscriptionVariables = {};


export type UserConnSubscription = (
  { __typename?: 'subscription_root' }
  & { conn: Array<(
    { __typename?: 'conn' }
    & Pick<Conn, 'client_id' | 'connected_on' | 'id' | 'last_ping' | 'sdk_version' | 'status' | 'uid' | 'updated_at'>
  )> }
);

export type PlaygroundCredsQueryVariables = {};


export type PlaygroundCredsQuery = (
  { __typename?: 'query_root' }
  & { auth: Array<(
    { __typename?: 'auth' }
    & Pick<Auth, 'created_at' | 'id' | 'name' | 'roles' | 'status' | 'type' | 'value' | 'workspace_id'>
  )> }
);

export type UserSubsQueryVariables = {};


export type UserSubsQuery = (
  { __typename?: 'query_root' }
  & { sub: Array<(
    { __typename?: 'sub' }
    & Pick<Sub, 'channel' | 'channel_type' | 'created_at' | 'geo' | 'geo_radius' | 'id' | 'json_path' | 'status' | 'type' | 'updated_at' | 'valid_until' | 'workspace_id'>
    & { workspace: (
      { __typename?: 'workspace' }
      & Pick<Workspace, 'color' | 'description' | 'id' | 'name' | 'status'>
    ) }
  )> }
);

export type SubBacklogSubscriptionVariables = {
  subId?: Maybe<Scalars['bigint']>;
  limit?: Maybe<Scalars['Int']>;
};


export type SubBacklogSubscription = (
  { __typename?: 'subscription_root' }
  & { backlog: Array<(
    { __typename?: 'backlog' }
    & Pick<Backlog, 'id' | 'created_at' | 'cursor_details' | 'message_backlog' | 'stat_generated_at' | 'storage_size' | 'subscription_id' | 'topic_name' | 'total_messages'>
    & { sub: (
      { __typename?: 'sub' }
      & Pick<Sub, 'id' | 'original_parameters' | 'channel' | 'created_at' | 'geo' | 'json_path' | 'geo_radius' | 'channel_type' | 'persistent' | 'status' | 'type' | 'updated_at'>
    ) }
  )> }
);

export type SubQstatSubscriptionVariables = {
  subId?: Maybe<Scalars['bigint']>;
  limit?: Maybe<Scalars['Int']>;
};


export type SubQstatSubscription = (
  { __typename?: 'subscription_root' }
  & { qstat: Array<(
    { __typename?: 'qstat' }
    & Pick<Qstat, 'average_msg_size' | 'backlog_size' | 'bytes_in_counter' | 'created_at' | 'deduplication_status' | 'id' | 'msg_in_counter' | 'msg_rate_in' | 'msg_rate_out' | 'msg_throughput_in' | 'msg_throughput_out' | 'storage_size'>
    & { sub: (
      { __typename?: 'sub' }
      & Pick<Sub, 'id'>
    ) }
  )> }
);

export type UserStatsSubscriptionVariables = {};


export type UserStatsSubscription = (
  { __typename?: 'subscription_root' }
  & { ustat: Array<(
    { __typename?: 'ustat' }
    & Pick<Ustat, 'average_msg_size' | 'backlog_size' | 'wcount' | 'scount' | 'bytes_in_counter' | 'created_at' | 'id' | 'message_backlog' | 'msg_in_counter' | 'msg_rate_in' | 'msg_rate_out' | 'msg_throughput_in' | 'msg_throughput_out' | 'storage_size' | 'total_messages' | 'user_id'>
  )> }
);


export const UserAuthsDocument = gql`
    query UserAuths {
  auth {
    created_at
    id
    name
    roles
    status
    type
    value
    workspace_id
    workspace {
      color
      description
      id
      name
      status
      updated_at
      created_at
    }
  }
}
    `;
export type UserAuthsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UserAuthsQuery, UserAuthsQueryVariables>, 'query'>;

    export const UserAuthsComponent = (props: UserAuthsComponentProps) => (
      <ApolloReactComponents.Query<UserAuthsQuery, UserAuthsQueryVariables> query={UserAuthsDocument} {...props} />
    );
    
export type UserAuthsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<UserAuthsQuery, UserAuthsQueryVariables>
    } & TChildProps;
export function withUserAuths<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UserAuthsQuery,
  UserAuthsQueryVariables,
  UserAuthsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, UserAuthsQuery, UserAuthsQueryVariables, UserAuthsProps<TChildProps, TDataName>>(UserAuthsDocument, {
      alias: 'userAuths',
      ...operationOptions
    });
};
export type UserAuthsQueryResult = ApolloReactCommon.QueryResult<UserAuthsQuery, UserAuthsQueryVariables>;
export const UserConnDocument = gql`
    subscription UserConn {
  conn(limit: 100, order_by: {last_ping: desc}) {
    client_id
    connected_on
    id
    last_ping
    sdk_version
    status
    uid
    updated_at
  }
}
    `;
export type UserConnComponentProps = Omit<ApolloReactComponents.SubscriptionComponentOptions<UserConnSubscription, UserConnSubscriptionVariables>, 'subscription'>;

    export const UserConnComponent = (props: UserConnComponentProps) => (
      <ApolloReactComponents.Subscription<UserConnSubscription, UserConnSubscriptionVariables> subscription={UserConnDocument} {...props} />
    );
    
export type UserConnProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<UserConnSubscription, UserConnSubscriptionVariables>
    } & TChildProps;
export function withUserConn<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UserConnSubscription,
  UserConnSubscriptionVariables,
  UserConnProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withSubscription<TProps, UserConnSubscription, UserConnSubscriptionVariables, UserConnProps<TChildProps, TDataName>>(UserConnDocument, {
      alias: 'userConn',
      ...operationOptions
    });
};
export type UserConnSubscriptionResult = ApolloReactCommon.SubscriptionResult<UserConnSubscription>;
export const PlaygroundCredsDocument = gql`
    query PlaygroundCreds {
  auth(distinct_on: type, where: {roles: {_contains: "api"}, type: {}, workspace_id: {}, workspace: {_and: {}}}) {
    created_at
    id
    name
    roles
    status
    type
    value
    workspace_id
  }
}
    `;
export type PlaygroundCredsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PlaygroundCredsQuery, PlaygroundCredsQueryVariables>, 'query'>;

    export const PlaygroundCredsComponent = (props: PlaygroundCredsComponentProps) => (
      <ApolloReactComponents.Query<PlaygroundCredsQuery, PlaygroundCredsQueryVariables> query={PlaygroundCredsDocument} {...props} />
    );
    
export type PlaygroundCredsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<PlaygroundCredsQuery, PlaygroundCredsQueryVariables>
    } & TChildProps;
export function withPlaygroundCreds<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  PlaygroundCredsQuery,
  PlaygroundCredsQueryVariables,
  PlaygroundCredsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, PlaygroundCredsQuery, PlaygroundCredsQueryVariables, PlaygroundCredsProps<TChildProps, TDataName>>(PlaygroundCredsDocument, {
      alias: 'playgroundCreds',
      ...operationOptions
    });
};
export type PlaygroundCredsQueryResult = ApolloReactCommon.QueryResult<PlaygroundCredsQuery, PlaygroundCredsQueryVariables>;
export const UserSubsDocument = gql`
    query UserSubs {
  sub {
    channel
    channel_type
    created_at
    geo
    geo_radius
    id
    json_path
    status
    type
    updated_at
    valid_until
    workspace_id
    workspace {
      color
      description
      id
      name
      status
    }
  }
}
    `;
export type UserSubsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UserSubsQuery, UserSubsQueryVariables>, 'query'>;

    export const UserSubsComponent = (props: UserSubsComponentProps) => (
      <ApolloReactComponents.Query<UserSubsQuery, UserSubsQueryVariables> query={UserSubsDocument} {...props} />
    );
    
export type UserSubsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<UserSubsQuery, UserSubsQueryVariables>
    } & TChildProps;
export function withUserSubs<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UserSubsQuery,
  UserSubsQueryVariables,
  UserSubsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, UserSubsQuery, UserSubsQueryVariables, UserSubsProps<TChildProps, TDataName>>(UserSubsDocument, {
      alias: 'userSubs',
      ...operationOptions
    });
};
export type UserSubsQueryResult = ApolloReactCommon.QueryResult<UserSubsQuery, UserSubsQueryVariables>;
export const SubBacklogDocument = gql`
    subscription SubBacklog($subId: bigint, $limit: Int) {
  backlog(where: {sub: {id: {_eq: $subId}}}, limit: $limit) {
    id
    created_at
    cursor_details
    message_backlog
    stat_generated_at
    storage_size
    subscription_id
    topic_name
    total_messages
    sub {
      id
      original_parameters
      channel
      created_at
      geo
      json_path
      geo_radius
      channel_type
      persistent
      status
      type
      updated_at
    }
  }
}
    `;
export type SubBacklogComponentProps = Omit<ApolloReactComponents.SubscriptionComponentOptions<SubBacklogSubscription, SubBacklogSubscriptionVariables>, 'subscription'>;

    export const SubBacklogComponent = (props: SubBacklogComponentProps) => (
      <ApolloReactComponents.Subscription<SubBacklogSubscription, SubBacklogSubscriptionVariables> subscription={SubBacklogDocument} {...props} />
    );
    
export type SubBacklogProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SubBacklogSubscription, SubBacklogSubscriptionVariables>
    } & TChildProps;
export function withSubBacklog<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SubBacklogSubscription,
  SubBacklogSubscriptionVariables,
  SubBacklogProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withSubscription<TProps, SubBacklogSubscription, SubBacklogSubscriptionVariables, SubBacklogProps<TChildProps, TDataName>>(SubBacklogDocument, {
      alias: 'subBacklog',
      ...operationOptions
    });
};
export type SubBacklogSubscriptionResult = ApolloReactCommon.SubscriptionResult<SubBacklogSubscription>;
export const SubQstatDocument = gql`
    subscription SubQstat($subId: bigint, $limit: Int) {
  qstat(where: {sub: {id: {_eq: $subId}}}, limit: $limit) {
    average_msg_size
    backlog_size
    bytes_in_counter
    created_at
    deduplication_status
    id
    msg_in_counter
    msg_rate_in
    msg_rate_out
    msg_throughput_in
    msg_throughput_out
    storage_size
    sub {
      id
    }
  }
}
    `;
export type SubQstatComponentProps = Omit<ApolloReactComponents.SubscriptionComponentOptions<SubQstatSubscription, SubQstatSubscriptionVariables>, 'subscription'>;

    export const SubQstatComponent = (props: SubQstatComponentProps) => (
      <ApolloReactComponents.Subscription<SubQstatSubscription, SubQstatSubscriptionVariables> subscription={SubQstatDocument} {...props} />
    );
    
export type SubQstatProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SubQstatSubscription, SubQstatSubscriptionVariables>
    } & TChildProps;
export function withSubQstat<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SubQstatSubscription,
  SubQstatSubscriptionVariables,
  SubQstatProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withSubscription<TProps, SubQstatSubscription, SubQstatSubscriptionVariables, SubQstatProps<TChildProps, TDataName>>(SubQstatDocument, {
      alias: 'subQstat',
      ...operationOptions
    });
};
export type SubQstatSubscriptionResult = ApolloReactCommon.SubscriptionResult<SubQstatSubscription>;
export const UserStatsDocument = gql`
    subscription UserStats {
  ustat(limit: 1, order_by: {created_at: desc}) {
    average_msg_size
    backlog_size
    wcount
    scount
    bytes_in_counter
    created_at
    id
    message_backlog
    msg_in_counter
    msg_rate_in
    msg_rate_out
    msg_throughput_in
    msg_throughput_out
    storage_size
    total_messages
    user_id
  }
}
    `;
export type UserStatsComponentProps = Omit<ApolloReactComponents.SubscriptionComponentOptions<UserStatsSubscription, UserStatsSubscriptionVariables>, 'subscription'>;

    export const UserStatsComponent = (props: UserStatsComponentProps) => (
      <ApolloReactComponents.Subscription<UserStatsSubscription, UserStatsSubscriptionVariables> subscription={UserStatsDocument} {...props} />
    );
    
export type UserStatsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<UserStatsSubscription, UserStatsSubscriptionVariables>
    } & TChildProps;
export function withUserStats<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UserStatsSubscription,
  UserStatsSubscriptionVariables,
  UserStatsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withSubscription<TProps, UserStatsSubscription, UserStatsSubscriptionVariables, UserStatsProps<TChildProps, TDataName>>(UserStatsDocument, {
      alias: 'userStats',
      ...operationOptions
    });
};
export type UserStatsSubscriptionResult = ApolloReactCommon.SubscriptionResult<UserStatsSubscription>;