/* eslint-disable no-unused-vars */
import "./App.css";
import CreateQuotation from "./Pages/CreateQuotation";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
const App = () => {
  return (
  <div>
    <Provider store={store}>
      <CreateQuotation />
      </Provider>
  </div>
  )
};

export default App;
