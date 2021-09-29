import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import HomePage from './components/Pages/HomePage';
import CartPage from './components/Pages/CartPage';

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/home" component={HomePage}/>
        <Route path="/cart" component={CartPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
