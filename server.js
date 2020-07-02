const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'service', url: 'http://service:9090/graphql' },
    { name: 'dq-details', url: 'http://dq-details:9091/graphql' },
    { name: 'operator', url: 'http://operator:9092/graphql' },
  ],
});

const server = new ApolloServer({
  gateway,

  subscriptions: false,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});