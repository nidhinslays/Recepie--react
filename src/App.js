import { useState } from 'react';
import './App.css';
import Header from './Pages/Header';
import HomePage from './Pages/HomePage';
import Footer from './Pages/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Receipe from './Pages/Receipe';

function App() {
  const [search, searchFun] = useState('');

  const getSearchDetails = (value) => {
    searchFun(value);
  }

  return (
    <>
      <Header getSearchDetails={getSearchDetails}/>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} exact  Component={() => <HomePage searchedValue={search}/>}></Route>
          <Route path={'/:id/recepie'} exact Component={() => <Receipe values={search}/>}></Route>
        </Routes>
      </BrowserRouter>
      
      <Footer/>
    </>
  );
}

export default App;
