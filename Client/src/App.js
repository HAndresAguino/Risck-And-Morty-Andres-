import './App.css';
import Card from './components/Card/Card';
import Cards from './components/Cards/Cards';
import Nav from './components/Navbar/Nav';

import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';



import axios from 'axios';




import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';







function App() {

   //_____________________________________________________ESTE ES LO ULTIMO HACER, el login _______________________________________________________________________
   const navigate = useNavigate()

   const [access, setAccess] = useState(false) //En este estado vamos a guardar los datos de usario para acceder a la app

   const EMAIL = 'Admin@gmail.com'
   const PASSWORD = 'Contra1'

   // function login(userData) {
   //    if (userData.password === PASSWORD && userData.email === EMAIL) {
   //       setAccess(true);
   //       navigate('/home');
   //    }
   // } //! Esta función se eliminó porque se remplazó con la que esta abajo en la homework de express

   function login(userData) {

      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   //___________________________________________________________________________________________________________________________________

   const [characters, setCharacters] = useState([])

   const location = useLocation();

   // function  onSearch(id) {
   //    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
   //       if (data.name) {
   //          setCharacters((oldChars) => [...oldChars, data]);
   //       } else {
   //          window.alert('¡No hay personajes con este ID!');
   //       }
   //    });
   // }

   //! Esta función se eliminó porque se remplazó con la que esta abajo en la homework de ASYNC


   async function onSearch(id) {
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)

         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      } catch (error) {

         console.log(error)

      }
   }


   const onClose = (id) => {
      setCharacters(
         characters.filter((charCB) => {
            return charCB.id !== Number(id)
         })

      )

   }


   return (

      <div className='App'>

         {
            location.pathname !== '/' && <Nav onSearch={onSearch} />
         }


         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='About' element={<About />} />
            <Route path='detail/:id' element={<Detail />} />
            <Route path='/' element={<Form login={login} />} />
            <Route path='/*' />
            <Route path='/favorites' element={<Favorites />} />

         </Routes>



      </div>

   );
}

export default App;
