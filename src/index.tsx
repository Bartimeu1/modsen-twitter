import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';

import { persistor, store } from '@store/store';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from '@root/App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
);

