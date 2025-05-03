import {Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Utilits/Header/Header';
import Home from './Pages/landingPage/landingPage';
import React, { useState } from 'react';
// import store from './redux/Store/Store';
// import { Provider } from 'react-redux';
import SortList from './Components/SortList/SortList';
import ProductsPage from './Pages/Products/ProductsPage';


function App() {
  const [toggle,setToggle] = useState(true);

  return (
    // <Provider store={store}>
        <div className="App">
          <BrowserRouter>
          <Header toggle={toggle} setToggle={setToggle}/>
          <SortList toggle={toggle}/>
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Products' element={<ProductsPage />} />
          </Routes>
          </BrowserRouter>
        </div>
    // </Provider>
  );
}

export default App;
