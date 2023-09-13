import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from './components/Header';
import Home from './pages/Home'
import Artigo from './pages/Artigo'
import NotFound from './pages/NotFound'
import Categoria from './pages/Categoria'

// gerenciamento interno das "páginas"
export default function Rotas() {
    return (
        <BrowserRouter>
        {/* configuração do caminho das 4 páginas */}
                <Header/>
            <Routes>
                <Route exact path="/:categoria" Component={Categoria}/>
                <Route exact path="/:categoria/:title" Component={Artigo}/>
                <Route exact path="/" Component={Home}/>
                <Route exact path="*" Component={NotFound}/>
            </Routes>
        </BrowserRouter>
    )
}