import React from 'react';
import {
      BrowserRouter,
      Routes,
      Route,
    } from "react-router-dom";
import AddBook from '../features/books/AddBook';
import EditBook from '../features/books/EditBook';
import ShowBook from '../features/books/ShowBook';
import Footer from '../layouts/Footer';
import NavBar from '../layouts/NavBar';
import Home from '../page/Home';
import NotFound from '../page/NotFound';

const Routing = () => {
      return (
            <BrowserRouter>
                  <NavBar/>
                  <main>
                        <Routes>
                              <Route path="/" element={<Home />}/>
                              <Route path="/show-books" element={<ShowBook />}/>
                              <Route path="/add-book" element={<AddBook />}/>
                              <Route path="/edit-book" element={<EditBook />}/>
                              <Route path="*" element={<NotFound />}/>
                        </Routes>
                  </main>
                  <Footer/>
             </BrowserRouter>
      );
};

export default Routing;