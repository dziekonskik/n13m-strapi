export default () => ({
  graphql: {
    enabled: true,
    config: {
      playgroundAlways: false,
      depthLimit: 7,
      maxLimit: 20,
      apolloServer: {
        tracing: true,
      },
    },
  },
});
