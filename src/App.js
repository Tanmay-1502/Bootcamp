import React ,{useState} from 'react';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useToken from './components/UseToken';
import Demo from './components/Demo';
import Issues from './components/Issues';
import Alert from './components/Alert';

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

function App() {
  
  //const [token, setToken] = useState();
//   const { token, setToken } = useToken();
//  // const token = getToken();
//   if(!token) {
//     return <Login setToken={setToken} />
//   }
//   return (
//     <div className="App">
//          <h1>Oil Rig Dashboard</h1>
//        <Routes>
//          {/* <Route path="/" element={<Login setToken={setToken} />} /> */}
//          <Route path="/" element={<Alert />} /> 
      
//       </Routes>

//   {/* <Login/>
//   <Dashboard/> */}
  return (
    <div className="App">
{/* <Issues/> */}
<Alert/>
{/* <Dashboard/> */}
    </div>
  )
}

export default App;
