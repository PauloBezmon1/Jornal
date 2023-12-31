import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from './components/header'
import Home from './pages/Home'
import Artigo from './pages/Artigo/artigo'
import NotFound from './pages/NotFound'
import Categoria from './pages/Categoria'
import Footer from './components/footer/footer'

// gerenciamento interno das "páginas"
export default function Rotas() {
    return (
        <BrowserRouter>
        <Header />
        {/* configuração do caminho das 4 páginas */}
            <Routes>
                <Route exact path="/categoria/:categoria" element={<Categoria />}/>
                <Route exact path="/categoria/:categoria/:id" element={<Artigo />}/>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="*" element={<NotFound />}/>
            </Routes>
        <Footer/>
        </BrowserRouter>
    )
}