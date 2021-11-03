import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Invoice from './components/Invoice';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/invoice">
          <Invoice/>
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
