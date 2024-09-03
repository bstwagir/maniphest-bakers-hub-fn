import { Route, Routes } from 'react-router-dom';
 //import './App.css';
 import Home from './pages/Home';
 import Auth from './pages/Auth';

 function App() {
   return (
     <div className="App">
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/auth' element={<Auth/>} />
        </Routes>        
     </div>
   );
 }

 export default App;