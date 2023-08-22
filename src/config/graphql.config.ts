import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: 'https://template-onboarding-node-sjz6wnaoia-uc.a.run.app/graphql',
  cache: new InMemoryCache(),
});
