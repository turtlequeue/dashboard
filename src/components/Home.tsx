import React, { useEffect, useState } from 'react';
import 'bulma';
import styled from 'styled-components';
import * as rm from 'typed-rest-client';
import config from '../config'
import LoaderWrapper from './Loading';
import Error from './Error';
import { UserStatsComponent } from '../generated/graphql';

const StyledInfoTiles = styled.section`
  margin: 1rem 0;
`

type CheckStatus = "ok" | "warn" | "error" | "fetching";

type HealthcheckInterface = {
  overallStatus: CheckStatus
  "last-checks": Array<CheckStatus>
  checks: any
  "last-updated": any
  "checks-found": any
  startTime: any
  version: string
}

const CheckColorDot = styled.span`
  padding: 8px;
  border-radius: 2px;
  &.ok {background-color: lightgrey;}
  &.warn { background-color: lightyellow}
  &.error{ background-color: lightgreen}
  &.fetching{ background-color: lightgrey}
`

const checkDesc: Record<CheckStatus, string> = {
  "warn": "no disruption: all critical systems operational, some subsystems off",
  "ok": "all systems healthy",
  "error": "errors in important subsystems",
  "fetching": "loading healthcheck data..."
};

const Slice = styled.span`
  display: inline-block;
  width: 6px;
  height: 2rem;
  margin: 3px;
  padding-bottom: 1rem;
  transition: all .1s ease-in-out;

  &.ok {background-color: green;}
  &.warn { background-color: darkorange}
  &.error{ background-color: red}
  &.fetching{ background-color: lightgrey}

  &:hover {
  transform: scale(1.3);
  }
`

function StatusArray(data: HealthcheckInterface | undefined) {
  const lastChecks = (data && data["last-checks"]) || [];
  const slices = lastChecks.slice(0, 40).map((v, i) => { return <Slice key={i} className={v} />; });
  return <div style={{ height: "3rem", margin: '12px 0px' }}> {slices} </div >
}

function Healthcheck() {

  const [data, setHealthData] = useState<HealthcheckInterface>();

  // TODO periodic poll
  useEffect(() => {
    let didCancel = false;

    async function updateLatestHc() {
      let rest: rm.RestClient = new rm.RestClient('hc', config.turtle.protocol + "://" + config.turtle.host);

      let resp: rm.IRestResponse<HealthcheckInterface> = await rest.get<HealthcheckInterface>('/api/health/check');
      if (!didCancel) {
        setHealthData(resp.result || undefined);
      }
    }
    updateLatestHc()

    return () => { didCancel = true; };
  }, []);

  const st = data?.overallStatus || "fetching";
  const desc = checkDesc[st];

  return <section className="section">
    <h2 className="title">Service status</h2>
    <p>
      <CheckColorDot className={st}>{st}</CheckColorDot> : {desc}
    </p>
    {StatusArray(data)}
  </section>
}

function nFormatter(num: number, digits: number) {
  // https://stackoverflow.com/a/9462382
  var si = [
    { value: 1, symbol: "" },
    { value: 1E3, symbol: "k" },
    { value: 1E6, symbol: "M" },
    { value: 1E9, symbol: "G" },
    { value: 1E12, symbol: "T" },
    { value: 1E15, symbol: "P" },
    { value: 1E18, symbol: "E" }
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}

function UserStatsTiles() {
  return <UserStatsComponent>
    {(result) => {

      const wcount = result?.data?.ustat[0].wcount;
      const scount = result?.data?.ustat[0].scount;
      const totalMessages = result?.data?.ustat[0].total_messages;
      const totalBacklog = result?.data?.ustat[0].message_backlog;

      return <LoaderWrapper overlayLoader={result.loading}><StyledInfoTiles className="info-tiles">
        <div className="tile is-ancestor has-text-centered">
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="title">{wcount ? nFormatter(wcount, 1) : 0}</p>
              <p className="subtitle">Workspaces</p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="title">{scount ? nFormatter(scount, 1) : 0}</p>
              <p className="subtitle">Subscriptions</p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="title">{totalMessages ? nFormatter(totalMessages, 1) : 0}</p>
              <p className="subtitle">Messages Stored</p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="title">{totalBacklog ? nFormatter(totalBacklog, 1) : 0}</p>
              <p className="subtitle">Backlog</p>
            </article>
          </div>
        </div>
      </StyledInfoTiles></LoaderWrapper>

    }}
  </UserStatsComponent>

}
function Home() {
  return <div>
    <section className="hero is-info welcome is-small">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Hello, Admin.
          </h1>
          <h2 className="subtitle"> I hope you are having a great day! </h2>
        </div>
      </div>
    </section>
    <Healthcheck />
    <UserStatsTiles />
  </div>
}

export default Home;
