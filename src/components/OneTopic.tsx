import React from 'react';
import {
  useParams
} from "react-router-dom";
import { SubBacklogComponent, SubQstatComponent, withSubBacklog, withSubQstat } from '../generated/graphql';
import LoaderWrapper from './Loading';
import Error from './Error';
import {
  useTable,
  useGroupBy,
  useFilters,
  useSortBy,
  useExpanded,
  usePagination
} from 'react-table'
import getLocale from '../lib/locale'
import * as _ from 'lodash';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Label } from 'recharts';
//import { compose } from 'recompose';

function OneTopicDisplay(result: any) {
  console.log('RESULTS', result)
  return <h1>ONE TOPIC - WITH SUBS</h1>
}


function OneTopic() {
  let { subscriptionId } = useParams();
  console.log('ONE TOPIC', subscriptionId);

  const opts = {
    subId: subscriptionId,
    limit: 10
  };


  if (!subscriptionId) {
    return <h1>Unknown subscription</h1>
  } else {
    // TODO total messages over messages in backlog. Like this? https://www.highcharts.com/demo/combo-dual-axes
    https://github.com/dotansimha/graphql-code-generator/issues/1922
    /* const RenderCompcompose: any = (
     *   withSubBacklog({ name: "withSubBacklog" }),
     *   withSubQstat({ name: "withSubQstat" }),
     * )(OneTopicDisplay) */

    return <section>
      <h2 className="subtitle">Requested topic ID: {subscriptionId}</h2>
      <SubBacklogComponent variables={opts}>
        {(resultBacklog) => {
          return <SubQstatComponent variables={opts}>
            {(resultQstat) => {
              if (resultBacklog.loading || resultQstat.loading) {
                return <span>LOADING...</span>;
              } else if (resultBacklog.error || resultQstat.error) {
                return <span>ERROR UNKNOWN SUB</span>;
              }
              else if (resultQstat.data && resultBacklog.data) {
                const backlog = resultBacklog.data.backlog;
                const qstat = resultQstat.data.qstat;

                // NEED TO SHOW THE GRAPH OF DATA
                // TODO need to confirm with the Pulsar guys - Make a clear
                // scenario using pulsar CLI first
                // NEED:
                // - backlog
                // - total messages "processsed"
                // - total messages (?)

                console.log('DATA', backlog, qstat);

                return <section>
                  <LineChart
                    width={800}
                    height={400}
                    margin={{
                      top: 5, right: 30, left: 20, bottom: 5,
                    }}
                    data={backlog}>
                    <CartesianGrid strokeDasharray="3 3" />

                    <Line type="monotone" dataKey="message_backlog" stroke="#8884d8" />

                    <XAxis dataKey="stat_generated_at" angle={-45} textAnchor="end">
                      <Label value='time' style={{ textAnchor: 'middle' }} />
                    </XAxis>
                    <YAxis dataKey="message_backlog">
                      <Label angle={-90} value='backlog messages' position='insideLeft' style={{ textAnchor: 'middle' }} />
                    </YAxis>
                  </LineChart>
                </section>;
              } else {
                // make TS happy
                return <span>ERROR UNKNOWN SUB</span>;
              }

            }}
          </SubQstatComponent>;
        }}
      </SubBacklogComponent >;
    </section>
  }
}

export default OneTopic;
