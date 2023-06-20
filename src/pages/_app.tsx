import { JSX } from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from '@mui/material/styles';

import GlobalStyle from '@/components/GlobalStyle';

import { store } from '@/redux/store';
import theme from '@/utils/theme';

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <GlobalStyle />
          <Component {...pageProps} />
        </Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
