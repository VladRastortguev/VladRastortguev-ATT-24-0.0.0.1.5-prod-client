import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Homepage from '../page/Homepage/Homepage.jsx'
import Create1C from '../page/Create1C/Create1C.jsx';
import CreateTeh from '../page/CreateTeh/CreateTeh.jsx';
import Login from '../page/Login/Login.jsx';
import CreateAho from '../page/CreateAho/CreateAho.jsx';
import CreateAnonym from '../page/CreateAnonym/CreateAnonym.jsx';
// import MyTask from '../Pages/MyTaks/MyTask';
// import Detailspage from '../Pages/DetailsPage/Detailspage';


const MainRoutes = () => {
    const PUBLIC_ROUTES = [
        {link: "/", element: <Homepage/>, id: 1},
        {link: "/create1c", element: <Create1C />, id: 2},
        {link: "/createteh", element: <CreateTeh />, id: 3},
        {link: "/login", element: <Login/>, id: 4},
        {link: "/createaho", element: <CreateAho/>, id: 5},
        {link: "/createanonym", element: <CreateAnonym/>, id: 6},
    ];

    return(
        <Routes>
            {PUBLIC_ROUTES.map(item => (
                <Route path={item.link} element={item.element} key={item.id} />
            ))}
        </Routes>
    )
}

export default MainRoutes;