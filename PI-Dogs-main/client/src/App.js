import {Home, Landing,Form, Detail} from './views'
import { Route} from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import { useLocation } from 'react-router-dom';


function App() {
  const location = useLocation()
  return (
  <div>
    {location.pathname !== "/" && <Navbar/> }
 <Route exact path='/' component={Landing}/>
 <Route exact path='/detail/:id' component={Detail}/>
 <Route exact path='/create' component={Form}/>
 
 <Route path='/home' render={() => <Home/>}/>
 
 
 
     
  </div>
  );
}

export default App;
