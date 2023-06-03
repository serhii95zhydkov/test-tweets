import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

import { store, persistor } from 'redux/store';
import TweetsRoutes from './TweetsRoutes';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/test-tweets">
          <TweetsRoutes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
