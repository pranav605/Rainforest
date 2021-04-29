
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div className='page'>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path='/' component={Home}></Route>
          </Switch>
        </BrowserRouter>
       </div>
    </div>
  );
}

export default App;
