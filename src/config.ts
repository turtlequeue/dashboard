const apolloDevToken = process.env.REACT_APP_APOLLO_SESSION_COOKIE;

if (process.env.NODE_ENV === 'development' && apolloDevToken === '<SEE_README>') {
  console.warn('REACT_APP_APOLLO_SESSION_COOKIE is not set in .env.development. See the README for how to et up credentials');
}

const config = {
  version: "0.0.1",
  turtle: {
    host: process.env.REACT_APP_TURTLEQUEUE_HOST,
    type: process.env.REACT_APP_TURTLEQUEUE_TYPE,
    protocol: process.env.REACT_APP_TURTLEQUEUE_PROTOCOL,
  },
  apollo: {
    uri: process.env.REACT_APP_APOLLO_URI,
    options: {
      reconnect: true,
      connectionParams: async () => {
        if (apolloDevToken) {
          return {
            headers: {
              Authorization: `Bearer ${apolloDevToken}`;
            }
          }
        }
      }
    }
  }
}

console.log('CONFIG: ', JSON.stringify(config, null, 2))
export default config;