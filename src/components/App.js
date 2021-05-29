import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from "./home/home";
import MainTemplate from "./mainLayout/template/mainTemplate";

import '../css/styles.css'

function App() {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </ MainTemplate>
    </BrowserRouter>
  );
}

export default App;
