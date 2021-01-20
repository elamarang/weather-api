import './App.css';
import SearchBar from './SearchBar';
import Banner from './Banner';
import DeveloperInfo from './DeveloperInfo';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Banner/>
      
      <Switch>
          <Route exact path="/">
          <SearchBar/>
          </Route>
          <Route path="/devinfo">
            <DeveloperInfo/>
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
