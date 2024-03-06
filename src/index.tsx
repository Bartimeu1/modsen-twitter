import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from '@root/App';
import { persistor, store } from '@store/store';
import { PersistGate } from 'redux-persist/integration/react';

import '@root/config/firebase';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
);

