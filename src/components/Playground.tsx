import React, { useEffect, useState } from 'react';
import 'bulma';
import turtlequeue from "turtlequeue";
import Prism from "prismjs";
import '../css/prism.css'
import Error from './Error';
import LoaderWrapper from './Loading';
import * as _ from 'lodash';
import styled from 'styled-components'
import useConstant from "../_hooks/useConstant";
import { PlaygroundCredsComponent } from '../generated/graphql';
import { Console } from 'console-feed'
import config from '../config';

/* bulma: conflict for number CSS */
/* https://github.com/jgthms/bulma/issues/302#issuecomment-260451569 */
const FormWrapper = styled.pre`
.number {
  align-items: none;
  background-color: inherit;
  border-radius: inherit;
  display: inherit;
  font-size: inherit;
  height: inherit;
  justify-content: inherit;
  margin-right: inherit;
  min-width: inherit;
  padding: inherit;
  text-align: inherit;
  vertical-align: inherit;
}
`

function removeEmpty(m: turtlequeue.SubscribeOptions | turtlequeue.PublishOptions) {
  var res = m;
  if (!(res.location && res.location.lat && res.location.lon)) {
    res.location = undefined;
  }
  return _.omitBy(res, _.isNil)
}

const onFormChangeFn = (params: any, setParams: Function) => (
  (key: "id" | "channel" | "lat" | "lon" | "payload", e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLTextAreaElement;
    let cleanInnerText = _.trim(target.innerText);

    if (target && params) {
      if (params.location && (key === "lat" || key === "lon")) {
        let newVal = parseFloat(cleanInnerText);
        if (!isNaN(newVal)) {
          params.location[key] = newVal;
        }
      } else {
        params[key] = cleanInnerText;
      }
      setParams(params)
    }
  }
)

interface PubSubPlaygroundInterface {
  result: any,
  queue: turtlequeue.TurtleQueue,
  status: turtlequeue.Status
}

function SubscribeCodeForm({ result, queue, status }: PubSubPlaygroundInterface) {
  // TODO use the "test" workspace credentials
  const [subParams, setSubParams] = useState<turtlequeue.SubscribeOptions>({ id: "2147483647", channel: "playground", location: { lat: 51.5074, lon: 0.1278 } })
  const [subscribeResults, setSubscribeResults] = useState<any[]>([{
    method: "result",
    data: ["Messages received will be shown here"]
  }]);

  const [subId, subIdSet] = useState();

  const onFormChange = onFormChangeFn(subParams, setSubParams);

  const onSubscribeClick = (e: React.FormEvent<HTMLButtonElement>) => {

    queue.subscribe(removeEmpty(subParams), (err: Error | null, data: any, meta: any) => {
      setSubscribeResults((prev) => [...prev, {
        method: "result",
        data: [data]
      }].slice(-10));
    }).then((res: any) => {
      subIdSet(res.data.id)
    }).catch((err: Error) => {
      console.log('COULD NOT SUBSCRIBE', err)
    })
  }

  return <section>
    <div className="container">
      <div>
        <h2 className="title is-2">Subscribe</h2>
        <FormWrapper>
          <code className="language-javascript">{`turtlequeue.subscribe({\n`}</code>

          <code className="language-javascript">{`    id:      `}</code>
          <code contentEditable="true" suppressContentEditableWarning={true} className="language-javascript" onInput={_.partial(onFormChange, "id")}>{subParams.id}</code>
          <code className="language-javascript">{`         // edit me!\n`}</code>

          <code className="language-javascript">{`    channel: `}</code>
          <code contentEditable="true" suppressContentEditableWarning={true} className="language-javascript" onInput={_.partial(onFormChange, "channel")}>{"'" + subParams.channel + "'"}</code>
          <code className="language-javascript">{` // edit me!\n`}</code>

          <code className="language-javascript">{`    geo: lat:   `}</code>
          <code contentEditable="true" suppressContentEditableWarning={true} className="language-javascript" onInput={_.partial(onFormChange, "lat")}>{subParams.location?.lat}</code>
          <code className="language-javascript">{`\n         lon:   `}</code>
          <code contentEditable="true" suppressContentEditableWarning={true} className="language-javascript" onInput={_.partial(onFormChange, "lon")}>{subParams.location?.lon}</code>

          <code className="language-javascript">{`\n})`}</code>
        </FormWrapper>

        <button className={subId ? "button is-success is-fullwidth" : "button is-primary is-fullwidth"}
          disabled={!!subId}
          onClick={onSubscribeClick}>{!subId ? "Subscribe!" : `Subscribed! id=${subId}`}</button>

        <div style={{ backgroundColor: '#242424', minHeight: '260px', padding: '10px', borderRadius: '4px', margin: '10px 0' }}>
          <Console logs={subscribeResults} variant="dark" />
        </div>

      </div >

    </div>
  </section>
}

