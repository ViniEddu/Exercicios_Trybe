import React from 'react';
import logo from './Img/logo.png'

// Array com os itens do menu
const arrayMenuItem = ['Home', 'Photos', 'Videos', 'Biography'];

// Função para criação de uma li com a classe em todos os itens
const criaLi = (value) => {
    return (
        <li className='menu-item'>{value}</li>
    )
};

// Função para criação da lista com os itens do menu
const menuList = () => {
    return (
        arrayMenuItem.map((item) => {
            return criaLi(item)
        })
    )
};


// Em poucas palavras, este é o Header
class Header extends React.Component {
    render() {
        return (
        <header className='cabecalho'>
            <div className='titulo-imagem'>
                <h1>Conteudos de Front-End</h1>
                <img src={logo} alt="teste"/>
            </div>
            <nav className='navegacao'>
                <ol>
                    {menuList()}
                </ol>
            </nav>
        </header>
        )
    }
}

export default Header;