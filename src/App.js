
import PublicRoutes from './routes/PublicRoutes'
import MainNavigation from "./components/layout/MainNavigation";
import { Provider } from 'react-redux';
import store from './store/index';

function App() {

  return (
    <div data-test="app">
      <Provider store={store}>
      <MainNavigation />
      <PublicRoutes/>
      </Provider> 
    </div>
    
  );
}

export default App;
