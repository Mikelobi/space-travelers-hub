import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Routers } from 'react-router-dom';
import store from './redux/configureStore';
import App from './App';
import { fetchRockets } from './redux/rockets/rockets';

const root = ReactDOM.createRoot(document.getElementById('root'));

store.dispatch(fetchRockets());

root.render(
  <React.StrictMode>
    <Routers>
      <Provider store={store}>
        <App />
      </Provider>
    </Routers>
  </React.StrictMode>,
);
