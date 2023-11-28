import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import Search from './pages/Search';
import User from './pages/User';
import Customization from './pages/Customization';

import Navbar from './components/Nav/Navbar';

import './style/index.css';


const rootContainer = document.getElementById("root");
const root = createRoot(rootContainer!);

const AppRoutes = () => {

    const location = useLocation();

    const showNavPaths = ["/", "/user", "/search"];
    const shouldShowNav = showNavPaths.includes(location.pathname);

    return (
        <>
			<Routes>
				<Route path="/" element={<Home/>}></Route>
				<Route path="/search" element={<Search/>}></Route>
				<Route path="/user" element={<User/>}></Route>
				<Route path="/customization" element={<Customization />}></Route>
			</Routes>
            {shouldShowNav && <Navbar/>}
        </>
    );
};

root.render(
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
);