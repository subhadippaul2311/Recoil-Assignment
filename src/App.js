// import logo from './logo.svg';
import './App.css';

import{BrowserRouter,Routes,Route} from 'react-router-dom'
import {Home} from './component/home'
import {Task} from './component/task'

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/task' element={<Task/>}/>

        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
