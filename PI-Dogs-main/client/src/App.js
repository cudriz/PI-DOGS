
import {Route, BrowserRouter} from 'react-router-dom'
import Home from './views/home/Home'
import Detail from './views/detail/Detail'
import Create from './views/create/Create';
import Landing from './views/landing/Landing'


function App() {
  return (
    <BrowserRouter>
    <div >
      <Route path='/' element={Landing}/>
      <Route  path='/home' element={<Home/>}/>
      <Route path='/detail:id' element={ <Detail/>}/>
      <Route path='/create' element={<Create/>}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
