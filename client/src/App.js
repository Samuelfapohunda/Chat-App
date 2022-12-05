import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/LogIn';
import Join from './pages/Join';
import Success from './pages/Success';
import Chat from './pages/Chat';
import './App.css';

function App() {
  return (
    <div className="App">

<Router>
      <Routes>

  <Route path='/' element={< SignUp />} />
  <Route path='/login' element={< Login/>} />
  <Route path='/join' element={< Join/>} />
  <Route path='/successful' element={< Success />} />
  <Route path='/room' element={< Chat/>} />
  

</Routes>
     </Router>

    </div>
  );
}

export default App;
