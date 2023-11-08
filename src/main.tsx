import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Search from './pages/Search';
import User from './pages/User';

import Navbar from './components/Nav/Navbar';

import './style/index.css';



const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<BrowserRouter>
  		<Routes>
				<Route path="/" element={<Home/>}></Route>
				<Route path="/search" element={<Search/>}></Route>
				<Route path="/user" element={<User/>}></Route>
		</Routes>
		<Navbar/>
	</BrowserRouter>
)
