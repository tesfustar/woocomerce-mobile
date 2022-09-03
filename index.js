/**
 * @format
 */
 import 'react-native-gesture-handler';
 import { AppRegistry } from 'react-native';
 import App from './App';
 import React from 'react';
 import { name as appName } from './app.json';
import ThemeProvider from './context/ThemeContext'
import { Provider } from 'react-redux';
import { reducers } from './reducers';
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
const store = createStore(reducers, compose(applyMiddleware(thunk)));
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});
AppRegistry.registerComponent(appName, () => () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
  <ThemeProvider>
      <App />
    </ThemeProvider>
    </QueryClientProvider>
  </Provider>
  ));