function PublishCodeForm({ result, queue, status }: PubSubPlaygroundInterface) {

  const [pubParams, setPubParams] = useState<turtlequeue.PublishOptions>({ channel: "playground", location: { lat: 51.5074, lon: 0.1278 }, payload: "Hello Turtle!" })
  const onFormChange = onFormChangeFn(pubParams, setPubParams);

  const onPublishClick = (e: React.FormEvent<HTMLButtonElement>) => {
    console.log('PUBLISH! ', pubParams)
    queue.publish(removeEmpty(pubParams), (err: Error | null, data: any, meta: any) => {
      console.log('PUB CB ', err, data, meta);
    }).then((res: any) => {
      console.log('PUB RES', res)
    }).catch((err: Error) => {
      console.log('COULD NOT PUBLISH', err)
    })
  }

  return <section>
    <div className="container">
      <div>
        <h2 className="title is-2">Publish</h2>
        <FormWrapper>
          <code className="language-javascript">{`turtlequeue.publish({\n`}</code>
          <code className="language-javascript">{`    channel: `}</code>
          <code contentEditable="true" suppressContentEditableWarning={true} className="language-javascript" onInput={_.partial(onFormChange, "channel")}>{"'" + pubParams.channel + "'"}</code>
          <code className="language-javascript">{` // edit me!\n`}</code>

          <code className="language-javascript">{`    geo: lat:   `}</code>
          <code contentEditable="true" suppressContentEditableWarning={true} className="language-javascript" onInput={_.partial(onFormChange, "lat")}>{pubParams.location?.lat}</code>
          <code className="language-javascript">{`\n         lon:   `}</code>
          <code contentEditable="true" suppressContentEditableWarning={true} className="language-javascript" onInput={_.partial(onFormChange, "lon")}>{pubParams.location?.lon}</code>

          <code className="language-javascript">{`\n    payload: `}</code>
          <code contentEditable="true" suppressContentEditableWarning={true} className="language-javascript" onInput={_.partial(onFormChange, "payload")}>{"'" + pubParams.payload + "'"}</code>

          <code className="language-javascript">{`\n})`}</code>
        </FormWrapper>

        <button className="button is-primary is-fullwidth" onClick={onPublishClick}>Publish!</button>
        <p> If the publish parameters match the subscription above it will be shown above. Don't forget to hot the "Subscribe!" button first! </p>
      </div >
    </div>
  </section>
}

interface StatusInterface {
  status: turtlequeue.Status
}

const StatusColorDot = styled.span`
  padding: 8px;
  border-radius: 2px;
  &.disconnected {background-color: lightgrey;}
  &.connected { background-color: lightyellow}
  &.ready{ background-color: lightgreen}
  &.authError{ background-color: palevioletred}
`

function Status({ status }: StatusInterface) {

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return <section>
    <div className="container">
      <div>Status: <StatusColorDot className={status} > {status} </StatusColorDot> </div>
    </div>
  </section>
}

function PubSubPlayground({ result, queue, status }: PubSubPlaygroundInterface) {
  return <div>
    <LoaderWrapper overlayLoader={result.loading}>
      <Status status={status} />
      <SubscribeCodeForm result={result} queue={queue} status={status} />
      <PublishCodeForm result={result} queue={queue} status={status} />
    </LoaderWrapper>
  </div>
}

function Playground() {

  // instanciate the queue object
  const queue = useConstant(() =>
    turtlequeue.create.make(config.turtle)
  );

  // handle status lifecycle
  const [status, setStatus] = useState<turtlequeue.Status>("disconnected");
  useEffect(() => {
    const onReady = () => setStatus("ready");
    // @ts-ignore
    const onConnect = (s) => {
      if (s[1]?.auth?.status === "invalid") {
        setStatus("authError")
      } else {
        setStatus("connected")
      }
    };
    const onDisconnect = () => setStatus("disconnected");

    queue.on("ready", onReady);
    queue.on("connect", onConnect);
    queue.on("disconnect", onDisconnect);

    return () => {
      /* TODO check */
      queue.unbind("ready", onReady);
      queue.unbind("connect", onConnect);
      queue.unbind("disconnect", onDisconnect);
    };
  }, [queue]);

  const [creds, setCreds] = useState({ apiKey: null, userToken: null });

  // connect once
  useEffect(() => {
    if (creds.apiKey && creds.userToken) {
      console.log('CONNECT !! ', creds)
      queue.connect(creds);
    }
    return () => {
      console.log('TODO DISCONNECT')
      /* queue.disconnect(); */
    };
  }, [creds]);


  return <PlaygroundCredsComponent>
    {(result) => {
      if (!result || result.loading) {
        return <LoaderWrapper overlayLoader={result.loading}></LoaderWrapper>
      } else if (result.error) {
        return <Error></Error>
      } else if (result.data) {
        const newCreds = ((auths) => {
          const authByType = _.groupBy(auths, (x) => (x.type))
          return {
            userToken: authByType["user-token"][0].value,
            apiKey: authByType["api-key-header"][0].value
          }
        })(result.data.auth);
        if (!_.isEqual(newCreds, creds)) {
          setTimeout(function() { setCreds(newCreds); }, 0);
        }
        return PubSubPlayground({ result, queue, status });
      }
      return <div>ok</div>

    }}
  </PlaygroundCredsComponent>

  /* TODO add brackets so it can be copy/pasted */

}
export default Playground;
