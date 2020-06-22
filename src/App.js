import React from 'react';
import Main from './pages/Main';
import { Provider } from 'react-redux';
import './ReactotronConfig';
import store from './store';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Provider store={store}>
      <Main />
      <Footer />
    </Provider>
  );
}

export default App;
