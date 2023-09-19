// import logo from './logo.svg';
import {Routes, Route} from 'react-router-dom'
import Style from './Components/Style.css';
import Assignment from './Components/Assignment';
import Nav from './Components/Nav';
// import { Route } from 'react-router';

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Assignment/>}/>
        {/* <Route path='/' element={<Assignment/>}/>
        <Route path='/' element={<Assignment/>}/>
        <Route path='/' element={<Assignment/>}/>
        <Route path='/' element={<Assignment/>}/> */}

      </Routes>
      {/* <Assignment/> */}
      
    </>
  );
}

export default App;
