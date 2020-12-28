
import './App.css';
import { BrowserRouter  as Router, Switch,Route} from 'react-router-dom'
import HomePage from './component/pages/HomePage';
import LoginPage from './component/pages/LoginPage';
import MenuPage from './component/pages/MenuPage'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPage}></Route>
        <Route path="/home" component={HomePage}></Route>
        <Route path="/menu" component={MenuPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
