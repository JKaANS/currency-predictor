module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: { builder: 'vite' },
};

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
ReactDOM.createRoot(rootEl).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

import { useQuery } from '@tanstack/react-query';
import { getRate, getPrediction } from './services/api';

function useRate(base, quote) {
  return useQuery(['rate', base, quote], () => getRate(base, quote));
}

function usePrediction(base, quote, horizon) {
  return useQuery(['predict', base, quote, horizon], () =>
    getPrediction(base, quote, horizon),
    { staleTime: 1000 * 60 * 5 }
  );
}

const { data: rateData } = useRate(baseCurrency, quoteCurrency);
const { data: predData } = usePrediction(baseCurrency, quoteCurrency, horizon);