import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'
import Register from './register/Register';
import Nav from './Nav/Nav';
import Login from './login/Login';
import Logout from './logout/Logout';
import Home from './home/Home';
import MovieTetail from './movietetail/MovieTetail';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';

function App() {

  let navigate = useNavigate()
  const [userData, setuserData] = useState(null)
  function getUserData() {
    let decodedDate = jwtDecode(localStorage.getItem("userToKen"))
    setuserData(decodedDate)
  }

  function logout() {
    localStorage.removeItem('userToKen')
    setuserData(null)
    navigate('/login')
  }

  function ProtectedRoute({ children }) {
    if (!localStorage.getItem('userToKen')) {
      return <Navigate to='/login' />
    } else {
      return children
    }
  }
  return <>
    <Nav userData={userData} logout={logout}></Nav>
    <div className='container'>
      <Routes>
        <Route path='/' element={<Login />} />

        <Route path='home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='login' element={<Login getUserData={getUserData} />} />
        <Route path='logout' element={<Logout />} />
        <Route path='register' element={<Register />} />
        <Route path='movietetail' element={<MovieTetail />} >
          <Route path=':id' element={<MovieTetail />} />
        </Route>

        <Route path='*' element={<Home />} />

      </Routes>
    </div>
  </>
}

export default App;
